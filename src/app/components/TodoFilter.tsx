import { FilterTypes } from "../hooks/useTodos";

interface TodoFilterProps {
    currentFilter: 'all' | 'pending' | 'done',
    onFilter: (filterType: FilterTypes) => void
}

export function TodoFilter({ currentFilter, onFilter }: TodoFilterProps) {
    const filters: FilterTypes[] = ['all', 'pending', 'done' ]

    return (
        <div className="flex flex-row gap-8 p-3 justify-center items-center">
            {filters.map(item => (
                <div 
                    data-active={currentFilter === item}
                    key={item}
                    className="rounded-md bg-base-title py-1 px-5 text-white font-heading text-md justify-center items-center cursor-pointer hover:opacity-90 transition-colors duration-300 data-[active=true]:bg-purple-200"
                    onClick={() => onFilter(item)}
                >
                    <span>{ item }</span>
                </div>
            ))}
        </div>
    )
}