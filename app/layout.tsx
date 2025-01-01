import { CartProvider } from "@/context/cartContext";
import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Milestone 3 Project",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>
            <Header/>
            <main>
              
              {children}
              <SanityLive/>
            </main>
            <Footer/>
        </CartProvider>
        </body>
    </html>
  );
}
