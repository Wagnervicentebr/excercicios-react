import { TodoTask } from "../../page";

interface CounterPendingTaskProps {
    tasks: TodoTask[]
}

export function CounterPendingTask({ tasks }: CounterPendingTaskProps) {
    const pendingTaks = tasks.filter(item => item.done === false);
    
    return (
        <span className="text-md font-bold font-heading text-yellow-200 ">Tarefas pendentes: {pendingTaks.length}</span>
    )
}