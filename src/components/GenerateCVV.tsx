
import { useState, useEffect } from "react";
import { ArrowLeft, Shield, Copy, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNavigation from "@/components/BottomNavigation";
import { toast } from "@/hooks/use-toast";

interface GenerateCVVProps {
  onNavigate: (page: string) => void;
}

const GenerateCVV = ({ onNavigate }: GenerateCVVProps) => {
  const [cvv, setCvv] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setIsActive(false);
            setCvv(null);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const generateCVV = () => {
    const newCvv = Math.floor(Math.random() * 900 + 100).toString();
    setCvv(newCvv);
    setTimeLeft(300); // 5 minutes
    setIsActive(true);
    
    // Store in localStorage for history
    const history = JSON.parse(localStorage.getItem("cvvHistory") || "[]");
    const newEntry = {
      cvv: newCvv,
      timestamp: new Date().toISOString(),
      used: false,
      merchant: null
    };
    history.unshift(newEntry);
    localStorage.setItem("cvvHistory", JSON.stringify(history.slice(0, 10))); // Keep last 10
  };

  const copyCVV = () => {
    if (cvv) {
      navigator.clipboard.writeText(cvv);
      toast({
        title: "CVV Copied",
        description: "Your dynamic CVV has been copied to clipboard",
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
        <h1 className="text-xl font-semibold text-gray-900 ml-4">Dynamic CVV Generator</h1>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Virtual Card Display */}
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
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
        </Card>

        {/* Info Section */}
        <Card className="bg-blue-50 border-blue-200 p-6 rounded-2xl">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">For your protection</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                A CVV will be generated for one-time use and will expire in 5 minutes. 
                Use it for your online purchase and stay secure.
              </p>
            </div>
          </div>
        </Card>

        {/* CVV Display or Generate */}
        {cvv ? (
          <Card className="bg-white p-8 rounded-2xl border-0 shadow-lg text-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your CVV Code</h3>
                <div className="text-4xl font-bold text-gray-900 mb-4 font-mono">{cvv}</div>
                <div className="flex items-center justify-center space-x-2 text-orange-600">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">Expires in: {formatTime(timeLeft)}</span>
                </div>
              </div>

              <Button
                onClick={copyCVV}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl font-semibold"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy CVV
              </Button>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center justify-center space-x-2 text-red-700">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Do not share this number. It will become invalid after the timer expires.
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            
            <Button
              onClick={generateCVV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg h-auto"
            >
              <Shield className="w-5 h-5 mr-2" />
              Generate CVV
            </Button>
          </div>
        )}

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-600 mt-8">
          Your card details are encrypted and secure
        </div>
      </div>

      <BottomNavigation currentPage="cards" onNavigate={onNavigate} />
    </div>
  );
};

export default GenerateCVV;
