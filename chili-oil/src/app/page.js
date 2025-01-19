import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, StarIcon, TruckIcon, HeartIcon, FlameIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-red-50">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Craft Your Perfect
                <span className="text-red-600"> Chili Oil</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Start with our signature blend, then make it yours with premium ingredients. 
                Each bottle is handcrafted to your exact specifications.
              </p>
              <Link 
                href="/customize"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Start Customizing 
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-red-200 absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5" />
              <img 
                src="/api/placeholder/500/500"
                alt="Custom Chili Oil Bottle" 
                className="relative z-10 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <FlameIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Customizable Heat</h3>
              <p className="text-gray-700">
                Choose your preferred spice level, from mild warmth to intense heat
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <HeartIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Handcrafted Quality</h3>
              <p className="text-gray-700">
                Made in small batches with premium ingredients for the best flavor
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <TruckIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fast Shipping</h3>
              <p className="text-gray-700">
                Fresh-made and shipped directly to your door within 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Base",
                description: "Start with our signature chili oil blend"
              },
              {
                step: "2",
                title: "Customize",
                description: "Add your favorite ingredients"
              },
              {
                step: "3",
                title: "Order",
                description: "We'll craft your custom blend"
              },
              {
                step: "4",
                title: "Enjoy",
                description: "Receive your personalized chili oil"
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto text-white font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah K.",
                review: "The perfect balance of heat and flavor. I love that I could customize it to my taste!",
                rating: 5
              },
              {
                name: "Michael R.",
                review: "Best chili oil I've ever had. The customization options make it truly special.",
                rating: 5
              },
              {
                name: "Jessica T.",
                review: "Amazing on everything from noodles to eggs. Will definitely order again!",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="p-6 border rounded-lg bg-white shadow-sm">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.review}"</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Perfect Chili Oil?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Start customizing your blend today and experience the difference.
          </p>
          <Link 
            href="/customize"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-red-600 bg-white hover:bg-gray-100 rounded-lg transition-colors"
          >
            Start Creating
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}