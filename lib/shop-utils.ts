import { Product, Shop } from "@/types";

export function transformProductToShop(product: Product): Shop {
  // Create slug from product title
  const slug = product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  return {
    id: product.id,
    name: product.title,
    slug: slug,
    description: product.description,
    category: product.category,
    image: product.image,
    rating: product.rating.rate,
    productCount: Math.floor(Math.random() * 50) + 10 // Random product count for demo
  };
}

export function enhanceProductsWithShopData(products: Product[]): Product[] {
  return products.map(product => ({
    ...product,
    name: product.title, // Add name for compatibility
    laybuyAvailable: true, // Default to true for demo
    stock: Math.floor(Math.random() * 100) + 1 // Random stock for demo
  }));
}

export function getShopBySlug(products: Product[], slug: string): Shop | null {
  const product = products.find(p => {
    const productSlug = p.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    return productSlug === slug;
  });
  
  return product ? transformProductToShop(product) : null;
}