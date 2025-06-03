
import { ArrowLeft, Copy, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNavigation from "@/components/BottomNavigation";
import { toast } from "@/hooks/use-toast";

interface CardDetailsProps {
  onNavigate: (page: string) => void;
}

const CardDetails = ({ onNavigate }: CardDetailsProps) => {
  const copyCardNumber = () => {
    navigator.clipboard.writeText("4582123456789012");
    toast({
      title: "Card Number Copied",
      description: "Card number has been copied to clipboard",
    });
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
        <h1 className="text-xl font-semibold text-gray-900 ml-4">Card Details</h1>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Virtual Card Display */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-2xl border-0 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-bold">
                VISA
              </div>
            </div>
            
            <div className="text-2xl font-mono mb-8">4582 1234 5678 9012</div>
            
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

        {/* Card Information */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Card Number</p>
                <p className="font-mono text-lg">4582 1234 5678 9012</p>
              </div>
              <button
                onClick={copyCardNumber}
                className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
              >
                <Copy className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl">
            <p className="text-gray-600 text-sm">Expiration Date</p>
            <p className="font-semibold text-lg">05/25</p>
          </div>
        </div>

        {/* Generate CVV Button */}
        <Button
          onClick={() => onNavigate("generate-cvv")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 rounded-2xl font-semibold text-lg"
        >
          Generate CVV
        </Button>

        {/* Security Status */}
        <Card className="bg-green-50 border-green-200 p-4 rounded-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-green-900">Security Status</p>
              <p className="text-green-700 text-sm">Secure ✓</p>
            </div>
          </div>
        </Card>

        {/* Lock Card Button */}
        <Button
          variant="outline"
          className="w-full h-12 rounded-2xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          <Shield className="w-4 h-4 mr-2" />
          Temporarily Lock Card
        </Button>
      </div>

      <BottomNavigation currentPage="cards" onNavigate={onNavigate} />
    </div>
  );
};

export default CardDetails;
