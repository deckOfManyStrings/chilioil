import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, StarIcon, PackageIcon, FlameIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-rose-50">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
                Pick, Pack, and <span className="text-rose-600">Pour</span>
              </h1>
              <p className="text-xl text-slate-800">
                Create your perfect chili oil at home. You pick your spices, we pack them perfectly, and you just pour.
              </p>
              <Link 
                href="/customize"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors"
              >
                Start Creating 
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-rose-100 absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5" />
              <img 
                src="/api/placeholder/500/500"
                alt="Custom Spice Kit" 
                className="relative z-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Three Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <StarIcon className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">You Pick</h3>
              <p className="text-slate-800">
                Choose your spice blend from our signature base and customizable add-ins
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <PackageIcon className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">We Pack</h3>
              <p className="text-slate-800">
                We perfectly portion and package your custom spice blend kit
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <FlameIcon className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Just Pour</h3>
              <p className="text-slate-800">
                Heat your oil of choice and pour over your spices for fresh chili oil at home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Contents */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            What's In Your Kit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Every Kit Includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-3"></span>
                  <span className="text-slate-800">Our signature spice blend base</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-3"></span>
                  <span className="text-slate-800">Your chosen additional spices</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-3"></span>
                  <span className="text-slate-800">Infusion jar with measurement marks</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-3"></span>
                  <span className="text-slate-800">Step-by-step infusion guide</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">You'll Need:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-3"></span>
                  <span className="text-slate-800">Your choice of neutral oil (recommendations included)</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-3"></span>
                  <span className="text-slate-800">A cooking thermometer</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-rose-600 rounded-full mr-3"></span>
                  <span className="text-slate-800">10 minutes of your time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Perfect Blend?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your spices and start making fresh chili oil at home.
          </p>
          <Link 
            href="/customize"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-rose-600 bg-white hover:bg-rose-50 rounded-lg transition-colors"
          >
            Start Creating
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}