import type { Metadata } from "next";
import { Baloo_2, Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

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
      <body className="bg-base-label antialiased text-base-text font-text">
        <main className="max-w-[1120px] mx-auto py-8 px-5 lg:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
