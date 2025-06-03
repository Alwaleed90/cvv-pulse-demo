
import { Bell, ArrowRight, Shield, DollarSign, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNavigation from "@/components/BottomNavigation";

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard = ({ onNavigate }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hello, Alex</h1>
          <p className="text-gray-600">Welcome back</p>
        </div>
        <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <Bell className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Balance Card */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-2xl border-0">
          <div className="space-y-2">
            <p className="text-blue-100">Total Balance</p>
            <h2 className="text-3xl font-bold">$12,584.32</h2>
            <div className="flex items-center space-x-1">
              <ArrowRight className="w-4 h-4 text-green-300 rotate-[-45deg]" />
              <span className="text-green-300 text-sm">+2.4% from last month</span>
            </div>
          </div>
        </Card>

        {/* Virtual Card */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-2xl border-0 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-blue-100 text-sm">Virtual Card</p>
                <p className="text-xl font-mono">•••• •••• •••• 4582</p>
              </div>
              <div className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-bold">
                VISA
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-blue-100 text-xs">Card Holder</p>
                <p className="font-semibold">Alex Johnson</p>
              </div>
              <div>
                <p className="text-blue-100 text-xs">Expires</p>
                <p className="font-semibold">05/25</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 translate-x-4"></div>
        </Card>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center space-y-2 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Transfer</span>
            </button>
            
            <button className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center space-y-2 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Pay Bills</span>
            </button>
            
            <button 
              onClick={() => onNavigate("generate-cvv")}
              className="bg-blue-600 p-4 rounded-2xl shadow-sm flex flex-col items-center space-y-2 hover:bg-blue-700 transition-colors"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white">Dynamic CVV</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
          <Card className="bg-red-50 border-red-200 p-4 rounded-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <p className="font-medium text-red-900">Security Alert</p>
                <p className="text-sm text-red-700">New CVV generated for online purchase</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <BottomNavigation currentPage="home" onNavigate={onNavigate} />
    </div>
  );
};

export default Dashboard;
