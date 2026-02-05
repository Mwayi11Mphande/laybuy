// app/cart/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  shopName: string;
  shopSlug: string;
  laybuyAvailable: boolean;
  category: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Set client-side flag to prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load cart items from localStorage
  useEffect(() => {
    if (!isClient) return;

    const loadCartItems = () => {
      try {
        const savedCart = localStorage.getItem('laybuy-cart');
        if (savedCart) {
          setCartItems(JSON.parse(savedCart));
        } else {
          // Demo cart items
          const demoCart: CartItem[] = [
            {
              id: 1,
              productId: 1,
              name: 'Fjallraven Backpack',
              price: 109.95,
              quantity: 1,
              image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
              shopName: 'Fjallraven Shop',
              shopSlug: 'fjallraven-shop',
              laybuyAvailable: true,
              category: "men's clothing"
            },
            {
              id: 2,
              productId: 2,
              name: 'Mens Casual Shirt',
              price: 22.3,
              quantity: 1,
              image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
              shopName: 'Casual Wear',
              shopSlug: 'casual-wear',
              laybuyAvailable: true,
              category: "men's clothing"
            }
          ];
          setCartItems(demoCart);
          localStorage.setItem('laybuy-cart', JSON.stringify(demoCart));
        }
      } catch (error) {
        console.error('Error loading cart:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCartItems();
  }, [isClient]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('laybuy-cart', JSON.stringify(updatedItems));
  };

  const removeItem = (id: number) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('laybuy-cart', JSON.stringify(updatedItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('laybuy-cart');
  };

  // Group items by shop
  const itemsByShop = cartItems.reduce((acc, item) => {
    if (!acc[item.shopSlug]) {
      acc[item.shopSlug] = {
        shopName: item.shopName,
        items: [],
        total: 0
      };
    }
    acc[item.shopSlug].items.push(item);
    acc[item.shopSlug].total += item.price * item.quantity;
    return acc;
  }, {} as Record<string, { shopName: string; items: CartItem[]; total: number }>);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  // Checkout functions
  const applyForLaybuy = (shopSlug?: string) => {
    const shopTotal = shopSlug ? itemsByShop[shopSlug]?.total : total;
    const shopName = shopSlug ? itemsByShop[shopSlug]?.shopName : 'Multiple Shops';
    
    alert(`Applying for Laybuy with ${shopName}!\n\nTotal: MK${shopTotal.toFixed(2)}\nPayments: 4 x MK${(shopTotal / 4).toFixed(2)}\n\nRedirecting to Tecam Payment Gateway...`);
  };

  const buyNow = (shopSlug?: string) => {
    const shopTotal = shopSlug ? itemsByShop[shopSlug]?.total : total;
    const shopName = shopSlug ? itemsByShop[shopSlug]?.shopName : 'Multiple Shops';
    
    alert(`💳 Buying now from ${shopName}!\n\nTotal: MK${shopTotal.toFixed(2)}\n\nRedirecting to secure checkout...`);
  };

  // Show loading state on server
  if (!isClient || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Your Cart</h2>
          <p className="text-gray-600">Please wait while we load your shopping cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar Spacer */}
      <div className="h-16"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
              <p className="text-gray-600">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} from {Object.keys(itemsByShop).length} shops
              </p>
            </div>
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-semibold px-4 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors mt-4 sm:mt-0"
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <div className="text-gray-400 mb-6">
              <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 13m-7.5 5.5V21" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Discover amazing products from our shops and enjoy flexible Laybuy payment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shops"
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Browse Shops
              </Link>
              <Link
                href="/"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-xl hover:bg-indigo-50 font-semibold transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shop-based Cart Sections */}
              {Object.entries(itemsByShop).map(([shopSlug, shopData]) => (
                <div key={shopSlug} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* Shop Header */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{shopData.shopName}</h3>
                        <p className="text-gray-600 text-sm">
                          {shopData.items.length} {shopData.items.length === 1 ? 'item' : 'items'} • MK{shopData.total.toFixed(2)}
                        </p>
                      </div>
                      <Link
                        href={`/shops/${shopSlug}`}
                        className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
                      >
                        Visit Shop →
                      </Link>
                    </div>
                  </div>

                  {/* Shop Items */}
                  {shopData.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-6 p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-xl shadow-sm"
                          sizes="96px"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-2xl font-bold text-gray-900">MK{item.price}</span>
                          {item.laybuyAvailable && (
                            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                              Laybuy Available
                            </span>
                          )}
                          <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-full border text-gray-600 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-full border text-gray-600 border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right min-w-20">
                        <div className="text-lg font-bold text-gray-900">
                          MK{(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 p-2 transition-colors mt-2"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Shop Actions */}
                  <div className="p-4 bg-gray-50 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => applyForLaybuy(shopSlug)}
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      🛒 Apply Laybuy (This Shop)
                    </button>
                    <button
                      onClick={() => buyNow(shopSlug)}
                      className="flex-1 border-2 border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                    >
                      💳 Buy Now (This Shop)
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-8">
                <h2 className="text-xl font-semibold mb-6 text-gray-900">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">MK{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600 font-semibold">FREE</span>
                      ) : (
                        `MK${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {subtotal < 50 && (
                    <div className="text-sm text-orange-600 bg-orange-50 p-3 rounded-lg">
                      Add MK{(50 - subtotal).toFixed(2)} more for free shipping!
                    </div>
                  )}
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>MK{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Laybuy Breakdown */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-green-800 mb-3">Laybuy Payment Plan</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-700">Today</span>
                      <span className="font-semibold text-green-800">MK{(total / 4).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-700">Every 2 weeks</span>
                      <span className="font-semibold text-green-800">MK{(total / 4).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-green-700">
                      <span>Total</span>
                      <span>MK{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => applyForLaybuy()}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    🛒 Apply Laybuy (All Items)
                  </button>
                  <button 
                    onClick={() => buyNow()}
                    className="w-full border-2 border-indigo-600 text-indigo-600 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
                  >
                    💳 Buy All Now
                  </button>
                  <Link
                    href="/shops"
                    className="block text-center text-indigo-600 hover:text-indigo-700 font-semibold py-3 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>

                {/* Security Badge */}
                <div className="text-center mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                    <span>🛡️</span>
                    <span>Secure checkout powered by Tecam Gateway</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}