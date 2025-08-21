import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, CloudSnow, Eye, Wind, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  icon: string;
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Usando São Paulo como exemplo - você pode implementar geolocalização
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=2266f269be41b5b6234971e5e0a7e46d&units=metric&lang=pt`
        );
        
        if (!response.ok) {
          throw new Error('Falha ao carregar dados do tempo');
        }
        
        const data = await response.json();
        
        setWeather({
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          visibility: data.visibility / 1000,
          icon: data.weather[0].icon
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (iconCode?: string) => {
    if (!iconCode) return Sun;
    
    if (iconCode.includes('01')) return Sun;
    if (iconCode.includes('02') || iconCode.includes('03') || iconCode.includes('04')) return Cloud;
    if (iconCode.includes('09') || iconCode.includes('10')) return CloudRain;
    if (iconCode.includes('13')) return CloudSnow;
    return Cloud;
  };

  if (loading) {
    return (
      <Card className="bg-gradient-sky shadow-soft">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-sky/20 rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-sky/20 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-gradient-sky shadow-soft">
        <CardContent className="p-6">
          <p className="text-sky-foreground text-sm">Erro: {error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!weather) return null;

  const WeatherIcon = getWeatherIcon(weather.icon);

  return (
    <Card className="bg-gradient-sky shadow-soft border-sky/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-sky-foreground flex items-center gap-2">
          <WeatherIcon className="w-5 h-5" />
          Condições Atuais
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-sky-foreground">
              {weather.temperature}°C
            </div>
            <p className="text-sky-foreground/80 capitalize text-sm">
              {weather.description}
            </p>
          </div>
          <WeatherIcon className="w-16 h-16 text-sky-foreground/80" />
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-sky-foreground/20">
          <div className="text-center">
            <Droplets className="w-4 h-4 text-sky-foreground/80 mx-auto mb-1" />
            <div className="text-xs text-sky-foreground/80">Umidade</div>
            <div className="text-sm font-semibold text-sky-foreground">{weather.humidity}%</div>
          </div>
          <div className="text-center">
            <Wind className="w-4 h-4 text-sky-foreground/80 mx-auto mb-1" />
            <div className="text-xs text-sky-foreground/80">Vento</div>
            <div className="text-sm font-semibold text-sky-foreground">{weather.windSpeed} m/s</div>
          </div>
          <div className="text-center">
            <Eye className="w-4 h-4 text-sky-foreground/80 mx-auto mb-1" />
            <div className="text-xs text-sky-foreground/80">Visibilidade</div>
            <div className="text-sm font-semibold text-sky-foreground">{weather.visibility} km</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}