import type React from "react";
import { useState } from "react";

import type { CredencialesUsuarioDTO } from "../types/CredencialesUsuario";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { CardForm } from "./CardForm";
import { useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"


export const LoginForm = () => {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { isValid, isSubmitting, errors } } = useForm<CredencialesUsuarioDTO>({
    resolver: zodResolver(FormLoginData),
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<CredencialesUsuarioDTO> = async (data) => {


    console.log( data );

    // try{
    //     const response = await clientAPI.post<RespuestaAutenticacion>(props.url, data);
    //     guardarTokenLocalStorage(response.data);
    //     actualizar(obtenerClaims());
    //     navigate("/");
    // }
    // catch(errors){
    //     const errores = ExtraerErroresIdentity(errors as AxiosError);
    //     setErrores(errores);
    // }
  }

  return (
    <CardForm
      title="Ingresa a tu cuenta"
      description="Gestiona tus finanzas personales de forma inteligente"
      showIcon
    >
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Usuario</Label>
            <Input
              {...register("username")}
              className="hover:scale-102 cursor-pointer"
              autoComplete="username"
              id="usuario"
              type="text"
              placeholder="usuario_de_usuario"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              {...register("password")}
              className="hover:scale-102 cursor-pointer"
              autoComplete="current-password"
              id="password"
              type="password"
            />
          </div>

          {/* {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )} */}

          <Button
            type="submit"
            className="w-full hover:scale-105"
            disabled={isSubmitting || !isValid}
          >
            {isSubmitting ? (
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


const FormLoginData = z.object({
  username: z.string("Ingresa tu nombre de usuario"),
  password: z.string("Ingresa tu contraseña")
});