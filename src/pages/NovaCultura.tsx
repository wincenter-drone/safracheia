import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Sprout } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NovaCultura = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    variedade: "",
    area: "",
    dataPlantio: "",
    dataColheita: "",
    status: "",
    observacoes: ""
  });

  const handleSave = () => {
    console.log("Saving culture:", formData);
    navigate("/culturas");
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => navigate("/culturas")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Nova Cultura</h1>
            <p className="text-muted-foreground">
              Cadastrar nova cultura agrícola
            </p>
          </div>
        </div>

        {/* Form */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sprout className="w-5 h-5 text-primary" />
              Informações da Cultura
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome da Cultura *</Label>
                <Select value={formData.nome} onValueChange={(value) => setFormData({...formData, nome: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a cultura" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="soja">Soja</SelectItem>
                    <SelectItem value="milho">Milho</SelectItem>
                    <SelectItem value="trigo">Trigo</SelectItem>
                    <SelectItem value="algodao">Algodão</SelectItem>
                    <SelectItem value="arroz">Arroz</SelectItem>
                    <SelectItem value="feijao">Feijão</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="variedade">Variedade</Label>
                <Input
                  id="variedade"
                  placeholder="Ex: BRS 1010, Pioneer 30F53"
                  value={formData.variedade}
                  onChange={(e) => setFormData({...formData, variedade: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Área (hectares) *</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="0.0"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status *</Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planejado">Planejado</SelectItem>
                    <SelectItem value="plantado">Plantado</SelectItem>
                    <SelectItem value="desenvolvimento">Em Desenvolvimento</SelectItem>
                    <SelectItem value="floracao">Floração</SelectItem>
                    <SelectItem value="colheita">Pronto para Colheita</SelectItem>
                    <SelectItem value="colhido">Colhido</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataPlantio">Data de Plantio</Label>
                <Input
                  id="dataPlantio"
                  type="date"
                  value={formData.dataPlantio}
                  onChange={(e) => setFormData({...formData, dataPlantio: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataColheita">Previsão de Colheita</Label>
                <Input
                  id="dataColheita"
                  type="date"
                  value={formData.dataColheita}
                  onChange={(e) => setFormData({...formData, dataColheita: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="observacoes">Observações</Label>
              <Textarea
                id="observacoes"
                placeholder="Informações adicionais sobre a cultura..."
                value={formData.observacoes}
                onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
                rows={4}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => navigate("/culturas")}>
                Cancelar
              </Button>
              <Button 
                onClick={handleSave}
                className="bg-gradient-primary shadow-soft"
                disabled={!formData.nome || !formData.area || !formData.status}
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Cultura
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default NovaCultura;