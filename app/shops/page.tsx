// app/shops/page.tsx
import ShopGrid from '../../components/ShopGrid';
import ShopFilters from '@/components/ShopFilters';
import { mockShops } from '../../lib/mockData';
import { getShops } from '@/actions/products';

export default async function ShopsPage() {
  const shops = await getShops();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar Spacer */}
      <div className="h-16 bg-white border-b border-gray-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Card with Shadow */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Discover Amazing Shops
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Browse through our curated collection of shops offering flexible Laybuy payment options
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{shops.length}+</div>
              <div className="text-gray-600 text-sm">Active Shops</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">100%</div>
              <div className="text-gray-600 text-sm">Laybuy Enabled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">4.8★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Filters Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <ShopFilters />
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Featured Shops
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Showing {shops.length} shops
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-3 sm:mt-0">
            <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option className="text-gray-900">Sort by: Featured</option>
              <option className="text-gray-900">Sort by: Highest Rated</option>
              <option className="text-gray-900">Sort by: Most Products</option>
              <option className="text-gray-900">Sort by: Newest</option>
            </select>
          </div>
        </div>

        {/* Shop Grid */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <ShopGrid shops={shops} />
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-gray-900 border border-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 font-semibold shadow-sm hover:shadow-md transition-all duration-200">
            Load More Shops
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Showing {shops.length} of 100+ shops
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-white">Want to become a seller?</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Join our platform and start selling with Laybuy payment options. Reach thousands of customers looking for flexible payment solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm">
              Register Your Shop
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}