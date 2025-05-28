'use client'

import { FormUserLogin } from "@/app/components/FormUserLogin";
import { Input } from "@/app/components/ui/Input";
import { useAuth } from "@/app/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as zod from 'zod'


const zodSchema = zod.object({
  email: zod.string().email('Digite um e-mail válido'),
  password: zod.string().min(6, 'Senha incorreta')
})

type inputTypes = zod.infer<typeof zodSchema> 

export default function SignIn() {
  const route = useRouter();
  const { 
    register, 
    handleSubmit, 
    formState: { isSubmitting, errors }, 
    reset } = useForm<inputTypes>({
      resolver: zodResolver(zodSchema)
    });

  const { signIn } = useAuth();

  const handleSubmitForm = async (user: inputTypes) => {
    await signIn(user);
    route.push('/home')
  }

  return (
    <div className="flex h-full">
      <FormUserLogin 
        screenName="Login" 
        subtitleAcion="Digite seus dados para acesso no campo abaixo."
        buttonActionText="Acessar"
        onSubmit={handleSubmit(handleSubmitForm)}
        loading={isSubmitting}
      >
          <Input 
            {...register('email')}
            label="E-mail" 
            placeholder="Digite seu E-mail"
            errors={errors.email}
          />
          
          <Input 
            {...register('password')}
            type="password"
            label="Senha" 
            placeholder="Digite sua Senha"
            errors={errors.password}
          />
      </FormUserLogin>
    </div>
  );
}