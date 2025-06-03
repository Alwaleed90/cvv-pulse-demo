
import { useState, useEffect } from "react";
import LoginPage from "@/components/LoginPage";
import Dashboard from "@/components/Dashboard";
import GenerateCVV from "@/components/GenerateCVV";
import CardDetails from "@/components/CardDetails";
import SecuritySettings from "@/components/SecuritySettings";
import CVVHistory from "@/components/CVVHistory";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user was previously logged in
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
      setCurrentPage("dashboard");
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage("dashboard");
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("login");
    localStorage.removeItem("isLoggedIn");
  };

  const renderPage = () => {
    if (!isLoggedIn) {
      return <LoginPage onLogin={handleLogin} />;
    }

    switch (currentPage) {
      case "dashboard":
        return <Dashboard onNavigate={setCurrentPage} />;
      case "generate-cvv":
        return <GenerateCVV onNavigate={setCurrentPage} />;
      case "card-details":
        return <CardDetails onNavigate={setCurrentPage} />;
      case "security-settings":
        return <SecuritySettings onNavigate={setCurrentPage} />;
      case "cvv-history":
        return <CVVHistory onNavigate={setCurrentPage} />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
    </div>
  );
};

export default Index;
