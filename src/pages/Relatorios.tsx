import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Download,
  TrendingUp,
  PieChart,
  FileText,
  Calendar
} from "lucide-react";

const Relatorios = () => {
  const relatorios = [
    { 
      id: 1, 
      nome: "Custos Mensais", 
      tipo: "Financeiro", 
      periodo: "Jan 2024", 
      icon: BarChart3,
      descricao: "Análise detalhada dos custos operacionais"
    },
    { 
      id: 2, 
      nome: "Produtividade", 
      tipo: "Operacional", 
      periodo: "Safra 2023/24", 
      icon: TrendingUp,
      descricao: "Rendimento por hectare e cultura"
    },
    { 
      id: 3, 
      nome: "Aplicações", 
      tipo: "Técnico", 
      periodo: "Último trimestre", 
      icon: PieChart,
      descricao: "Histórico de aplicações e defensivos"
    },
    { 
      id: 4, 
      nome: "Atividades", 
      tipo: "Operacional", 
      periodo: "Jan 2024", 
      icon: Calendar,
      descricao: "Cronograma de atividades realizadas"
    },
  ];

  const getTypeColor = (tipo: string) => {
    switch (tipo) {
      case "Financeiro":
        return "bg-success/10 text-success border-success/20";
      case "Operacional":
        return "bg-primary/10 text-primary border-primary/20";
      case "Técnico":
        return "bg-earth/10 text-earth border-earth/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
            <p className="text-muted-foreground">
              Análises e acompanhamento das operações
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-soft">
            <FileText className="w-4 h-4 mr-2" />
            Novo Relatório
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <BarChart3 className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Relatórios</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="text-2xl font-bold text-foreground">48</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-earth/10">
                  <TrendingUp className="w-6 h-6 text-earth" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Este Mês</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-warning/10">
                  <FileText className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Agendados</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Relatórios Disponíveis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatorios.map((relatorio) => {
                const Icon = relatorio.icon;
                return (
                  <div key={relatorio.id} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground">{relatorio.nome}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{relatorio.descricao}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(relatorio.tipo)}`}>
                              {relatorio.tipo}
                            </span>
                            <span className="text-xs text-muted-foreground">{relatorio.periodo}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Relatorios;