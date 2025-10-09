import { TrendingUp, Shield, BarChart3 } from 'lucide-react'

export const FeaturesSection = () => {
    return (
        <div className="px-4 py-20 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center space-y-4 p-6 rounded-xl bg-card shadow">
                    <div className="flex justify-center">
                        <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center bg-blue-500">
                            <TrendingUp className="w-7 h-7 text-white" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Análisis Detallado</h3>
                    <p className="text-muted-foreground">
                        Visualiza tus gastos por categoría y tendencias mensuales con gráficas interactivas
                    </p>
                </div>

                <div className="text-center space-y-4 p-6 rounded-xl bg-card shadow">
                    <div className="flex justify-center">
                        <div className="w-14 h-14 rounded-lg bg-gradient-success flex items-center justify-center bg-green-500">
                            <Shield className="w-7 h-7 text-success-foreground" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Seguro y Confiable</h3>
                    <p className="text-muted-foreground">
                        Tus datos están protegidos con encriptación de nivel bancario
                    </p>
                </div>

                <div className="text-center space-y-4 p-6 rounded-xl bg-card shadow">
                    <div className="flex justify-center">
                        <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center bg-blue-500">
                            <BarChart3 className="w-7 h-7 text-primary-foreground" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Objetivos Claros</h3>
                    <p className="text-muted-foreground">
                        Define y sigue el progreso de tus metas financieras fácilmente
                    </p>
                </div>
            </div>
        </div>
    )
}
