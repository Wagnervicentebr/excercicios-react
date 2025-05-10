import { useState } from "react";

export interface TodoTask { 
    id: string,
    description: string,
    done: boolean
}
export type FilterTypes = 'all' | 'pending' | 'done';

export function useTodos() {
    const [tasks, setTasks] = useState<TodoTask[] | []>([]);
    

    const addTask = (description: string) => {
        setTasks(prev => [...prev, {
            id: self.crypto.randomUUID(),
            description,
            done: false,
        }]);
    }

    const toggleTask = (id: string) => {
        setTasks(prev => prev.map(item => item.id == id ? {...item, done: !item.done} : item))
    }

    const filterTask = (filter: FilterTypes) => {
        return tasks.filter(item => {
            if (filter == 'all') return true;
            if (filter == 'done') return item.done;
            if (filter == 'pending') return !item.done;
        })
    }


    return {
        tasks,
        addTask,
        toggleTask,
        filterTask
    }
}