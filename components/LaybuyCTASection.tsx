'use client';

export default function LaybuyCTASection() {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center space-x-2 mb-4">
        <div className="bg-white/20 rounded-full p-2">
          <span className="text-xl">🛒</span>
        </div>
        <h3 className="text-2xl font-bold">Shop Now, Pay Later with Laybuy</h3>
      </div>
      <p className="text-indigo-100 text-lg mb-6 max-w-2xl mx-auto">
        Spread your payments over time. Add items to cart and choose Laybuy at checkout with our secure Tecam payment gateway.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button 
          onClick={() => {
            // Simulate adding to cart and starting payment process
            console.log('Starting Laybuy payment process...');
            // This would trigger your Tecam payment gateway simulation
          }}
          className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
        >
          🛒 Start Shopping with Laybuy
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
          Learn How Laybuy Works
        </button>
      </div>
    </div>
  );
}