import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomeA from "./pages/HomeA";
import HomeB from "./pages/HomeB";
import GiftCards from "./pages/GiftCards";
import Menu from "./pages/Menu";
import Events from "./pages/Events";
import Catering from "./pages/Catering";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeA} />
      <Route path="/option-b" component={HomeB} />
      <Route path="/menu" component={Menu} />
      <Route path="/events" component={Events} />
      <Route path="/catering" component={Catering} />
      <Route path="/gift-cards" component={GiftCards} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
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
