{/*
 import { serve } from 'https://deno.land/std@0.192.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe@14.11.0?target=deno';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient()
});
const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') || '';
serve(async (req)=>{
  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    console.error('❌ No signature in request');
    return new Response('No signature', {
      status: 400
    });
  }
  try {
    const body = await req.text();
    const event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
    //console.log('📥 Webhook event received:', event.type);
    // Solo procesar checkout completado
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const campaignId = session.metadata?.campaign_id;
      const amountTotal = session.amount_total || 0;
      const amount = amountTotal / 100 // Convertir de centavos a dólares
      ;
      const currency = (session.currency || 'usd').toUpperCase();
      const paymentIntentId = session.payment_intent;
      const customerEmail = session.customer_details?.email;
      //console.log('💰 Payment completed:', {
        campaignId,
        amount,
        currency,
        paymentIntentId,
        customerEmail
      });
      if (!campaignId) {
        console.error('❌ No campaign_id in session metadata');
        return new Response(JSON.stringify({
          error: 'Missing campaign_id in metadata'
        }), {
          status: 400
        });
      }
      const supabase = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
      // 1️⃣ Insertar donación
      const { data: donation, error: donationError } = await supabase.from('donations').insert({
        campaign_id: campaignId,
        amount: amount,
        currency: currency,
        amount_in_campaign_ccy: amount,
        status: 'paid',
        provider: 'stripe',
        provider_payment_id: paymentIntentId,
        provider_charge_id: session.id,
        net_amount: amount,
        receipt_url: session.url,
        payout_status: 'none',
        payout_mode: 'connect'
      }).select().single();
      if (donationError) {
        console.error('❌ Error inserting donation:', donationError);
        return new Response(JSON.stringify({
          error: 'Failed to save donation',
          details: donationError
        }), {
          status: 500
        });
      }
      //console.log('✅ Donation saved:', donation.id);
      // 2️⃣ Actualizar total_raised de la campaña
      const { error: updateError } = await supabase.from('campaigns').update({
        total_raised: supabase.rpc('increment_total_raised', {
          row_id: campaignId,
          increment_by: amount
        }),
        updated_at: new Date().toISOString()
      }).eq('id', campaignId);
      // Alternativa más simple (sin RPC):
      const { data: currentCampaign } = await supabase.from('campaigns').select('total_raised').eq('id', campaignId).single();
      if (currentCampaign) {
        const newTotal = (currentCampaign.total_raised || 0) + amount;
        await supabase.from('campaigns').update({
          total_raised: newTotal,
          updated_at: new Date().toISOString()
        }).eq('id', campaignId);
        //console.log('✅ Campaign total updated:', newTotal);
      }
      // 3️⃣ TODO: Enviar notificación al owner (opcional)
      // await supabase.functions.invoke('send-notification', {
      //   body: { type: 'new_donation', campaignId, amount }
      // })
      return new Response(JSON.stringify({
        received: true,
        donation_id: donation.id
      }), {
        status: 200
      });
    }
    // Otros eventos de Stripe
    //console.log('ℹ️ Unhandled event type:', event.type);
    return new Response(JSON.stringify({
      received: true
    }), {
      status: 200
    });
  } catch (error) {
    console.error('💥 Webhook error:', error);
    return new Response(JSON.stringify({
      error: error.message
    }), {
      status: 400
    });
  }
});

  */}