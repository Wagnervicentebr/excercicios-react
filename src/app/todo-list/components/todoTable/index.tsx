import { TodoTask } from "../../page";
import { TableHead } from "./components/TableHeader";
import { TableItem } from "./components/TableItem";

interface TodoTableProps {
    tasks: TodoTask[],
    onCheckedChange: (id: string) => void
}

export function TodoTable({ tasks, onCheckedChange }: TodoTableProps) {
    return (
        <div className="relative overflow-x-auto" >
            <table className="w-lg text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-2 border-purple-200 ">
                <TableHead />
                <tbody>
                    { tasks.map(item => (
                        <TableItem 
                            key={item.id} 
                            taskItem={item}
                            onCheckedChange={onCheckedChange}
                        />
                    ))}
                </tbody>
            </table>
        </div>

    )
}