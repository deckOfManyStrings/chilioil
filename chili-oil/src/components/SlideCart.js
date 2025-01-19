// components/SlideCart.js
'use client';

import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function SlideCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, updateQuantity, cartTotal } = useCart();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-slate-700 hover:text-rose-600 relative"
      >
        <ShoppingCart className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-rose-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-slate-50/90 z-50">
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-slate-900">Your Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-slate-700">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id + JSON.stringify(item.customizations)} className="flex border rounded-lg p-4">
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-900">{item.name}</h3>
                        {item.customizations && (
                          <div className="mt-1 text-sm">
                            <p className="text-slate-700">Size: {item.customizations.size}</p>
                            {item.customizations.ingredients?.map((ing) => (
                              <p key={ing.id} className="text-slate-700">+ {ing.name}</p>
                            ))}
                          </div>
                        )}
                        <div className="mt-2 flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item, Math.max(0, item.quantity - 1))}
                            className="p-1 text-slate-600 hover:text-rose-600"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item, item.quantity + 1)}
                            className="p-1 text-slate-600 hover:text-rose-600"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => removeItem(item)}
                            className="p-1 text-slate-600 hover:text-rose-600 ml-4"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="font-medium text-slate-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t p-4 space-y-4">
                <div className="flex justify-between text-lg font-semibold text-slate-900">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Link
                  href="/checkout"
                  className="block w-full py-3 px-4 text-center bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700"
                  onClick={() => setIsOpen(false)}
                >
                  Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}