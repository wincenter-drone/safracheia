import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus,
  Camera,
  Sprout,
  MapPin,
  Calendar,
  TrendingUp,
  Droplets,
  Thermometer,
  Edit,
  Trash2
} from "lucide-react";

const Culturas = () => {
  const culturas = [
    {
      id: 1,
      nome: "Soja RR",
      talhao: "A1",
      area: "120 ha",
      plantio: "2024-01-10",
      fase: "Crescimento vegetativo",
      progresso: 45,
      status: "healthy",
      ultimaFoto: "2024-01-20",
      previsaoColheita: "2024-05-15"
    },
    {
      id: 2,
      nome: "Milho Transgênico",
      talhao: "B2",
      area: "80 ha",
      plantio: "2023-12-15",
      fase: "Floração",
      progresso: 70,
      status: "warning",
      ultimaFoto: "2024-01-19",
      previsaoColheita: "2024-04-20"
    },
    {
      id: 3,
      nome: "Algodão BT",
      talhao: "C1",
      area: "150 ha",
      plantio: "2024-01-05",
      fase: "Emergência",
      progresso: 25,
      status: "healthy",
      ultimaFoto: "2024-01-18",
      previsaoColheita: "2024-07-10"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-success/10 text-success border-success/20";
      case "warning":
        return "bg-warning/10 text-warning border-warning/20";
      case "critical":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "healthy":
        return "Saudável";
      case "warning":
        return "Atenção";
      case "critical":
        return "Crítico";
      default:
        return "Desconhecido";
    }
  };

  const totalArea = culturas.reduce((acc, cultura) => acc + parseInt(cultura.area), 0);
  const mediaProgresso = culturas.reduce((acc, cultura) => acc + cultura.progresso, 0) / culturas.length;

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Acompanhamento de Culturas</h1>
            <p className="text-muted-foreground">
              Monitoramento e gestão das culturas agrícolas
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => window.location.href = '/culturas/galeria'}>
              <Camera className="w-4 h-4 mr-2" />
              Galeria de Fotos
            </Button>
            <Button 
              className="bg-gradient-primary shadow-soft"
              onClick={() => window.location.href = '/culturas/nova'}
            >
              <Plus className="w-4 h-4 mr-2" />
              Nova Cultura
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-earth shadow-soft border-earth/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-earth-foreground/80 text-sm font-medium">Área Total</p>
                  <p className="text-2xl font-bold text-earth-foreground">{totalArea} ha</p>
                </div>
                <MapPin className="w-8 h-8 text-earth-foreground/80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Culturas Ativas</p>
                  <p className="text-2xl font-bold text-foreground">{culturas.length}</p>
                </div>
                <Sprout className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Progresso Médio</p>
                  <p className="text-2xl font-bold text-foreground">{Math.round(mediaProgresso)}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sky/10 to-sky/5 border-sky/20 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Condições</p>
                  <p className="text-2xl font-bold text-foreground">Ideais</p>
                </div>
                <Thermometer className="w-8 h-8 text-sky" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cultures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {culturas.map((cultura) => (
            <Card key={cultura.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{cultura.nome}</CardTitle>
                  <Badge variant="outline" className={getStatusColor(cultura.status)}>
                    {getStatusText(cultura.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">Talhão:</span>
                    <span>{cultura.talhao}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sprout className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">Área:</span>
                    <span>{cultura.area}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Fase: {cultura.fase}</span>
                    <span className="text-sm text-muted-foreground">{cultura.progresso}%</span>
                  </div>
                  <Progress value={cultura.progresso} className="h-2" />
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Plantio:</span>
                    <span>{new Date(cultura.plantio).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Previsão colheita:</span>
                    <span>{new Date(cultura.previsaoColheita).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Última foto:</span>
                    <span>{new Date(cultura.ultimaFoto).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.location.href = `/culturas/${cultura.id}/fotos`}
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Fotos
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.location.href = `/culturas/${cultura.id}/aplicar`}
                    >
                      <Droplets className="w-4 h-4 mr-2" />
                      Aplicar
                    </Button>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.location.href = `/culturas/${cultura.id}/editar`}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 text-destructive hover:text-destructive"
                      onClick={() => {
                        if (confirm('Tem certeza que deseja excluir esta cultura?')) {
                          window.location.href = `/culturas/${cultura.id}/excluir`;
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Excluir
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Upload Section */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-primary" />
              Upload de Fotos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Adicionar fotos das culturas
              </h3>
              <p className="text-muted-foreground mb-4">
                Arraste e solte imagens ou clique para selecionar
              </p>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/culturas/upload'}
              >
                Selecionar Arquivos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Culturas;