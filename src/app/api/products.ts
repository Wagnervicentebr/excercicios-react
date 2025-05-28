import { api } from "../lib/axios";

export type Product = {
    id: number,
    provider: string,
    date: Date,
    totalPrice: number
}

export type OrderDetail = {
    id: number
    products: [{ id: number , name: string, value: number }]
}

export async function getAllProducts() {
    const response = await api.get<Product[]>('/products');

    return response.data
}

export async function getProductById(idProduct: number) {
    const response = await api.get<OrderDetail>('/orders/' + idProduct);

    return response.data
}