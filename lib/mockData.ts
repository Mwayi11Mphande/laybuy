// lib/mockData.ts
export const mockShops = [
  {
    id: 1,
    name: "Tech Galaxy",
    description: "Your one-stop shop for the latest electronics and gadgets",
    category: "Electronics",
    rating: 4.7,
    productCount: 23,
    image: "/tech-shop.jpg"
  },
  {
    id: 2,
    name: "Fashion Hub",
    description: "Trendy clothing and accessories for every style",
    category: "Fashion",
    rating: 4.3,
    productCount: 45,
    image: "/fashion-shop.jpg"
  },
  {
    id: 3,
    name: "Home Comforts",
    description: "Everything you need to make your house a home",
    category: "Home & Garden",
    rating: 4.8,
    productCount: 32,
    image: "/home-shop.jpg"
  },
  {
    id: 4,
    name: "Sports Gear Pro",
    description: "Professional sports equipment and accessories",
    category: "Sports",
    rating: 4.6,
    productCount: 18,
    image: "/sports-shop.jpg"
  },
  {
    id: 5,
    name: "Beauty Bliss",
    description: "Premium beauty products and skincare",
    category: "Beauty",
    rating: 4.4,
    productCount: 27,
    image: "/beauty-shop.jpg"
  },
  {
    id: 6,
    name: "Book Nook",
    description: "Curated collection of books for all readers",
    category: "Books",
    rating: 4.9,
    productCount: 15,
    image: "/book-shop.jpg"
  }
];

export const mockProducts = [
  {
    id: 1,
    shopId: 1,
    name: "Smartphone Pro",
    price: 799,
    description: "Latest smartphone with advanced camera and performance features. Perfect for work and entertainment.",
    image: "/phone.jpg",
    category: "Electronics",
    laybuyAvailable: true,
    stock: 15
  },
  {
    id: 2,
    shopId: 1,
    name: "Wireless Earbuds",
    price: 149,
    description: "Noise-cancelling wireless earbuds with premium sound quality and long battery life.",
    image: "/earbuds.jpg",
    category: "Electronics",
    laybuyAvailable: true,
    stock: 30
  },
  {
    id: 3,
    shopId: 2,
    name: "Designer Jacket",
    price: 199,
    description: "Premium quality designer jacket made from sustainable materials. Perfect for all seasons.",
    image: "/jacket.jpg",
    category: "Fashion",
    laybuyAvailable: true,
    stock: 10
  },
  {
    id: 4,
    shopId: 2,
    name: "Running Shoes",
    price: 129,
    description: "Comfortable running shoes with advanced cushioning technology for maximum performance.",
    image: "/shoes.jpg",
    category: "Fashion",
    laybuyAvailable: false,
    stock: 25
  },
  {
    id: 5,
    shopId: 3,
    name: "Smart Home Speaker",
    price: 89,
    description: "Voice-controlled smart speaker with excellent sound quality and smart home integration.",
    image: "/speaker.jpg",
    category: "Home & Garden",
    laybuyAvailable: true,
    stock: 40
  },
  {
    id: 6,
    shopId: 4,
    name: "Yoga Mat",
    price: 49,
    description: "Premium non-slip yoga mat with extra cushioning for comfortable workouts.",
    image: "/yoga-mat.jpg",
    category: "Sports",
    laybuyAvailable: true,
    stock: 20
  }
];