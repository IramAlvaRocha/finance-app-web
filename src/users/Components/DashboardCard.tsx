import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, TrendingDown, PiggyBank } from "lucide-react"

export const DashboardCard = () => {
    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 min-w-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2">
                            <DollarSign className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">Balance Total</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl sm:text-3xl font-bold truncate">$24,580.50</div>
                        <p className="text-xs text-primary-foreground/80 mt-1 flex items-center gap-1">
                            <TrendingUp className="h-3 w-3 flex-shrink-0" />
                            <span className="truncate">+12.5% vs mes anterior</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="min-w-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                            <TrendingUp className="h-4 w-4 text-success flex-shrink-0" />
                            <span className="truncate">Ingresos</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl sm:text-3xl font-bold text-success truncate">$8,420.00</div>
                        <p className="text-xs text-muted-foreground mt-1 truncate">Este mes</p>
                    </CardContent>
                </Card>

                <Card className="min-w-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                            <TrendingDown className="h-4 w-4 text-destructive flex-shrink-0" />
                            <span className="truncate">Gastos</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl sm:text-3xl font-bold text-destructive truncate">$5,280.30</div>
                        <p className="text-xs text-muted-foreground mt-1 truncate">Este mes</p>
                    </CardContent>
                </Card>

                <Card className="min-w-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                            <PiggyBank className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span className="truncate">Ahorros</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl sm:text-3xl font-bold text-secondary truncate">$3,139.70</div>
                        <p className="text-xs text-muted-foreground mt-1 truncate">37% de ingresos</p>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
