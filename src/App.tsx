import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ITServices from "./pages/ITServices";
import DigitalMarketing from "./pages/DigitalMarketing";
import Consultation from "./pages/Consultation";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ConsultationPage from './pages/ConsultationPage';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/consultation/:type" element={<ConsultationPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
