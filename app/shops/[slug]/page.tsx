import { notFound } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';
import ShopHeader from '@/components/ShopHeader';
import { getProducts } from '@/actions/products';
import { getShopBySlug, enhanceProductsWithShopData } from '@/lib/shop-utils';
import LaybuyCTASection from '@/components/LaybuyCTASection';
import PaymentInfoCard from '@/components/PaymentInfoCard';

interface ShopPageProps {
  params: {
    slug: string;
  };
}

export default async function ShopPage({ params }: ShopPageProps) {
  const {slug} = await params;
  const products = await getProducts();
  const shop = getShopBySlug(products, slug);
  
  if (!shop) {
    notFound();
  }

  // For demo purposes, show all products from the same category as the shop
  const shopProducts = enhanceProductsWithShopData(
    products.filter(p => p.category === shop.category && p.id !== shop.id)
  ).slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Shop Header Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <ShopHeader shop={shop} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Laybuy CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
              <LaybuyCTASection />
            </div>

            {/* Products Section */}
            <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Shop Products</h2>
                  <p className="text-gray-600 mt-1">
                    {shopProducts.length} products available with Laybuy
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-3 sm:mt-0">
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                    🛒 Add to Cart & Pay Later
                  </span>
                </div>
              </div>
              
              <ProductGrid products={shopProducts} />
            </section>

            {/* Shop Info Section */}
            <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">About This Shop</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{shop.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-600 font-medium">Category:</span>
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                        {shop.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-600 font-medium">Rating:</span>
                      <span className="flex items-center text-yellow-600 font-semibold">
                        ⭐ {shop.rating} ({shop.productCount}+ products)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-600 font-medium">Laybuy Status:</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        ✅ Approved Partner
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold mb-4 text-gray-900 text-lg">Shop Policies & Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Laybuy available on all products</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Free shipping on orders over $50</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">30-day hassle-free return policy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Direct chat with seller support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">Secure Tecam payment processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Payment Info Card */}
            <PaymentInfoCard />

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
                  Start Shopping
                </button>
                <button className="w-full border-2 border-indigo-600 text-indigo-600 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
                  Contact Seller
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  Share Shop
                </button>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg border border-blue-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Our support team is here to help with Laybuy payments and orders.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">📞</span>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">💬</span>
                  <span className="text-gray-700">Live Chat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">🛡️</span>
                  <span className="text-gray-700">Secure Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}