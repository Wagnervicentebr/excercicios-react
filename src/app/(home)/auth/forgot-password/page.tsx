'use client'

import { FormUserLogin } from "@/app/components/FormUserLogin";
import { Input } from "@/app/components/ui/Input";
import { useToast } from "@/app/hooks/useToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import * as zod from 'zod';

const zodSchema = zod.object({
    email: zod.string().email('Digite um e-mail válido')
}) 

type InputTypes = zod.infer<typeof zodSchema>

export default function ResetPassword() {
    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting, errors }, 
        reset 
        } = useForm<InputTypes>({
        resolver: zodResolver(zodSchema)
    });

    const {  ToastSuccess } = useToast();

    const handleSubmitForm = (data: InputTypes) => {
        console.log(data);
        
        reset();
        ToastSuccess('E-mail enviado com sucesso');
        redirect('/')
    }

    return (
        <div className="flex h-full">
            <FormUserLogin
            screenName="Resetar Senha" 
            subtitleAcion="Digite seu e-mail para recuperação da senha"
            buttonActionText="Recuperar"
            onSubmit={handleSubmit(handleSubmitForm)}
            loading={isSubmitting}
            >
                <Input 
                {...register("email")}
                label="E-mail" 
                placeholder="Digite seu E-mail"
                errors={errors.email}
                />
              
            </FormUserLogin>
        </div>
    )
}