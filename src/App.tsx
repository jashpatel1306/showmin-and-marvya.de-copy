import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MigrateFromShopify from "./pages/MigrateFromShopify";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import Services from "./pages/Services";
import Landing from "./pages/Landing";
import Design from "./pages/Design";
import DesignCategory from "./pages/DesignCategory";
import WebflowAgency from "./pages/WebflowAgency";
import HubSpotAgency from "./pages/HubSpotAgency";
import FigmaAgency from "./pages/FigmaAgency";
import WordPressAgency from "./pages/WordPressAgency";
import AiAutomation from "./pages/AiAutomation";
import MigrateFromElementor from "./pages/MigrateFromElementor";
import MigrateFromWix from "./pages/MigrateFromWix";
import MigrateFromSquarespace from "./pages/MigrateFromSquarespace";
import MigrateFromGoDaddy from "./pages/MigrateFromGoDaddy";
import FramerAgency from "./FramerAgency";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/migrate-from-shopify" element={<MigrateFromShopify />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/services" element={<Services />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/design" element={<Design />} />
            <Route path="/services/category/design" element={<DesignCategory />} />
            <Route path="/webflow-agency" element={<WebflowAgency />} />
            <Route path="/hubspot-agency" element={<HubSpotAgency />} />
            <Route path="/figma-agency" element={<FigmaAgency />} />
            <Route path="/wordpress-agency" element={<WordPressAgency />} />
            <Route path="/framer-agency" element={<FramerAgency />} />
            <Route path="/ai-automation" element={<AiAutomation />} />
            <Route path="/migrate-from-elementor" element={<MigrateFromElementor />} />
            <Route path="/migrate-from-wix" element={<MigrateFromWix />} />
            <Route path="/migrate-from-squarespace" element={<MigrateFromSquarespace />} />
            <Route path="/migrate-from-godaddy" element={<MigrateFromGoDaddy />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
