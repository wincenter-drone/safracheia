import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Plus,
  TrendingUp,
  TrendingDown,
  Wrench,
  Truck,
  Sprout,
  FileText
} from "lucide-react";

const Custos = () => {
  const custosOperacionais = [
    { id: 1, descricao: "Combustível", valor: 2850, categoria: "Operacional", data: "2024-01-15", tipo: "Diesel" },
    { id: 2, descricao: "Manutenção Trator", valor: 1200, categoria: "Implementos", data: "2024-01-14", tipo: "Preventiva" },
    { id: 3, descricao: "Sementes Soja", valor: 8500, categoria: "Insumos", data: "2024-01-13", tipo: "Variedade X1" },
    { id: 4, descricao: "Fertilizante NPK", valor: 4300, categoria: "Insumos", data: "2024-01-12", tipo: "20-05-20" },
    { id: 5, descricao: "Mão de obra", valor: 3200, categoria: "Operacional", data: "2024-01-11", tipo: "Temporária" },
  ];

  const totalCustos = custosOperacionais.reduce((acc, custo) => acc + custo.valor, 0);

  const getCategoryIcon = (categoria: string) => {
    switch (categoria) {
      case "Operacional":
        return <Truck className="w-4 h-4" />;
      case "Implementos":
        return <Wrench className="w-4 h-4" />;
      case "Insumos":
        return <Sprout className="w-4 h-4" />;
      default:
        return <DollarSign className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (categoria: string) => {
    switch (categoria) {
      case "Operacional":
        return "bg-sky/10 text-sky border-sky/20";
      case "Implementos":
        return "bg-earth/10 text-earth border-earth/20";
      case "Insumos":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const resumoCategorias = [
    { categoria: "Operacional", total: 6050, percentual: 30.2, tendencia: "up" },
    { categoria: "Implementos", total: 1200, percentual: 6.0, tendencia: "down" },
    { categoria: "Insumos", total: 12800, percentual: 63.8, tendencia: "up" },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Controle de Custos</h1>
            <p className="text-muted-foreground">
              Gestão financeira das operações agrícolas
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Relatório
            </Button>
            <Button className="bg-gradient-primary shadow-soft">
              <Plus className="w-4 h-4 mr-2" />
              Novo Custo
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-primary shadow-soft border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/80 text-sm font-medium">Total Mensal</p>
                  <p className="text-2xl font-bold text-primary-foreground">
                    R$ {totalCustos.toLocaleString('pt-BR')}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-primary-foreground/80" />
              </div>
            </CardContent>
          </Card>

          {resumoCategorias.map((categoria) => (
            <Card key={categoria.categoria} className="shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{categoria.categoria}</p>
                    <p className="text-xl font-bold text-foreground">
                      R$ {categoria.total.toLocaleString('pt-BR')}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {categoria.tendencia === "up" ? (
                        <TrendingUp className="w-3 h-3 text-success" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-destructive" />
                      )}
                      <span className="text-xs text-muted-foreground">
                        {categoria.percentual}% do total
                      </span>
                    </div>
                  </div>
                  {getCategoryIcon(categoria.categoria)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custos Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              Custos Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {custosOperacionais.map((custo) => (
                <div key={custo.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                      {getCategoryIcon(custo.categoria)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{custo.descricao}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className={getCategoryColor(custo.categoria)}>
                          {custo.categoria}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{custo.tipo}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">
                      R$ {custo.valor.toLocaleString('pt-BR')}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(custo.data).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Truck className="w-12 h-12 text-sky mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Custos Operacionais</h3>
              <p className="text-sm text-muted-foreground">Combustível, mão de obra, transporte</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Wrench className="w-12 h-12 text-earth mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Implementos</h3>
              <p className="text-sm text-muted-foreground">Manutenção, depreciação, reparos</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <Sprout className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Insumos</h3>
              <p className="text-sm text-muted-foreground">Sementes, fertilizantes, defensivos</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Custos;