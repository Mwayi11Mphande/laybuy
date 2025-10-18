'use client';

export default function PaymentInfoCard() {
  const simulatePayment = () => {
    // Simulate Tecam payment gateway
    alert('Redirecting to Tecam Payment Gateway...\n\nThis would integrate with:\n- Payment processing\n- Installment plans\n- Secure transaction handling\n- Order confirmation');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Laybuy Payment Options</h4>
      
      <div className="space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-green-600 text-lg">✓</span>
            <span className="font-semibold text-green-800">Pay in 4 Installments</span>
          </div>
          <p className="text-green-700 text-sm">
            Split your payment into 4 equal parts over 6 weeks
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-600 text-lg">⚡</span>
            <span className="font-semibold text-blue-800">Instant Approval</span>
          </div>
          <p className="text-blue-700 text-sm">
            No credit checks, get approved instantly
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-purple-600 text-lg">🛡️</span>
            <span className="font-semibold text-purple-800">Tecam Secure</span>
          </div>
          <p className="text-purple-700 text-sm">
            Bank-level security with our payment gateway
          </p>
        </div>

        <button 
          onClick={simulatePayment}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
        >
          💳 Process Payment with Tecam
        </button>

        <div className="text-center text-xs text-gray-500">
          Secure payment processing powered by Tecam Gateway
        </div>
      </div>
    </div>
  );
}