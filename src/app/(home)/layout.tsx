'use client'
import type { Metadata } from "next";
import { Baloo_2, Roboto } from "next/font/google";
import "./globals.css";
import { ShoppingCartProvider } from "../contexts/ShoppingCartContext";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
})

const baloo = Baloo_2({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-baloo'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${baloo.variable}`}>
      <body className="bg-zinc-800 antialiased text-base-text font-text">
        <main className="max-w-[1120px] mx-auto py-8 px-5 lg:px-0">
          <ShoppingCartProvider>
            {children}  
          </ShoppingCartProvider>

        </main>
      </body>
    </html>
  );
}
