import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon, 
  Plus,
  Clock,
  Sprout,
  Droplets,
  Bug
} from "lucide-react";

const Calendario = () => {
  const atividades = [
    { id: 1, titulo: "Plantio Soja", data: "2024-02-15", tipo: "Plantio", cultura: "Soja", status: "Agendado" },
    { id: 2, titulo: "Aplicação Herbicida", data: "2024-02-20", tipo: "Defensivo", cultura: "Milho", status: "Pendente" },
    { id: 3, titulo: "Irrigação", data: "2024-02-18", tipo: "Irrigação", cultura: "Soja", status: "Concluído" },
    { id: 4, titulo: "Adubação NPK", data: "2024-02-25", tipo: "Fertilização", cultura: "Milho", status: "Agendado" },
  ];

  const getTypeIcon = (tipo: string) => {
    switch (tipo) {
      case "Plantio":
        return <Sprout className="w-4 h-4" />;
      case "Irrigação":
        return <Droplets className="w-4 h-4" />;
      case "Defensivo":
        return <Bug className="w-4 h-4" />;
      default:
        return <CalendarIcon className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído":
        return "bg-success/10 text-success border-success/20";
      case "Agendado":
        return "bg-primary/10 text-primary border-primary/20";
      case "Pendente":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Calendário Agrícola</h1>
            <p className="text-muted-foreground">
              Planejamento e controle das atividades da fazenda
            </p>
          </div>
          <Button className="bg-gradient-primary shadow-soft">
            <Plus className="w-4 h-4 mr-2" />
            Nova Atividade
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <CalendarIcon className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Atividades Hoje</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pendentes</p>
                  <p className="text-2xl font-bold text-foreground">5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Esta Semana</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" />
              Atividades Programadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {atividades.map((atividade) => (
                <div key={atividade.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                      {getTypeIcon(atividade.tipo)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{atividade.titulo}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="bg-earth/10 text-earth border-earth/20">
                          {atividade.cultura}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{atividade.tipo}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className={getStatusColor(atividade.status)}>
                      {atividade.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Date(atividade.data).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Calendario;