'use client'

import { getProductById, OrderDetail } from "@/app/api/products";
import { Header } from "@/app/components/Header";
import { TableList } from "@/app/components/TableList";
import { use, useEffect, useState } from "react";
import { HeaderCollums, normalizeData } from "./constants";
import { ArrowLeft } from "@phosphor-icons/react";
import { Button } from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";
import { Summary } from "@/app/components/Summary";

interface ProductDetailsProps {
    params: Promise<{
    idProduct: number
  }>
}
export default  function ProductDetails({ params } : ProductDetailsProps) {
    const [productSummary, setProductSummary] = useState<OrderDetail>(); 
    const router = useRouter();
    const { idProduct } = use(params); 

    async function getProductDetail() {
        const productDetails = await getProductById(idProduct)

        setProductSummary(productDetails)
    }

    useEffect(() => {
        getProductDetail()
    }, [idProduct])

    

    const totalPrice = productSummary?.products.reduce((acc, item) => {
        acc += item.value
        return acc;
    }, 0)

    return (
        <div className="flex flex-col space-y-10">
            <Header pageTitle="Detalhes do Pedido" />

            <div className="flex gap-4 items-center">
                <Button className="w-12" onClick={() => router.back()}>
                    <ArrowLeft className="font-heading text-lg text-white" size={22} />
                </Button>
                <h3 className="font-heading text-lg text-white">Numero da ordem: {productSummary?.id}</h3>
            </div>

            <TableList items={normalizeData(productSummary)} headerCollums={HeaderCollums}  onViewDetails={() => {}}/>
            {productSummary?.products && 
                <Summary qunatityItems={productSummary?.products.length} totalPrice={totalPrice!}/>
            }
            
        </div>
    )
} 