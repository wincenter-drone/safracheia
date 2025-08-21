import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NovaAtividade = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: "",
    data: "",
    hora: "",
    tipo: "",
    cultura: "",
    prioridade: "",
    descricao: ""
  });

  const handleSave = () => {
    console.log("Saving activity:", formData);
    navigate("/calendario");
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => navigate("/calendario")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Nova Atividade</h1>
            <p className="text-muted-foreground">
              Agendar nova atividade agrícola
            </p>
          </div>
        </div>

        {/* Form */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Informações da Atividade
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="titulo">Título *</Label>
                <Input
                  id="titulo"
                  placeholder="Ex: Plantio de Soja, Aplicação de Fertilizante"
                  value={formData.titulo}
                  onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de Atividade *</Label>
                <Select value={formData.tipo} onValueChange={(value) => setFormData({...formData, tipo: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="plantio">Plantio</SelectItem>
                    <SelectItem value="irrigacao">Irrigação</SelectItem>
                    <SelectItem value="fertilizacao">Fertilização</SelectItem>
                    <SelectItem value="pulverizacao">Pulverização</SelectItem>
                    <SelectItem value="colheita">Colheita</SelectItem>
                    <SelectItem value="manutencao">Manutenção</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="data">Data *</Label>
                <Input
                  id="data"
                  type="date"
                  value={formData.data}
                  onChange={(e) => setFormData({...formData, data: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hora">Horário</Label>
                <Input
                  id="hora"
                  type="time"
                  value={formData.hora}
                  onChange={(e) => setFormData({...formData, hora: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cultura">Cultura</Label>
                <Select value={formData.cultura} onValueChange={(value) => setFormData({...formData, cultura: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a cultura" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="soja">Soja</SelectItem>
                    <SelectItem value="milho">Milho</SelectItem>
                    <SelectItem value="trigo">Trigo</SelectItem>
                    <SelectItem value="algodao">Algodão</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prioridade">Prioridade</Label>
                <Select value={formData.prioridade} onValueChange={(value) => setFormData({...formData, prioridade: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a prioridade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baixa">Baixa</SelectItem>
                    <SelectItem value="media">Média</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                    <SelectItem value="urgente">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição</Label>
              <Textarea
                id="descricao"
                placeholder="Detalhes adicionais sobre a atividade..."
                value={formData.descricao}
                onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                rows={4}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => navigate("/calendario")}>
                Cancelar
              </Button>
              <Button 
                onClick={handleSave}
                className="bg-gradient-primary shadow-soft"
                disabled={!formData.titulo || !formData.tipo || !formData.data}
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Atividade
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default NovaAtividade;