import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  variant?: "default" | "success" | "warning" | "earth" | "sky";
}

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  trendValue,
  variant = "default" 
}: MetricCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-gradient-to-br from-success/10 to-success/5 border-success/20";
      case "warning":
        return "bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20";
      case "earth":
        return "bg-gradient-to-br from-earth/10 to-earth/5 border-earth/20";
      case "sky":
        return "bg-gradient-to-br from-sky/10 to-sky/5 border-sky/20";
      default:
        return "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "success":
        return "text-success";
      case "warning":
        return "text-warning";
      case "earth":
        return "text-earth";
      case "sky":
        return "text-sky";
      default:
        return "text-primary";
    }
  };

  const getTrendColor = () => {
    if (trend === "up") return "text-success";
    if (trend === "down") return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <Card className={cn("shadow-soft hover:shadow-medium transition-all duration-300", getVariantStyles())}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn("h-5 w-5", getIconColor())} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
        {trendValue && (
          <p className={cn("text-xs mt-2 flex items-center gap-1", getTrendColor())}>
            {trend === "up" && "↗"}
            {trend === "down" && "↘"}
            {trend === "neutral" && "→"}
            {trendValue}
          </p>
        )}
      </CardContent>
    </Card>
  );
}