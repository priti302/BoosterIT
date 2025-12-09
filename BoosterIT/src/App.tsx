import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import ITServices from "./pages/ITServices";
import DigitalMarketing from "./pages/DigitalMarketing";
import Consultation from "./pages/Consultation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOtp from "./pages/VerifyOtp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ConsultationPage from './pages/ConsultationPage';
// Your new pages
import ExpertsList from "./pages/ExpertList";
import ExpertDetail from "./pages/ExpertsDetails";
import SessionsPage from "./pages/Sessionspage";
import ChatPage from "./pages/ChatPage";
import CallPage from "./pages/CallPage";
import ExpertGoLive from "./pages/ExpertGoLive";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/experts" element={<ExpertsList />} />
            <Route path="/expert/:id" element={<ExpertDetail />} />
            <Route path="/sessions" element={<SessionsPage />} />
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/it-services" element={<ITServices />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultation/:type" element={<ConsultationPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/expert/live" element={<ExpertGoLive />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/chat/:id" element={<ChatPage />} />
            <Route path="/call/:id" element={<CallPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
