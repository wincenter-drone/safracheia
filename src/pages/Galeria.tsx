import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Images, 
  Plus,
  Upload,
  Filter,
  Grid,
  List,
  Search,
  Calendar,
  MapPin,
  Eye,
  Download,
  Trash2
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Galeria = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for photos
  const fotos = [
    {
      id: 1,
      titulo: "Plantio de Soja - Talhão A",
      data: "2024-01-15",
      local: "Talhão A",
      cultura: "Soja",
      url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
      descricao: "Início do plantio da safra 2024"
    },
    {
      id: 2,
      titulo: "Desenvolvimento Milho",
      data: "2024-01-10",
      local: "Talhão B",
      cultura: "Milho",
      url: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=400",
      descricao: "Milho em desenvolvimento"
    },
    {
      id: 3,
      titulo: "Irrigação Manhã",
      data: "2024-01-08",
      local: "Talhão C",
      cultura: "Soja",
      url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      descricao: "Sistema de irrigação em operação"
    },
    {
      id: 4,
      titulo: "Colheita Trigo",
      data: "2024-01-05",
      local: "Talhão D",
      cultura: "Trigo",
      url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400",
      descricao: "Colheita do trigo finalizada"
    }
  ];

  const getCulturaColor = (cultura: string) => {
    switch (cultura) {
      case "Soja":
        return "bg-success/10 text-success border-success/20";
      case "Milho":
        return "bg-warning/10 text-warning border-warning/20";
      case "Trigo":
        return "bg-earth/10 text-earth border-earth/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const filteredFotos = fotos.filter(foto =>
    foto.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    foto.cultura.toLowerCase().includes(searchTerm.toLowerCase()) ||
    foto.local.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Galeria de Fotos</h1>
            <p className="text-muted-foreground">
              Documentação visual das atividades agrícolas
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => navigate("/galeria/selecionar")}>
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
            <Button 
              className="bg-gradient-primary shadow-soft"
              onClick={() => navigate("/galeria/nova")}
            >
              <Plus className="w-4 h-4 mr-2" />
              Nova Foto
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="shadow-soft">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4 items-center w-full sm:w-auto">
                <div className="relative flex-1 sm:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Buscar fotos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Photos Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFotos.map((foto) => (
              <Card key={foto.id} className="shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={foto.url}
                    alt={foto.titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className={getCulturaColor(foto.cultura)}>
                      {foto.cultura}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {foto.titulo}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(foto.data).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {foto.local}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-3 h-3 mr-1" />
                      Ver
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Images className="w-5 h-5 text-primary" />
                Lista de Fotos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFotos.map((foto) => (
                  <div key={foto.id} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={foto.url}
                        alt={foto.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground">{foto.titulo}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{foto.descricao}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant="outline" className={getCulturaColor(foto.cultura)}>
                          {foto.cultura}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{foto.local}</span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(foto.data).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
};

export default Galeria;