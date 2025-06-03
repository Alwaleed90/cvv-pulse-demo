
import { Home, CreditCard, Headphones, Settings } from "lucide-react";

interface BottomNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const BottomNavigation = ({ currentPage, onNavigate }: BottomNavigationProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home, page: "dashboard" },
    { id: "cards", label: "Cards", icon: CreditCard, page: "card-details" },
    { id: "support", label: "Support", icon: Headphones, page: "dashboard" },
    { id: "settings", label: "Settings", icon: Settings, page: "security-settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.page)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive 
                  ? "text-blue-600" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "text-blue-600" : ""}`} />
              <span className={`text-xs mt-1 ${isActive ? "text-blue-600 font-medium" : ""}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
