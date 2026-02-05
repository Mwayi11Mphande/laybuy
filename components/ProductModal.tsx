// components/ProductModal.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  laybuyAvailable: boolean;
  stock: number;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('4-weeks');

  const installmentPlans = [
    { id: '4-weeks', name: '4 Payments', amount: (product.price / 4).toFixed(2), frequency: 'Every 2 weeks' },
    { id: '8-weeks', name: '8 Payments', amount: (product.price / 8).toFixed(2), frequency: 'Weekly' },
  ];

  const addToCart = () => {
    // Implement cart functionality
    console.log('Added to cart:', { product, quantity, plan: selectedPlan });
    onClose();
  };

  const buyNow = () => {
    // Implement direct purchase
    console.log('Buy now:', { product, quantity, plan: selectedPlan });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.laybuyAvailable && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-green-600 font-semibold">LayBuy Available</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  product.stock > 10 
                    ? 'bg-green-100 text-green-800' 
                    : product.stock > 0
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
                </span>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={product.stock === 0}
                >
                  {Array.from({ length: Math.min(product.stock, 10) }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              {/* Laybuy Plans */}
              {product.laybuyAvailable && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose Laybuy Plan
                  </label>
                  <div className="space-y-2">
                    {installmentPlans.map((plan) => (
                      <label key={plan.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-indigo-300 cursor-pointer">
                        <input
                          type="radio"
                          name="installment-plan"
                          value={plan.id}
                          checked={selectedPlan === plan.id}
                          onChange={(e) => setSelectedPlan(e.target.value)}
                          className="text-indigo-600 focus:ring-indigo-500"
                        />
                        <div>
                          <div className="font-medium">{plan.name}</div>
                          <div className="text-sm text-gray-600">
                            ${plan.amount} {plan.frequency}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={addToCart}
                  disabled={product.stock === 0}
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold"
                >
                  Add to Cart
                </button>
                
                {product.laybuyAvailable && (
                  <button 
                    onClick={buyNow}
                    disabled={product.stock === 0}
                    className="w-full border-2 border-indigo-600 text-indigo-600 py-3 px-4 rounded-lg hover:bg-indigo-50 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed font-semibold"
                  >
                    Buy Now with Laybuy
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}