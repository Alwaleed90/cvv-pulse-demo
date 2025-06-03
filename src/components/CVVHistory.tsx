
import { ArrowLeft, Download, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNavigation from "@/components/BottomNavigation";

interface CVVHistoryProps {
  onNavigate: (page: string) => void;
}

const CVVHistory = ({ onNavigate }: CVVHistoryProps) => {
  const historyItems = [
    {
      cvv: "***",
      timestamp: "Today, 10:25 AM",
      used: true,
      merchant: "Amazon.com",
      ip: "192.168.1.1"
    },
    {
      cvv: "***",
      timestamp: "Yesterday, 3:12 PM",
      used: false,
      merchant: "Expired",
      ip: "192.168.1.1"
    },
    {
      cvv: "***",
      timestamp: "Jun 10, 2023, 9:45 AM",
      used: true,
      merchant: "Netflix.com",
      ip: "192.168.1.1"
    },
    {
      cvv: "***",
      timestamp: "Jun 5, 2023, 2:30 PM",
      used: true,
      merchant: "Uber.com",
      ip: "192.168.1.1"
    }
  ];

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
        <h1 className="text-xl font-semibold text-gray-900 ml-4">CVV Usage History</h1>
      </div>

      <div className="px-6 py-6 space-y-4">
        {/* History Items */}
        {historyItems.map((item, index) => (
          <Card key={index} className="bg-white p-4 rounded-2xl border-0 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-gray-900">CVV Generated</h3>
                  {item.used ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      Used
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                      Not Used
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-1">{item.timestamp}</p>
                <p className="text-gray-700 font-medium">{item.merchant}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-lg mb-1">CVV: {item.cvv}</p>
                <p className="text-gray-500 text-xs">IP: {item.ip}</p>
              </div>
            </div>
          </Card>
        ))}

        {/* Export Button */}
        <Button
          variant="outline"
          className="w-full h-12 rounded-2xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 mt-8"
        >
          <Download className="w-4 h-4 mr-2" />
          Export History
        </Button>
      </div>

      <BottomNavigation currentPage="cards" onNavigate={onNavigate} />
    </div>
  );
};

export default CVVHistory;
