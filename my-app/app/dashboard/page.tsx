// app/dashboard/page.tsx
import Grafico from "@/components/grafico/grafico";
import Historico from "@/components/historico/historico";
import Perfil from "@/components/perfil/perfil";
import TabelaGastos from "@/components/tabelaGastos/tabelaGastos";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, LucideVerified, PercentDiamond, X } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="sm:ml-14 p-4 bg-muted">
      <section className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <div className="xl:col-span-1">
          <Perfil />
        </div>
        <div className="xl:col-span-3 grid grid-cols-2 gap-4 md:grid-cols- md:max-h-[500px] ">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                  Total gastos
                </CardTitle>
                <DollarSign className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>Total de gastos em 15 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 250.00</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                  Contas pendentes
                </CardTitle>
                <X className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>
                Total de contas a ser pagas este mês
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">6</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                  Contas pagas
                </CardTitle>
                <LucideVerified className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>Total de contas pagas este mês</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">14</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">
                  Estimativa de gastos futuros
                </CardTitle>
                <PercentDiamond className="ml-auto w-4 h-4" />
              </div>
              <CardDescription>
                Estimativa de gastos para os próximos 15 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 760</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="mt-4 flex flex-col xl:flex-row gap-4 justify-center md:flex-nowrap md:justify-center ">
        <Grafico />
        <TabelaGastos />
        <Historico />
      </section>
    </main>
  );
}
