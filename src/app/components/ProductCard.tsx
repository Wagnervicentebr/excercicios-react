import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "./ui/Button";
import Image from "next/image";
import { Products } from "./Products";


interface ProductCardProps {
    item: Products,
    onAdd: (item: Products) => void
}
export function ProductCard({ item, onAdd} : ProductCardProps) {

    return (
        <div className="w-[250px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] rounded-2xl gap-3 p-[3px]">
            <div className="w-full bg-white p-2 flex flex-col gap-1 rounded-2xl">
                <div className="h-[300px] flex justify-center items-center">
                    <Image width={230} height={230} className="p-10" src={`/${item.image}.png`} alt=""/>
                </div>
                <div className="bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] w-full h-[1px]"></div>
                <div className="flex flex-col p-2 gap-2 ">
                    <span className="font-heading text-base-title text-md">{ item.description }</span>
                    <span className="font-heading text-base-subtitle text-sm">R$ { item.price },00</span>
                    <Button className="justify-between" onClick={() => onAdd(item)}>
                        Comprar
                        <ArrowRight  size={22} />
                    </Button>
                </div>
            </div>
        </div>
    )
}