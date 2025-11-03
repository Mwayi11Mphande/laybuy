export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  // Add these properties to match your ProductGrid expectations
  name?: string;
  laybuyAvailable?: boolean;
  stock?: number;
}

export interface Shop {
  id: number;
  name: string;
  slug: string; // Add slug to Shop interface
  description: string;
  category: string;
  image: string;
  rating: number;
  productCount: number;
}

export interface Seller {
  id: number;
  name: string;
  email: string;
  shopName: string;
  shopSlug: string;
  avatar?: string;
  joinedDate: string;
  totalSales: number;
}

export interface SellerProduct {
  id: number;
  sellerId: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
  laybuyAvailable: boolean;
  createdAt: string;
  status: 'active' | 'inactive';
}

export interface ChatMessage {
  id: number;
  sellerId: number;
  buyerId: number;
  buyerName: string;
  message: string;
  timestamp: string;
  isSeller: boolean;
  read: boolean;
}

export interface Order {
  id: number;
  sellerId: number;
  buyerName: string;
  buyerEmail: string;
  // items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  laybuyUsed: boolean;
  createdAt: string;
}