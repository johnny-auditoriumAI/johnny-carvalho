import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MIE243Project from "./pages/projects/MIE243Project";
import CatVisionProject from "./pages/projects/CatVisionProject";
import APS112Project from "./pages/projects/APS112Project";
import DOTEnergyProject from "./pages/projects/DOTEnergyProject";
import CoronaKillerProject from "./pages/projects/CoronaKillerProject";
import NFCWelcome from "./pages/NFCWelcome";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nfc" element={<NFCWelcome />} />
              <Route path="/projects/mie243" element={<MIE243Project />} />
              <Route path="/projects/cat-vision" element={<CatVisionProject />} />
              <Route path="/projects/aps112" element={<APS112Project />} />
              <Route path="/projects/dot-energy" element={<DOTEnergyProject />} />
              <Route path="/projects/corona-killer" element={<CoronaKillerProject />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;