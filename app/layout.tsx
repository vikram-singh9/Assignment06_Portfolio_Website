import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '600'], // Choose weights you need
  style: ['normal', 'italic'], // Optional styles
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Vikram's Portfolio",
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
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
