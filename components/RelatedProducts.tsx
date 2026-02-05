// components/RelatedProducts.tsx
import { getProducts } from '@/actions/products';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedProductsProps {
  currentProduct: {
    id: number;
    category: string;
  };
}

export default async function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  try {
    const products = await getProducts();
    const relatedProducts = products
      .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
      .slice(0, 4);

    if (relatedProducts.length === 0) return null;

    return (
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Related Products</h2>
          <span className="text-gray-500 text-sm">
            in {currentProduct.category}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-100 group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="text-indigo-600 text-4xl font-bold">
                      {product.category.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                      MK{product.price}
                    </h3>
                    <span className="flex items-center text-sm text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                      ⭐ {product.rating.rate} 
                      {product.rating.count && ` (${product.rating.count})`}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.title}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-md">{product.category}</span>
                    <span className="text-green-600 font-medium">
                      {product.laybuyAvailable ? 'Laybuy Available' : 'Pay in Full'}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to load related products:', error);
    return null;
  }
}
