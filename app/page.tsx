// app/page.tsx
import { getProducts, getShops } from "@/actions/products";
import ShopGrid from "@/components/ShopGrid";

import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  const shops = await getShops();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shop Now, Pay Later
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Discover amazing products from local sellers and spread your
              payments over time with Laybyt
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Shopping
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                Become a Seller
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How Laybyt Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Browse & Select",
                description: "Explore shops and add items to your cart",
              },
              {
                step: "2",
                title: "Choose Laybuy Plan",
                description: "Select your preferred installment plan",
              },
              {
                step: "3",
                title: "Pay & Receive",
                description: "Make payments over time and get your product",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-indigo-600">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl text-black font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Shops */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Shops</h2>
            <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
              <Link href="/shops" >View All Shops →</Link>
            </button>
          </div>
          {/* <ProductGrid products={products} /> */}
          <ShopGrid shops={shops} />
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Laybyt?
              </h2>
              <div className="space-y-4">
                {[
                  "No credit checks required",
                  "Flexible payment plans",
                  "Secure escrow protection",
                  "Direct communication with sellers",
                  "Track your payment progress",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of buyers and sellers already using Laybyt
              </p>
              <div className="space-y-4">
                <button className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Create Buyer Account
                </button>
                <button className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  Register as Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
