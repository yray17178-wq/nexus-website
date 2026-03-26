import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Dealer from "./pages/Dealer";
import { Privacy, Terms, Sitemap } from "./pages/Legal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/:id" component={ProductDetail} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/solutions/:id" component={SolutionDetail} />
      <Route path="/cases" component={Cases} />
      <Route path="/cases/:id" component={CaseDetail} />
      <Route path="/about" component={About} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/blog/:id" component={Resources} />
      <Route path="/support" component={Support} />
      <Route path="/contact" component={Contact} />
      <Route path="/dealer" component={Dealer} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/sitemap" component={Sitemap} />
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
