import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils"
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"]});




export const metadata: Metadata = {
  title: "Finances",
  description: "Controle suas financias",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className= {`
          ${cn("min-h-screen bg-background font-sans antialiased",
            inter.className
          )}
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
