import { Baloo_2, Roboto } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "../context/AuthContext";

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
      <body className="bg-stone antialiased text-base-text font-text">
        <main className="max-w-[1120px] mx-auto px-5 lg:px-0  h-screen">
          <AuthContextProvider>
              {children}
            <ToastContainer />
          </AuthContextProvider>
        </main>
      </body>
    </html>
  );
}
