import { ButtomCustom } from "@/app/components/ui/ButtonCustom";
import { InputCustom } from "@/app/components/ui/InputCustom";
import { TodoTask } from "../todo-list/page";
import { useState } from "react";

interface TodoFormProps {
    onSubmit: (task: string) => void
}

export function TodoForm({ onSubmit }: TodoFormProps) {
    const [taskDescription, setTaskDescription] = useState('');

    return (
        <div className="flex flex-row items-center py-10 gap-3 max-w-2xl">
            <span className="text-md font-bold">Nova tarefa:</span>
            <InputCustom 
                className="w-2xs" 
                placeholder="Insira uma nova tarefa"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <ButtomCustom type="submit" onClick={() => onSubmit(taskDescription)}>Adicionar</ButtomCustom>
        </div>
    )
}