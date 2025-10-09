"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, ArrowLeft, DollarSign } from "lucide-react"
import { Link } from "react-router"

export const LoginForm = () => {
    const [email, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </Link>
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full text-white bg-blue-600 flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-primary-foreground" />
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold text-center">Ingresa a tu cuenta</CardTitle>
                <CardDescription className="text-center">Gestiona tus finanzas personales de forma inteligente</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Usuario</Label>
                        <Input
                            id="usuario"
                            type="text"
                            placeholder="usuario_de_usuario"
                            value={email}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    {error && (
                        <Alert variant="destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <Button
                        type="submit"
                        variant="outline"
                        className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:scale-105"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Iniciando sesión...
                            </>
                        ) : (
                            "Iniciar Sesión"
                        )}
                    </Button>


                </form>
            </CardContent>
        </Card>
    )
}