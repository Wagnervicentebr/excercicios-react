import { ButtomCustom } from "@/app/components/ui/ButtonCustom";
import { InputCustom } from "@/app/components/ui/InputCustom";
import { TodoTask } from "../../page";
import { useState } from "react";
import { randomUUID } from "crypto";

interface TodoFormProps {
    onSubmit: (task: TodoTask) => void
}

export function TodoForm({ onSubmit }: TodoFormProps) {
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = () => {
        const newTask: TodoTask = {
            id: self.crypto.randomUUID(),
            description: taskDescription,
            done: false
        }

        onSubmit(newTask);
    }

    return (
        <div className="flex flex-row items-center py-10 gap-3 max-w-2xl">
            <span className="text-md font-bold">Nova tarefa:</span>
            <InputCustom 
                className="w-2xs" 
                placeholder="Insira uma nova tarefa"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
            />
            <ButtomCustom type="submit" onClick={handleSubmit}>Adicionar</ButtomCustom>
        </div>
    )
}