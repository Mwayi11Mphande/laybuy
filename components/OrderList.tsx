// components/OrderList.tsx
'use client';

interface Order {
  id: number;
  buyerName: string;
  items: string[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  laybuyUsed: boolean;
  createdAt: string;
}

export default function OrderList() {
  const orders: Order[] = [
    {
      id: 1234,
      buyerName: 'Sarah Johnson',
      items: ['Fjallraven Backpack'],
      total: 109.95,
      status: 'pending',
      laybuyUsed: true,
      createdAt: '2024-01-15'
    },
    {
      id: 1235,
      buyerName: 'Mike Chen',
      items: ['Mens Casual Shirt', 'Mens Cotton Jacket'],
      total: 55.30,
      status: 'confirmed',
      laybuyUsed: false,
      createdAt: '2024-01-14'
    },
    {
      id: 1236,
      buyerName: 'Emma Davis',
      items: ['WD 2TB Elements Portable HDD'],
      total: 64.99,
      status: 'shipped',
      laybuyUsed: true,
      createdAt: '2024-01-13'
    }
  ];

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="font-semibold text-gray-900">Order #{order.id}</h4>
              <p className="text-gray-600">Customer: {order.buyerName}</p>
            </div>
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
              <p className="text-sm text-gray-600 mt-1">MK{order.total}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">
                Items: {order.items.join(', ')}
              </p>
              <p className="text-sm text-gray-500">
                Ordered on {new Date(order.createdAt).toLocaleDateString()}
                {order.laybuyUsed && ' • Laybuy Payment'}
              </p>
            </div>
            
            <div className="flex space-x-2">
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                View Details
              </button>
              {order.status === 'pending' && (
                <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700">
                  Confirm
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}