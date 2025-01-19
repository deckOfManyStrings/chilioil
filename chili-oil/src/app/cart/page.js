'use client';

import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { stripePromise } from '../../lib/stripe';
import toast from 'react-hot-toast';

// ... rest of your existing cart code ...

async function handleCheckout() {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const { sessionId, error } = await response.json();
    if (error) throw new Error(error);

    const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
    if (stripeError) throw new Error(stripeError.message);
  } catch (err) {
    toast.error('Checkout failed. Please try again.');
    console.error('Checkout error:', err);
  }
}

// Replace your existing checkout button with:
<button
  onClick={handleCheckout}
  className="w-full mt-6 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
>
  Proceed to Checkout
</button>