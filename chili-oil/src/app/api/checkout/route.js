// app/api/checkout/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { items } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: formatCustomizations(item.customizations),
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error('Stripe API error:', err);
    return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 });
  }
}

function formatCustomizations(customizations) {
  if (!customizations) return '';
  
  let description = `Size: ${customizations.size}\\n`;
  if (customizations.ingredients?.length) {
    description += 'Added ingredients:\\n';
    customizations.ingredients.forEach(ing => {
      description += `- ${ing.name}\\n`;
    });
  }
  return description;
}