export interface Filter {
    id: number,
    description: string
}

export const Filters: Filter[] = [
    {id: 1, description: 'Todos'},
    {id: 2, description: 'Pendentes'},
    {id: 3, description: 'Concluídos'},
]