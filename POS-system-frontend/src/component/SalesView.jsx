import React from "react";

const SalesView = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sales Management</h2>
          <p className="text-gray-500 text-sm mt-1">Overview of sales performance and metrics</p>
        </div>
        <div className="flex gap-3">
            <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500/20">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 Days</option>
                <option>This Month</option>
            </select>
            <button className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Download className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
            title="Total Sales" 
            value="₹1,24,500" 
            trend="+12.5%" 
            trendUp={true} 
            icon={<IndianRupee />} 
            color="blue"
        />
        <StatCard 
            title="Orders Today" 
            value="142" 
            trend="+8.2%" 
            trendUp={true} 
            icon={<ShoppingCart />} 
            color="purple"
        />
        <StatCard 
            title="Active Cashiers" 
            value="8" 
            subtext="out of 12"
            icon={<Users />} 
            color="green"
        />
        <StatCard 
            title="Avg Order Value" 
            value="₹876" 
            trend="-2.4%" 
            trendUp={false} 
            icon={<TrendingUp />} 
            color="orange"
        />
      </div>

      {/* Placeholder for charts or detailed list to make the view complete */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-80 flex flex-col justify-center items-center text-gray-400">
              <BarChart2 className="w-12 h-12 mb-2 opacity-20" />
              <p>Sales Analytics Chart Placeholder</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-80 flex flex-col justify-center items-center text-gray-400">
              <PieChart className="w-12 h-12 mb-2 opacity-20" />
              <p>Category Distribution Placeholder</p>
          </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, trend, trendUp, subtext, icon, color }) => {
    const colors = {
        blue: "bg-blue-50 text-blue-600",
        purple: "bg-purple-50 text-purple-600",
        green: "bg-green-50 text-green-600",
        orange: "bg-orange-50 text-orange-600",
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start justify-between">
            <div>
                <h3 className="font-medium text-gray-500 text-sm">{title}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
                {trend && (
                    <div className="flex items-center gap-1 mt-1">
                        <span className={`text-xs font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                            {trend}
                        </span>
                        <span className="text-xs text-gray-400">vs last period</span>
                    </div>
                )}
                {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
            </div>
            <div className={`p-3 rounded-lg ${colors[color] || colors.blue}`}>
                {React.cloneElement(icon, { className: "w-6 h-6" })}
            </div>
        </div>
    );
};

// Icons
const IndianRupee = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 10"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>;
const ShoppingCart = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
const Users = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const TrendingUp = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const Download = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>;
const BarChart2 = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>;
const PieChart = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>;

export default SalesView;