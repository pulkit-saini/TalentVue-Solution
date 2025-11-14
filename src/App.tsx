import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Experience from "./pages/Experience";
import SkillDevelopment from "./pages/experience/SkillDevelopment";
import ManpowerSolutions from "./pages/experience/Manpower";
import CSR from "./pages/experience/CSR";
import Consulting from "./pages/experience/Consulting";
import ITSolutions from "./pages/experience/ITSolutions";
import CorporateTrainings from "./pages/experience/CorporateTrainings";
import Supply from "./pages/experience/Supply";
import Career from "./pages/Career";
import JobDetail from "./pages/JobDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/experience" element={<Experience />} />
           <Route path="/experience/manpower" element={<ManpowerSolutions />} />
          <Route path="/experience/skill-development" element={<SkillDevelopment />} />
          <Route path="/experience/csr" element={<CSR />} />
          <Route path="/experience/consulting" element={<Consulting />} />
          <Route path="/experience/it-solutions" element={<ITSolutions />} />
          <Route path="/experience/corporate-trainings" element={<CorporateTrainings />} />
          <Route path="/experience/supply" element={<Supply />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:jobId" element={<JobDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
