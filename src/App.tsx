import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Custos from "./pages/Custos";
import NovoCusto from "./pages/NovoCusto";
import Culturas from "./pages/Culturas";
import NovaCultura from "./pages/NovaCultura";
import Calendario from "./pages/Calendario";
import NovaAtividade from "./pages/NovaAtividade";
import Clima from "./pages/Clima";
import Galeria from "./pages/Galeria";
import SelecionarFotos from "./pages/SelecionarFotos";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/custos" element={<Custos />} />
          <Route path="/custos/novo" element={<NovoCusto />} />
          <Route path="/culturas" element={<Culturas />} />
          <Route path="/culturas/nova" element={<NovaCultura />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/calendario/nova" element={<NovaAtividade />} />
          <Route path="/clima" element={<Clima />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/galeria/selecionar" element={<SelecionarFotos />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
