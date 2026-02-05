// components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info with Logo */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Image
                    src="/laybuy6.png"
                    alt="Laybyt Logo"
                    width={500}
                    height={800}
                    className="object-contain h-10 w-auto md:h-12"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white leading-tight">Laybyt</span>
                  <span className="text-sm text-gray-300">Shop Now, Pay Later</span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering buyers and sellers with flexible payment solutions. 
                Shop now, pay later with confidence. Experience the future of 
                accessible shopping today.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-lg">📘</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <span className="text-lg">🐦</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-lg">📷</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-lg">💼</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/shops" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">🏪</span>
                    Browse Shops
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/products" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">🛍️</span>
                    All Products
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/how-it-works" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">❓</span>
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/faq" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">📚</span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-white">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/help" 
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <span className="mr-2">💬</span>
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <span className="mr-2">📞</span>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/seller-support" 
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <span className="mr-2">🏪</span>
                      Seller Support
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/privacy" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/terms" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/refund" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider and Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  &copy; {currentYear} <span className="text-white font-semibold">TECAM</span>. All rights reserved.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <Link 
                  href="/sitemap" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Sitemap
                </Link>
                <Link 
                  href="/accessibility" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Accessibility
                </Link>
                <Link 
                  href="/cookies" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center text-gray-500 text-sm">
              <p>
                Laybyt is a registered trademark of TECAM. All other trademarks are the property of their respective owners.
              </p>
              <p className="mt-2">
                Designed for accessible shopping worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}