import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Cloud, 
  DollarSign, 
  Home, 
  Sprout, 
  Calendar,
  Settings
} from "lucide-react";

const navigationItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Custos", href: "/custos", icon: DollarSign },
  { name: "Calendário", href: "/calendario", icon: Calendar },
  { name: "Clima", href: "/clima", icon: Cloud },
  { name: "Culturas", href: "/culturas", icon: Sprout },
  { name: "Relatórios", href: "/relatorios", icon: BarChart3 },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="w-64 min-h-screen bg-card border-r border-border p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          AgroControl
        </h1>
        <p className="text-sm text-muted-foreground">Gestão Operacional</p>
      </div>
      
      <div className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-transform group-hover:scale-110",
                isActive ? "text-primary-foreground" : ""
              )} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <Link
          to="/configuracoes"
          className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all duration-200"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Configurações</span>
        </Link>
      </div>
    </nav>
  );
}