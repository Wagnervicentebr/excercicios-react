'use client';

import { useState } from "react";
import { TodoForm } from "./components/todoForm";
import { TodoTable } from "./components/todoTable";
import { CounterPendingTask } from "./components/counterPendingTask";
import { TodoFilter } from "./components/todoFilter";
import { Filter, Filters } from "./components/todoFilter/constants";

export interface TodoTask  {
    id: string,
    description: string,
    done: boolean
}

export default function TodoList() {
    const [tasks, setTasks] = useState<TodoTask[] | []>([]);
    const [filter, setFilter] = useState<Filter | undefined>(Filters[0]);
    

    const handleSubmit = (task: TodoTask) => {
        setTasks(state => [...state, task])
    }

    const handleCheckedChange = (taskId: string) => {
        let listTasksChanged = tasks.map(task => {
            if (task.id === taskId) {
                task.done = !task.done
            }

            return task;
        })

        setTasks(listTasksChanged);
    }

    const handleFilter = (idFilter: number) => {
        const filterSelect = Filters.find(item => item.id === idFilter);
        
        setFilter(filterSelect);
    }

    const applyFilter = (tasks: TodoTask[]) => {
        if (filter?.description != 'Todos') {
            const isFilterDone = filter?.description == 'Concluídos';
            return tasks.filter(item => item.done == isFilterDone)
        }
        return tasks;
    }
    

    return (
        <div className="w-full p-5 flex flex-col py10">

            <h1 className="text-xl text-center border border-purple-300 font-heading text-base-title font-bold">Lista de Tarefas (Todo List)</h1>

            <div className=" flex flex-col justify-center items-center px-40">
                <TodoForm onSubmit={handleSubmit}/>
                <TodoFilter onFilter={handleFilter}/>

                <CounterPendingTask tasks={tasks}/>

                <TodoTable tasks={applyFilter(tasks)} onCheckedChange={handleCheckedChange}/>
            </div>

        </div>
    )
}