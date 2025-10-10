import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { CardForm } from "./CardForm";
import { Link, useNavigate } from "react-router";

export const LoginForm = () => {
  const [email, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
  };

  const navigate = useNavigate();

  return (
    <CardForm
      title="Ingresa a tu cuenta"
      description="Gestiona tus finanzas personales de forma inteligente"
      showIcon
    >
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Usuario</Label>
            <Input
            className="hover:scale-102 cursor-pointer"
              autoComplete="username"
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
            className="hover:scale-102 cursor-pointer"
              autoComplete="current-password"
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
            className="w-full hover:scale-105"
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
          <Button
            type="button"
            variant="secondary"
            className="w-full hover:scale-105"
            onClick={() => navigate("/auth/register")}
          >
            Crea una cuenta
          </Button>
        </form>
      </CardContent>
    </CardForm>
  );
};
