'use client';

import { Minus, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

export default function Cart() {
  const { items, removeItem, updateQuantity, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
          <p className="mt-4 text-slate-600">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            {items.map((item) => (
              <div
                key={item.id + JSON.stringify(item.customizations)}
                className="p-6 border-b last:border-b-0"
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.name}
                    </h3>
                    {item.customizations && (
                      <div className="mt-2">
                        <h4 className="text-sm font-medium text-slate-700">Customizations:</h4>
                        <ul className="mt-1 space-y-1">
                          <li className="text-sm text-slate-600">
                            Size: {item.customizations.size}
                          </li>
                          {item.customizations.ingredients?.map((ingredient) => (
                            <li key={ingredient.id} className="text-sm text-slate-600">
                              + {ingredient.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="ml-4">
                    <p className="text-lg font-medium text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => removeItem(item)}
                      className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item, Math.max(0, item.quantity - 1))}
                        className="p-2 text-slate-600 hover:text-rose-600 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 text-slate-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                        className="p-2 text-slate-600 hover:text-rose-600 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="text-slate-900">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shipping</span>
                <span className="text-slate-900">Calculated at checkout</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-slate-900">Total</span>
                  <span className="text-lg font-semibold text-slate-900">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              className="w-full mt-6 bg-rose-600 text-white py-3 px-4 rounded-lg hover:bg-rose-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
