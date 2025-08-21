import { AppLayout } from "@/components/layout/AppLayout";
import { WeatherWidget } from "@/components/weather/WeatherWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cloud, 
  Droplets,
  Wind,
  Thermometer,
  Eye,
  Gauge
} from "lucide-react";

const Clima = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Previsão do Tempo</h1>
          <p className="text-muted-foreground">
            Condições meteorológicas para planejamento agrícola
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WeatherWidget />
          
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-primary" />
                Condições Atuais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <Droplets className="w-5 h-5 text-sky" />
                  <div>
                    <p className="text-sm text-muted-foreground">Umidade</p>
                    <p className="font-semibold">65%</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <Wind className="w-5 h-5 text-earth" />
                  <div>
                    <p className="text-sm text-muted-foreground">Vento</p>
                    <p className="font-semibold">12 km/h</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <Eye className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Visibilidade</p>
                    <p className="font-semibold">10 km</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <Gauge className="w-5 h-5 text-warning" />
                  <div>
                    <p className="text-sm text-muted-foreground">Pressão</p>
                    <p className="font-semibold">1013 hPa</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-primary" />
              Alertas Meteorológicos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border border-warning/20 bg-warning/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  <h4 className="font-medium text-warning">Alerta de Chuva</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Previsão de chuva forte nas próximas 24 horas. Recomenda-se adiar aplicações.
                </p>
              </div>
              
              <div className="p-4 rounded-lg border border-sky/20 bg-sky/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky"></div>
                  <h4 className="font-medium text-sky">Condições Favoráveis</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Condições ideais para pulverização entre 14h e 18h.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Clima;