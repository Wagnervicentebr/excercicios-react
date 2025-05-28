import { OrderDetail } from "@/app/api/products"
import { CurrencyFormatter } from "@/app/utils/formatter";

export const HeaderCollums = [
    {
        key: "id",
        label: "#"
    },
    {
        key: "name",
        label: "Descrição"
    },
    {
        key: "value",
        label: "Valor"
    }
]

export const normalizeData = (productDetails: OrderDetail | undefined) => {
    if (!productDetails) return [];

   const productsNormalized = productDetails.products.map(item => {
    return {
        ...item,
        value: CurrencyFormatter.format(item.value)
    }
   });

    return productsNormalized
}