"use client"

import { useState } from "react";
import { CounterPendingTask } from "./components/CounterPendingTask";
import { TodoFilter } from "./components/TodoFilter";
import { TodoForm } from "./components/TodoForm";
import { TodoTable } from "./components/todoTable";
import { FilterTypes, useTodos } from "./hooks/useTodos";

export default function Home() {
  const { tasks, addTask, toggleTask, filterTask } = useTodos();
  const [filterSelected, setFilterSelected] = useState<FilterTypes>('all');

  return (
     <div className="w-full p-5 flex flex-col py10">
        <h1 className="text-xl text-center border border-purple-300 font-heading text-base-title font-bold">Lista de Tarefas (Todo List)</h1>

        <div className=" flex flex-col justify-center items-center px-40">
            <TodoForm onSubmit={addTask}/>
            <TodoFilter currentFilter={filterSelected} onFilter={setFilterSelected}/>
            <CounterPendingTask tasks={tasks}/>
            <TodoTable tasks={filterTask(filterSelected)} onToggle={toggleTask}/>
        </div>
    </div>
  );
}
