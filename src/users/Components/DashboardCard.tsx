import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export const DashboardCard = () => {
  return (
    <>
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 min-w-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <TrendingUp className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">Balance Total</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold truncate">
            $24,580.50
          </div>
          <p className="text-xs text-primary-foreground/80 mt-1 flex items-center gap-1">
            <TrendingUp className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">+12.5% vs mes anterior</span>
          </p>
        </CardContent>
      </Card>
    </>
  );
};
