import { AppLayout } from "@/components/layout/AppLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { WeatherWidget } from "@/components/weather/WeatherWidget";
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

const Index = () => {
  // Dados simulados - em produção viriam de uma API/banco de dados
  const metrics = [
    {
      title: "Custos Mensais",
      value: "R$ 45.320",
      subtitle: "Operacionais + Insumos",
      icon: DollarSign,
      trend: "down" as const,
      trendValue: "-8% vs mês anterior",
      variant: "success" as const
    },
    {
      title: "Produtividade",
      value: "2.8 ton/ha",
      subtitle: "Safra atual",
      icon: TrendingUp,
      trend: "up" as const,
      trendValue: "+12% vs safra anterior",
      variant: "earth" as const
    },
    {
      title: "Culturas Ativas",
      value: "3",
      subtitle: "Soja, Milho, Algodão",
      icon: Sprout,
      variant: "success" as const
    },
    {
      title: "Aplicações Pendentes",
      value: "5",
      subtitle: "Próximos 7 dias",
      icon: Calendar,
      variant: "warning" as const
    }
  ];

  const recentActivities = [
    { 
      id: 1, 
      action: "Aplicação de herbicida", 
      area: "Talhão A1", 
      date: "Hoje", 
      status: "completed" 
    },
    { 
      id: 2, 
      action: "Compra de sementes", 
      area: "Geral", 
      date: "Ontem", 
      status: "completed" 
    },
    { 
      id: 3, 
      action: "Plantio programado", 
      area: "Talhão B2", 
      date: "Amanhã", 
      status: "pending" 
    },
    { 
      id: 4, 
      action: "Análise de solo", 
      area: "Talhão C1", 
      date: "Sexta-feira", 
      status: "pending" 
    }
  ];

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
          <Button className="bg-gradient-primary shadow-soft hover:shadow-medium transition-all duration-300">
            <Plus className="w-4 h-4 mr-2" />
            Nova Atividade
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weather Widget */}
          <WeatherWidget />

          {/* Recent Activities */}
          <Card className="lg:col-span-2 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Atividades Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                    <div className="flex-shrink-0">
                      {activity.status === "completed" ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-warning" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.area} • {activity.date}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-primary/5 hover:border-primary/20">
                <DollarSign className="w-6 h-6 text-primary" />
                <span className="text-sm">Registrar Custo</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-success/5 hover:border-success/20">
                <Sprout className="w-6 h-6 text-success" />
                <span className="text-sm">Nova Cultura</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-warning/5 hover:border-warning/20">
                <Calendar className="w-6 h-6 text-warning" />
                <span className="text-sm">Agendar Aplicação</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-sky/5 hover:border-sky/20">
                <TrendingUp className="w-6 h-6 text-sky" />
                <span className="text-sm">Ver Relatórios</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Index;
