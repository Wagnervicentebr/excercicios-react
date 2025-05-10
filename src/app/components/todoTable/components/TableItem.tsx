import { TodoTask } from "@/app/hooks/useTodos";
import { CheckIcon } from "@radix-ui/react-icons";
import { Checkbox } from "radix-ui";

interface TableItemProps {
    taskItem: TodoTask,
    onToggle: (id: string) => void
}

export function TableItem({ taskItem, onToggle }: TableItemProps) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <td className="px-6 py-4">
                <Checkbox.Root 
                    className="bg-gray-400 w-6 h-6 rounded-sm flex items-center justify-center cursor-pointer" 
                    checked={taskItem.done}
                    onCheckedChange={() => onToggle(taskItem.id)}
                    id={taskItem.id}>
                    <Checkbox.Indicator className="CheckboxIndicator">
                        <CheckIcon  />
                    </Checkbox.Indicator>
                </Checkbox.Root>
            </td>
            <td className="px-6 py-4">
                <label data-through={taskItem.done} className="Label data-[through=true]:line-through" htmlFor={taskItem.id}>
                    { taskItem.description } 
                </label>
            </td>
        </tr>
    )
}