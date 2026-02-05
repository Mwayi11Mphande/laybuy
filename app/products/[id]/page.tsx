// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getProductById, getProducts } from '@/actions/products';
import ProductDetail from '@/components/ProductDetail';
import RelatedProducts from '@/components/RelatedProducts';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = parseInt(id);
  
  if (isNaN(productId)) {
    notFound();
  }
  
  const product = await getProductById(productId);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar Spacer */}
      <div className="h-16 bg-white border-b border-gray-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductDetail product={product} />
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
}

// Generate static params for better performance
export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}