import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomeA from "./pages/HomeA";
import GiftCards from "./pages/GiftCards";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Catering from "./pages/Catering";
import WineList from "./pages/WineList";
import Dashboard from "./pages/Dashboard";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={HomeA} />
      <Route path="/menu" component={Menu} />
      <Route path="/events" component={Events} />
      <Route path="/catering" component={Catering} />
      <Route path="/gift-cards" component={GiftCards} />
      <Route path="/wine-list" component={WineList} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
