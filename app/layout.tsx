import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {AppWrapper,} from '@/context/UserContextProvider'
import toast, { Toaster } from 'react-hot-toast';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medicare",
  description: "Site which connects doctors and patients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
      <AppWrapper>
        <Header/>
        {children}
        <Footer/>
        </AppWrapper>
  <Toaster/>
        
       
        </body>
    </html>
  );
}
