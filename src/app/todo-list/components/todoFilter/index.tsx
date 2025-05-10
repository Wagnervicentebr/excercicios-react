import { useState } from "react"
import { Filters } from "./constants";

interface TodoFilterProps {
    onFilter: (filterId: number) => void
}

export function TodoFilter({ onFilter }: TodoFilterProps) {
    const [filterSelectedId, setFilterSelectedId] = useState<number>(1);

    const handleFilterSelected = (filterIdSelected: number) => {
        setFilterSelectedId(filterIdSelected);

        onFilter(filterIdSelected);
    }

    return (
        <div className="flex flex-row gap-8 p-3 justify-center items-center">
            {Filters.map(item => (
                <div 
                    data-active={filterSelectedId === item.id}
                    key={item.id}
                    className="rounded-md bg-base-title py-1 px-5 text-white font-heading text-md justify-center items-center cursor-pointer hover:opacity-90 transition-colors duration-300 data-[active=true]:bg-purple-200"
                    onClick={() => handleFilterSelected(item.id)}
                >
                    <span>{ item.description }</span>
                </div>
            ))}
        </div>
    )
}