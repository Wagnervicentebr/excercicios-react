import { CurrencyFormatter } from "../utils/formatter"

interface SummaryPorps {
    qunatityItems: number,
    totalPrice: number 
}
export function Summary({ qunatityItems, totalPrice }: SummaryPorps) {
    return (
        <div className="flex flex-col bg-white gap-1">
            <span className="font-heading text-2xl text-purple-200 font-bold">Resumo de valores: </span>
            <span className="text-lg font-semibold text-base-subtitle">Quantidade: { qunatityItems }</span>
            <span className="text-lg font-semibold text-base-subtitle">Total: { CurrencyFormatter.format(totalPrice)}</span>
        </div>
    )
}