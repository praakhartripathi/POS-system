import React from "react";
import { useNavigate } from "react-router-dom";

const BranchManagerDashboard = () => {
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
            <h1 className="text-2xl font-bold text-gray-900">Branch Manager Dashboard</h1>
            <p className="text-gray-500">Branch Performance & Operations</p>
          </div>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-700">Today's Sales</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">$12,450</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="font-semibold text-gray-700">Active Registers</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">4/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchManagerDashboard;