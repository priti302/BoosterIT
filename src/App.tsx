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

// Your new pages
import ExpertsList from "./pages/ExpertList";
import ExpertDetail from "./pages/ExpertsDetails";
import SessionsPage from "./pages/Sessionspage";
import ChatPage from "./pages/ChatPage";
import CallPage from "./pages/CallPage";
import RechargePage from "./pages/RechargePage";
import PaymentPage from "./pages/PaymentPage";
import DashboardPage from "./pages/DashBoard";
import AdminPanel from "./pages/Admin";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>

          {/* NEW EXPERT ROUTES */}
          <Route path="/experts" element={<ExpertsList />} />
          <Route path="/expert/:id" element={<ExpertDetail />} />
          <Route path="/sessions" element={<SessionsPage />} />

          {/* EXISTING ROUTES */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/consultation" element={<Consultation />} />
          
          {/* CONSULTATION PAGE VARIANT */}
          <Route path="/consultation/:type" element={<ConsultationPage />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 ROUTE */}
          <Route path="*" element={<NotFound />} />

          {/*this rout for chatbot*/} 
             <Route path="/chat/:id" element={<ChatPage />} />

             {/*route for calling */}
              <Route path="/call/:id" element={<CallPage />} />             
               <Route path="/" element={<ExpertsList />} />
              <Route path="/recharge" element={<RechargePage />} />
              <Route path="/payment" element={<PaymentPage />} />
              {/* <Route path="/TopNov"  element={<TopNav/>}/> */}
                  <Route path="/dashboard" element={<DashboardPage/>}/>
              <Route path="/Admin" element={<AdminPanel/>}/>
        </Routes>

      
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
