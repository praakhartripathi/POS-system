import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import importedProducts from "../data/dummyProducts";

const CashierDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([
    { id: 1, name: "Men's Cotton Shirt", sku: "SHIRT-001", price: 1200, qty: 1 },
    { id: 2, name: "Analog Leather Watch", sku: "WATCH-002", price: 3500, qty: 1 },
    { id: 3, name: "Silk Saree", sku: "SAREE-003", price: 4500, qty: 1 },
  ]);
  const searchInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("PERCENTAGE"); // "PERCENTAGE" or "FIXED"

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/signin");
  };

  // Fallback to empty array if import fails to prevent crash
  const productsList = Array.isArray(importedProducts) ? importedProducts : [];

  // Safety check: Ensure dummyProducts is an array before filtering
  // LIMIT to 50 items to prevent browser freeze/blank screen
  const filteredProducts = productsList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 50);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        { ...product, qty: 1, sku: `SKU-${product.id.toString().padStart(3, "0")}` },
      ];
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.18;
  const discountAmount = discountType === "PERCENTAGE" ? (subtotal * discount) / 100 : Number(discount);
  const total = Math.max(0, subtotal + tax - discountAmount);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "F1") {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "F2") {
        e.preventDefault();
        alert("Discount functionality triggered");
      } else if (e.key === "F3") {
        e.preventDefault();
        alert("Customer selection triggered");
      } else if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        alert("Payment process triggered");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-950 flex flex-col overflow-hidden transition-colors duration-200">
      {/* Top POS Toolbar (Header) */}
      <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 px-6 py-3 flex justify-between items-center shrink-0 h-16 shadow-sm z-10 transition-colors duration-200">
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">POS Terminal</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">Create new order</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:block text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full border dark:border-gray-700">
            <span className="mx-2"><span className="font-bold text-gray-700 dark:text-gray-300">F1:</span> Search</span> | 
            <span className="mx-2"><span className="font-bold text-gray-700 dark:text-gray-300">F2:</span> Discount</span> | 
            <span className="mx-2"><span className="font-bold text-gray-700 dark:text-gray-300">F3:</span> Customer</span> | 
            <span className="mx-2"><span className="font-bold text-gray-700 dark:text-gray-300">Ctrl+Enter:</span> Payment</span>
          </div>
          
          <button 
            onClick={handleLogout}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content (3-column layout) */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
          
          {/* Left Column – Product Area (50%) */}
          <div className="lg:col-span-6 flex flex-col gap-4 h-full overflow-hidden">
            {/* Search & Scan */}
            <div className="flex gap-2 shrink-0">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <input 
                  ref={searchInputRef}
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products or scan barcode (F1)" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm placeholder:text-gray-400"
                />
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && alert(`Image "${e.target.files[0].name}" scanned! (Mock functionality)`)}
              />
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-800 dark:bg-gray-700 text-white px-4 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>📷</span>
              </button>
            </div>

            {/* Product Grid */}
            <div className="flex-1 overflow-y-auto pr-2 pb-2">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    onClick={() => addToCart(product)}
                    className="bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-800 mb-3 overflow-hidden relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-sm truncate">{product.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.category}</p>
                    <p className="font-bold text-green-600">₹{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column – Cart Panel (25%) */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col h-full overflow-hidden">
            <div className="p-4 border-b dark:border-gray-800 shrink-0 bg-gray-50/50 dark:bg-gray-950/50">
              <h2 className="font-bold text-gray-800 dark:text-white">Cart ({cart.length} items)</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-start pb-4 border-b border-dashed dark:border-gray-800 last:border-0 last:pb-0">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-400 mb-2">{item.sku}</p>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-sm font-bold"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium w-4 text-center dark:text-white">{item.qty}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">₹{item.price * item.qty}</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 text-xs">🗑️</button>
                  </div>
                </div>
              ))}
              {cart.length === 0 && (
                <div className="text-center text-gray-400 py-8 text-sm">Cart is empty</div>
              )}
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-950 border-t dark:border-gray-800 shrink-0 space-y-2">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400"><span>Tax (GST 18%)</span><span>₹{tax.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm text-green-600"><span>Discount</span><span>-₹{discountAmount.toFixed(2)}</span></div>
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white pt-2 border-t border-gray-200 dark:border-gray-800 mt-2">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Right Column – Checkout Side Panel (25%) */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col h-full overflow-hidden">
            <div className="p-4 flex-1 overflow-y-auto space-y-6">
              {/* Customer Section */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</label>
                <div className="bg-gray-50 dark:bg-gray-950 p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">JD</div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>
                  <button className="w-full text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium border border-blue-200 dark:border-blue-900 rounded py-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">Change Customer</button>
                </div>
              </div>

              {/* Discount Section */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Discount</label>
                <div className="flex gap-2">
                  <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                    <button 
                      onClick={() => setDiscountType("PERCENTAGE")}
                      className={`px-3 py-1 shadow-sm rounded text-xs font-bold ${discountType === "PERCENTAGE" ? "bg-white dark:bg-gray-700 text-gray-800 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`}
                    >%</button>
                    <button 
                      onClick={() => setDiscountType("FIXED")}
                      className={`px-3 py-1 shadow-sm rounded text-xs font-bold ${discountType === "FIXED" ? "bg-white dark:bg-gray-700 text-gray-800 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`}
                    >₹</button>
                  </div>
                  <input 
                    type="number" 
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                    placeholder="0" 
                    className="flex-1 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white" 
                  />
                </div>
              </div>

              {/* Order Note */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Order Note</label>
                <textarea 
                  placeholder="Add order note..." 
                  className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-24 dark:text-white"
                ></textarea>
              </div>
            </div>

            {/* Primary Action */}
            <div className="p-4 border-t dark:border-gray-800 bg-white dark:bg-gray-900 shrink-0">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <span>Proceed to Payment</span>
                <span className="text-green-200 text-sm font-normal">(Ctrl+Enter)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CashierDashboard;