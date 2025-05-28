import { Product } from "../api/products"

type Collums = {
    key: string,
    label: string
}
interface ProductListProps {
    items: Array<any> | undefined
    headerCollums: Collums[],
    onViewDetails: (id: number) => void
}

export function TableList({ headerCollums, items, onViewDetails }: ProductListProps) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-white">
                <thead className="text-xs text-gray-700 uppercase bg-purple-300 text-center">
                    <tr>
                        {headerCollums.map(item => (
                            <th key={item.key} scope="col" className="px-6 py-3">
                                { item.label }
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-stone">
                    {items?.map((cel, _) => {
                        return (
                            <tr key={_} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 cursor-pointer" onClick={() => onViewDetails(cel['id'])}>
                                { headerCollums.map((header, index) => {
                                    return (
                                        <th key={cel[header.key]} scope="row" className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap">
                                            { cel[header.key] }
                                        </th>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}