import Grafico from "@/components/grafico/grafico";
import TabelaGastos from "@/components/tabelaGastos/tabelaGastos";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PercentDiamond } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2  lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className=" flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none"  >
                Total gastos
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total de gastos em 15 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
              <p className="text-base sm:text-lg font-bold">R$ 250.00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className=" flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none"  >
                Contas Pendentes
              </CardTitle>
              <PercentDiamond className="ml-auto w-4 h-4"/>
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
            <div className=" flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none"  >
                Contas Pendentes
              </CardTitle>
              <PercentDiamond className="ml-auto w-4 h-4"/>
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
            <div className=" flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none"  >
                Contas Pendentes
              </CardTitle>
              <PercentDiamond className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total de contas a ser pagas este mês
            </CardDescription>
          </CardHeader>
          <CardContent>
              <p className="text-base sm:text-lg font-bold">6</p>
          </CardContent>
        </Card>
      </section>
      <section className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
        <Grafico/>
        <TabelaGastos/>
        <TabelaGastos/>

      </section>
    </main>
  );
}
