import { AppLayout } from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { LocationWeather } from "@/components/weather/LocationWeather";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  TrendingUp, 
  Sprout, 
  Calendar,
  AlertTriangle,
  CheckCircle,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState([
    {
      title: "Custos Mensais",
      value: "R$ 0",
      subtitle: "Nenhum custo registrado",
      icon: DollarSign,
      variant: "default" as const
    },
    {
      title: "Produtividade",
      value: "0 ton/ha",
      subtitle: "Nenhuma colheita registrada",
      icon: TrendingUp,
      variant: "earth" as const
    },
    {
      title: "Culturas Ativas",
      value: "0",
      subtitle: "Nenhuma cultura plantada",
      icon: Sprout,
      variant: "success" as const
    },
    {
      title: "Aplicações Pendentes",
      value: "0",
      subtitle: "Nenhuma aplicação agendada",
      icon: Calendar,
      variant: "warning" as const
    }
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { 
      id: 1, 
      action: "Bem-vindo ao Safra Cheia!", 
      area: "Sistema", 
      date: "Agora", 
      status: "completed" 
    }
  ]);

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              Visão geral das operações da fazenda
            </p>
          </div>
          <Button 
            className="bg-gradient-primary shadow-soft hover:shadow-medium transition-all duration-300"
            onClick={() => navigate('/calendario')}
          >
            <Plus className="w-4 h-4 mr-2" />
            Nova Atividade
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
          {/* Weather Widget */}
          <div className="xl:col-span-1">
            <LocationWeather />
          </div>

          {/* Recent Activities */}
          <Card className="xl:col-span-2 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Atividades Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-2 sm:gap-4 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                    <div className="flex-shrink-0">
                      {activity.status === "completed" ? (
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-warning" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate text-sm sm:text-base">
                        {activity.action}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {activity.area} • {activity.date}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        activity.status === "completed"
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      }`}>
                        {activity.status === "completed" ? "Concluído" : "Pendente"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              <Button 
                variant="outline" 
                className="h-16 sm:h-20 flex-col gap-1 sm:gap-2 hover:bg-primary/5 hover:border-primary/20"
                onClick={() => navigate('/custos')}
              >
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <span className="text-xs sm:text-sm text-center">Registrar Custo</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-16 sm:h-20 flex-col gap-1 sm:gap-2 hover:bg-success/5 hover:border-success/20"
                onClick={() => navigate('/culturas')}
              >
                <Sprout className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                <span className="text-xs sm:text-sm text-center">Nova Cultura</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-16 sm:h-20 flex-col gap-1 sm:gap-2 hover:bg-warning/5 hover:border-warning/20"
                onClick={() => navigate('/calendario')}
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-warning" />
                <span className="text-xs sm:text-sm text-center">Agendar Aplicação</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-16 sm:h-20 flex-col gap-1 sm:gap-2 hover:bg-sky/5 hover:border-sky/20"
                onClick={() => navigate('/relatorios')}
              >
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-sky" />
                <span className="text-xs sm:text-sm text-center">Ver Relatórios</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Index;
