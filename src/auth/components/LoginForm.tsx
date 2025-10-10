
import type { CredencialesUsuarioDTO } from "../types/CredencialesUsuario";

import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { CardForm } from "./CardForm";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { isValid } from "zod/v3";

const FormLoginData = z.object({
  username: z.string().nonempty("Ingresa tu nombre de usuario"),
  password: z.string().nonempty("Ingresa tu contraseña")
});

export const LoginForm = () => {


  const form = useForm<CredencialesUsuarioDTO>({
    resolver: zodResolver(FormLoginData),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const { handleSubmit, control, formState: { isSubmitting } } = form;

  const onSubmit: SubmitHandler<CredencialesUsuarioDTO> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(data);
  };

  return (
    <CardForm
      title="Ingresa a tu cuenta"
      description="Gestiona tus finanzas personales de forma inteligente"
      showIcon
    >
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <FormField control={control} name="username" render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de usuario" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}>
            </FormField>
            <FormField control={control} name="password" render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="Contraseña" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}>
            </FormField>
            <Button type="submit" className="w-full hover:scale-105 cursor-pointer" disabled={isSubmitting || !isValid}>
              {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </CardForm>
  );
};

