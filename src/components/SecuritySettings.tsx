
import { ArrowLeft, Shield, Bell, Lock, Settings, LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";

interface SecuritySettingsProps {
  onNavigate: (page: string) => void;
}

const SecuritySettings = ({ onNavigate }: SecuritySettingsProps) => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    onNavigate("login");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center shadow-sm">
        <button 
          onClick={() => onNavigate("dashboard")}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900 ml-4">Security Settings</h1>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Dynamic CVV Settings */}
        <Card className="bg-white p-6 rounded-2xl border-0 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Dynamic CVV</h3>
                <p className="text-gray-600 text-sm">Enable one-time CVV codes</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </Card>

        {/* Notification Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
          <div className="space-y-3">
            <Card className="bg-white p-4 rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">CVV Generation Alerts</span>
                <Switch defaultChecked />
              </div>
            </Card>
            
            <Card className="bg-white p-4 rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">CVV Usage Alerts</span>
                <Switch defaultChecked />
              </div>
            </Card>
            
            <Card className="bg-white p-4 rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Suspicious Activity Alerts</span>
                <Switch defaultChecked />
              </div>
            </Card>
          </div>
        </div>

        {/* Authentication Methods */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentication Methods</h3>
          <div className="space-y-3">
            <Card className="bg-white p-4 rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Biometric Authentication</span>
                <Switch defaultChecked />
              </div>
            </Card>
            
            <Card className="bg-white p-4 rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">PIN Authentication</span>
                <Switch />
              </div>
            </Card>
            
            <Card className="bg-white p-4 rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Two-Factor Authentication</span>
                <Switch defaultChecked />
              </div>
            </Card>
          </div>
        </div>

        {/* Advanced Security Rules */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Security Rules</h3>
          <div className="space-y-3">
            <Card className="bg-white p-4 rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Restrict by Country</span>
                <span className="text-blue-600 font-medium">Configure</span>
              </div>
            </Card>
            
            <Card className="bg-white p-4 rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Restrict by Transaction Type</span>
                <span className="text-blue-600 font-medium">Configure</span>
              </div>
            </Card>
            
            <Card className="bg-white p-4 rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Merchant Restrictions</span>
                <span className="text-blue-600 font-medium">Configure</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Logout Button */}
        <div className="pt-4">
          <Button 
            onClick={handleLogout}
            variant="destructive"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-semibold text-lg"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <BottomNavigation currentPage="settings" onNavigate={onNavigate} />
    </div>
  );
};

export default SecuritySettings;
