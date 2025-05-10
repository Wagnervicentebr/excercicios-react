import { TableHeaders } from "../constants";

export function TableHead() {

    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {TableHeaders.map(header => (
                    <th key={header.description} scope="col" className={`px-6 py-3 w-[${header.size}]`}>
                       {header.description}
                    </th>
                ))}
            </tr>
        </thead>
    )
}