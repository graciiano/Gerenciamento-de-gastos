"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import {
  Calendar,
  Calendar1,
  DollarSign,
  History,
  Home,
  Landmark,
  LogOut,
  Package,
  PanelBottom,
  User,
} from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";

export default function SideBar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <div className="fixed inset-y-0 left z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/page-perfil"
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
                >
                  <User className="h-6 w-6" />
                  <span className="sr-only"> Acessar meu perfil</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-secondary rounded-md p-1"
                side="right"
              >
                Perfil
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-white "
                >
                  <Home className="h-6 w-6" />
                  <span className="sr-only"> Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-secondary rounded-md p-1"
                side="right"
              >
                Home
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/gerenciamento"
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-white "
                >
                  <Landmark className="h-6 w-6" />
                  <span className="sr-only"> Gerenciar</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-secondary rounded-md p-1"
                side="right"
              >
                Gerenciar Pagamentos
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/gastos-mensais"
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-white "
                >
                  <Calendar1 className="h-6 w-6" />
                  <span className="sr-only"> Gastos Mensais</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-secondary rounded-md p-1"
                side="right"
              >
                Gastos Mensais
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/historico"
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-white "
                >
                  <History className="h-6 w-6" />
                  <span className="sr-only"> Gastos Mensais</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-secondary rounded-md p-1"
                side="right"
              >
                Historico
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/conversor-de-moeda"
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-white "
                >
                  <DollarSign className="h-6 w-6" />
                  <span className="sr-only"> Financeiro</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-secondary rounded-md p-1"
                side="right"
              >
                Financeiro
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary rounded-lg text-muted-foreground transition-colors hover:text-foreground bg-white "
                >
                  <LogOut className="h-5 w-5 text-red-600" />
                  <span className="sr-only"> Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-secondary rounded-md p-1"
                side="right"
              >
                Home
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </div>

      <div className=" sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header
          className="sticky top-0 z-30 flex h-14 items-center px-4 border-b gap-4 sm:static
                sm:h-auto sm:border-0 sm-bg-transparent"
        >
          <Sheet>
            <SheetTrigger>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="w-5 h5" />
                <span className="sr-only"> Abrir || fechar</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm-max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/page-perfil"
                  className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2 "
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="sr-only">Perfil do usuario</span>
                </Link>

                <Link
                  href="/dashboard"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5 transition-all" />
                  Inicio
                </Link>

                <Link
                  href="/gerenciar"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Landmark className="h-5 w-5 transition-all" />
                  Gerenciar
                </Link>

                <Link
                  href="/gastos-mensais"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <Calendar className="h-5 w-5 transition-all" />
                  Gastos Mensais
                </Link>
                <Link
                  href="/historico"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <History className="h-5 w-5 transition-all" />
                  Historico
                </Link>
                <Link
                  href="/conversor-de-moeda"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                >
                  <DollarSign className="h-5 w-5 transition-all" />
                  Financeiro
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  );
}
