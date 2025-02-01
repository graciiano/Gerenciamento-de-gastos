import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Calendar, Grape, History, Home, Landmark, Package, PanelBottom } from "lucide-react";



export default function SideBar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            <div className=" sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b gap-4 sm:static
                sm:h-auto sm:border-0 sm-bg-transparent">
                    <Sheet>
                        <SheetTrigger>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h5"/ >
                                <span className="sr-only"> Abrir || fechar</span>
                            </Button>
                        </SheetTrigger>
                        
                        <SheetContent side="left" className="sm-max-w-x">
                            <nav className="grid gap-6 text-lg font-medium">   
                                <Link href="#"
                                className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2 "
                                >
                                    <Package className="h-5 w-5 transition-all"/>
                                    <span className="sr-only">Logo do projeto</span>
                                </Link>

                                <Link href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Home className="h-5 w-5 transition-all"/>
                                    Inicio
                                </Link>


                                <Link href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Landmark className="h-5 w-5 transition-all"/>
                                    Gerenciar
                                </Link>

                                <Link href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Calendar className="h-5 w-5 transition-all"/>
                                    Gastos Mensais
                                </Link>
                                <Link href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <History className="h-5 w-5 transition-all"/>
                                    Historico
                                </Link>
                            </nav>
                        </SheetContent>

                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}