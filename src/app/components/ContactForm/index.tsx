'use client'

import { useForm } from "react-hook-form";
import { ButtonCustom } from "../ui/ButtonCustom";
import { InputCustom } from "../ui/InputCustom";
import { TextAreaCustom } from "../ui/TextAreaCustom";

type ContactInputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

export function ContactForm() {
    const { register, handleSubmit} = useForm<ContactInputs>();

    const handleSaveContat = (data: ContactInputs) => {
        console.log(data);
    }
    
    return (
        <form className="w-full bg-gray-300 p-5 flex flex-col justify-center items-center gap-3 rounded-md">
            <div className="w-full flex gap-5">
                <InputCustom placeholder="Full name" {...register('name')}/>
                <InputCustom placeholder="Email Address" {...register('email')}/>
            </div>

            <InputCustom placeholder="Subject" {...register('subject')}/> 

            <TextAreaCustom placeholder="Your Message" {...register('message')}/>

            <ButtonCustom onClick={handleSubmit(handleSaveContat)}>
                Send Message
            </ButtonCustom>
        </form>
    )
}