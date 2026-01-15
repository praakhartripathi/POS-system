import React from "react";
import { useNavigate } from "react-router-dom";

const CashierDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm border">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Cashier Station</h1>
            <p className="text-gray-500">Ready for transactions</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button className="h-40 bg-primary text-primary-foreground rounded-xl shadow-lg hover:opacity-90 transition-opacity flex flex-col items-center justify-center text-xl font-bold bg-blue-600 text-white">
            <span className="text-4xl mb-2">🛒</span>
            New Sale
          </button>
          <button className="h-40 bg-white text-gray-800 border rounded-xl shadow-sm hover:bg-gray-50 transition-colors flex flex-col items-center justify-center text-xl font-bold">
            <span className="text-4xl mb-2">📜</span>
            Transaction History
          </button>
        </div>
      </div>
    </div>
  );
};

export default CashierDashboard;