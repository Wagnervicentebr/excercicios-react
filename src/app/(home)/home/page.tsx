'use client'

import { getAllProducts, Product } from "@/app/api/products";
import { Header } from "@/app/components/Header";
import { useEffect, useState } from "react";
import { HeaderCollums } from "./constants";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { TableList } from "@/app/components/TableList";

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const { user } = useAuth();
    const router = useRouter();

    async function getProducts() {
        const products = await getAllProducts();

        setProducts(products);
    }

    const handleDetails = (id: number) => {
        router.push(`/productDetails/${id}`)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className="flex flex-col space-y-10">  
            <Header pageTitle="Home"/>

            <h1 className="text-white font-heading font-bold text-xl">Ola, {user?.name} 👋</h1>

           <TableList items={products} headerCollums={HeaderCollums} onViewDetails={handleDetails}/>
        </div>
    )
}