import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils"
import { Sheet } from "@/components/ui/sheet";
import SideBar from "@/components/sideBar/sideBar";

const inter = Inter({ subsets: ["latin"]});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${cn("min-h-screen bg-background font-sans antialiased",
            inter.className
          )}
          antialiased`}
      >
        <SideBar/>
        {children}
      </body>
    </html>
  );
}
