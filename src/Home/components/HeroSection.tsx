import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react";
import { useNavigate } from "react-router"

export const HeroSection = () => {

    const navigate = useNavigate();

    return (
        <div className="relative min-h-1/2">
            <div className="absolute inset-0 bg-blue-400 opacity-10"></div>
            <div className="container mx-auto px-4 py-20 relative">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-blue-400 flex items-center justify-center shadow">
                            <DollarSign className="w-12 h-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                        Controla tus Finanzas
                        <span className="block text-blue-500 mt-2">de Manera Inteligente</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Administra tus tarjetas de crédito, ahorros, deudas y objetivos financieros
                        en un solo lugar. Simple, seguro y efectivo.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button
                            size="lg"
                            className="text-lg px-8"
                            onClick={() => navigate("/auth/register")}
                        >
                            Comenzar Ahora
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                            onClick={() => navigate("/auth/login")}
                        >
                            Iniciar Sesión
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
