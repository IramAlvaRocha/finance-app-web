import { CardContent, CardFooter } from "@/components/ui/card";
import { CardForm } from "../components/CardForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Link } from "react-router";

export const Register = () => {
  const handleRegister = () => {
    setIsLoading(true);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <CardForm
        title="Crea una cuenta"
        description="Comienza a mejorar tu vida financiera."
        showIcon = {false}
      >
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre(s)</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Juan"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Primer Apellido</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Pérez"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondLastName">Segundo Apellido</Label>
              <Input
                id="secondLastName"
                name="secondLastName"
                type="text"
                placeholder="García (opcional)"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Nombre de Usuario</Label>
              <Input
                id="username"
                name="username"
                type="text"
                required
                placeholder="juan_perez"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="juan@ejemplo.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Celular</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="5512345678"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" className="w-full hover:scale-105" disabled={isLoading}>
              {isLoading ? "Registrando..." : "Crear Cuenta"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center w-full">
          Ya tienes una cuenta?
          <Link to={"/auth/login"} className="text-blue-500 ml-1">
            Inicia sesión
          </Link>
        </CardFooter>
      </CardForm>
    </>
  );
};
