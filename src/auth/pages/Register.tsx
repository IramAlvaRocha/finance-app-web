import { CardContent, CardFooter } from "@/components/ui/card";
import { CardForm } from "../components/CardForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

import { Helmet } from "react-helmet-async";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import type { RegisterUserForm } from "../types/RegisterFormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordStregthMeter } from "../components/PasswordStregthMeter";


const passwordSchema = z.string()
  .min(8, "La contraseña debe tener al menos 8 caracteres")
  .regex(/[A-Z]/, "La contraseña debe tener al menos una letra mayúscula")
  .regex(/[a-z]/, "La contraseña debe tener al menos una letra minúscula")
  .regex(/[0-9]/, "La contraseña debe tener al menos un número")
  .regex(/[^A-Za-z0-9]/, "La contraseña debe tener al menos un símbolo");

const FormRegisterSchema = z.object({
  name: z.string().nonempty("El campo 'Nombre' es obligatorio"),
  fatherSurname: z.string().nonempty("El campo 'Primer apellido' es obligatorio"),
  motherSurname: z.string().optional(),
  phoneNumber: z.string().regex(/^\d{10}$/, "El campo 'Teléfono' debe tener exactamente 10 dígitos"),
  userName: z.string().nonempty("El campo 'Nombre de usuario' es obligatorio").min(6, "El nombre de usuario debe ser al menos seis carácteres"),
  email: z.string().email().nonempty("El campo 'Correo electrónico' es obligatorio"),
  password: passwordSchema,
  confirmPassword: z.string().nonempty("El campo 'Confirmar contraseña' es obligatorio"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas deben de coincidir",
  path: ["confirmPassword"], //! Este error se va a aplicar al campo Confirmar contraseña
});

export const Register = () => {

  const form = useForm<RegisterUserForm>({
    resolver: zodResolver(FormRegisterSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      fatherSurname: "",
      motherSurname: "",
      email: "",
      phoneNumber: "",
      userName: "",
      password: "",
      confirmPassword: ""
    }
  });

  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<RegisterUserForm> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(data);
  }

  return (
    <>
      <Helmet>
        <title>
          Crear una cuenta | Finance App
        </title>
      </Helmet>
      <CardForm
        title="Crea una cuenta"
        description="Comienza a mejorar tu vida financiera."
        showIcon={false}
      >
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <FormField control={control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Escribe tu nombre" type="text" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    Escribe tu nombre o nombres
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}>
              </FormField>
              <FormField control={control} name="fatherSurname" render={({ field }) => (
                <FormItem>
                  <FormLabel>Primer Apellido</FormLabel>
                  <FormControl>
                    <Input placeholder="Escribe tu primer apellido" type="text" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    Escribe tu apellido paterno
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}>
              </FormField>
              <FormField control={control} name="motherSurname" render={({ field }) => (
                <FormItem>
                  <FormLabel>Segundo Apellido</FormLabel>
                  <FormControl>
                    <Input placeholder="Escribe tu segundo apellido" type="text" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    Escribe tu apellido materno (Opcional)
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}>
              </FormField>
              <FormField control={control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="Escribe correo electrónico" type="text" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    Escribe tu apellido materno (Opcional)
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}>
              </FormField>
              <FormField control={control} name="phoneNumber" render={({ field }) => (
                <FormItem>
                  <FormLabel>Número telefónico</FormLabel>
                  <FormControl>
                    <Input placeholder="Escribe tu numero telefónico a 10 dígitos" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}>
              </FormField>
              <FormField control={control} name="userName" render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de usuario</FormLabel>
                  <FormControl>
                    <Input placeholder="Escribe tu nombre de usuario" type="text" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">
                    Tu nombre de usuario debe contener al menos seis caracteres
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}>
              </FormField>
              <FormField control={control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input placeholder="Escribe una contraseña" type="password" {...field} />
                  </FormControl>
                  <PasswordStregthMeter password={field.value} />
                  <FormMessage />
                  <FormDescription className="text-xs">
                    Tu contraseña debe tener al menos 8 caracteres, al menos una letra mayúscula, una letra minúscula, al menos un número, al menos un símbolo.
                  </FormDescription>
                </FormItem>
              )}>
              </FormField>
              <FormField control={control} name="confirmPassword" render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirma tu contraseña</FormLabel>
                  <FormControl>
                    <Input placeholder="Escribe nuevamente tu contraseña" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}>
              </FormField>
              <Button type="submit" className="mt-2 w-full hover:scale-105">
                Crear cuenta
              </Button>
            </form>
          </Form>

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
