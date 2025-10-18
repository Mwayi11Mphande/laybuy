// app/community/page.tsx
export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar Spacer */}
      <div className="h-16 bg-white/80 backdrop-blur-sm border-b border-gray-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Laybyt Community
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Connect with other buyers and sellers. Share experiences, get support, and grow together in our vibrant marketplace community.
            </p>
          </div>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Discussion Forums',
              description: 'Join conversations about products, payments, and shopping experiences',
              icon: '💬',
              color: 'from-blue-500 to-blue-600',
              bgColor: 'bg-blue-50',
              textColor: 'text-blue-600'
            },
            {
              title: 'Seller Resources',
              description: 'Tips and guides for successful selling with Laybuy payments',
              icon: '🏪',
              color: 'from-green-500 to-green-600',
              bgColor: 'bg-green-50',
              textColor: 'text-green-600'
            },
            {
              title: 'Buyer Guides',
              description: 'Learn how to make the most of Laybuy payment plans',
              icon: '🛒',
              color: 'from-purple-500 to-purple-600',
              bgColor: 'bg-purple-50',
              textColor: 'text-purple-600'
            },
            {
              title: 'Success Stories',
              description: 'Read inspiring stories from our community members',
              icon: '⭐',
              color: 'from-yellow-500 to-yellow-600',
              bgColor: 'bg-yellow-50',
              textColor: 'text-yellow-600'
            },
            {
              title: 'Support Center',
              description: 'Get help with any issues or questions about Laybuy',
              icon: '❓',
              color: 'from-red-500 to-red-600',
              bgColor: 'bg-red-50',
              textColor: 'text-red-600'
            },
            {
              title: 'Events & Webinars',
              description: 'Join live events and learning sessions about smart shopping',
              icon: '🎤',
              color: 'from-indigo-500 to-indigo-600',
              bgColor: 'bg-indigo-50',
              textColor: 'text-indigo-600'
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <div className="mt-4">
                <button className={`bg-gradient-to-r ${feature.color} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-200`}>
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-10 text-white text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Growing Community</h2>
            <p className="text-indigo-100 text-lg mb-12 max-w-2xl mx-auto">
              Be part of thousands of smart shoppers and sellers who choose Laybuy for flexible payments
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-3">10,000+</div>
                <div className="text-indigo-100 text-lg font-medium">Active Members</div>
                <div className="text-indigo-200 text-sm mt-2">and growing daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-3">500+</div>
                <div className="text-indigo-100 text-lg font-medium">Verified Sellers</div>
                <div className="text-indigo-200 text-sm mt-2">trusted partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-3">$1M+</div>
                <div className="text-indigo-100 text-lg font-medium">Total Transactions</div>
                <div className="text-indigo-200 text-sm mt-2">and counting</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join the Community?</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Connect with like-minded shoppers and sellers. Share your experiences, learn from others, and make the most of your Laybuy journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Join Community Forums
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="mt-6 text-gray-500 text-sm">
              🚀 Free to join • 24/7 access • Verified members only
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What Our Community Says</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah M.',
                role: 'Buyer',
                comment: 'The community helped me understand Laybuy payments better. Saved me hundreds!',
                avatar: '👩'
              },
              {
                name: 'Mike R.',
                role: 'Seller',
                comment: 'Great platform for connecting with customers. The seller resources are invaluable.',
                avatar: '👨'
              },
              {
                name: 'Lisa T.',
                role: 'Buyer & Seller',
                comment: 'Best of both worlds! I shop and sell using Laybuy. The community is so supportive.',
                avatar: '👩‍💼'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-indigo-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}