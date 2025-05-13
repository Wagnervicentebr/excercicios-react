'use client'

import { Header } from "../components/Header";
import {  ShoppingCartProvider } from "../contexts/ShoppingCartContext";
import { Products } from "../components/Products";



export default  function Home() {

  return (
    <div className="h-screen">
        <Header title="Lista de Produtos" />
        <Products />
    </div>
  );
}
