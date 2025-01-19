import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Craft Chili Oil</h3>
            <p className="text-sm">
              Handcrafted with love.<br />
              Made fresh for every order.
            </p>
            <div className="space-x-4">
              <a href="https://instagram.com" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://facebook.com" className="hover:text-white transition-colors">Facebook</a>
              <a href="https://twitter.com" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/customize" className="hover:text-white transition-colors">
                  Customize Your Oil
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Pre-made Blends
                </Link>
              </li>
              <li>
                <Link href="/gifts" className="hover:text-white transition-colors">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-white transition-colors">
                  Wholesale
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
            <p className="text-sm">Subscribe to get special offers and recipes.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500 text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-sm">
              © {new Date().getFullYear()} Craft Chili Oil. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm md:justify-end">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}