import { Component } from "@/components/grafico/grafico2";
import Historico from "@/components/historico/historico";
import TabelaCategoria from "@/components/tabelaCategorias/tabelaCategoria";
import TabelaGastos from "@/components/tabelaGastos/tabelaGastos";

export default function Dashboard() {
  return (
    <main className="sm:ml-14 p-4">
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <div className="bg-white rounded-xl p-4 shadow-sm flex-1">
            <h2 className="text-lg font-semibold mb-3 text-blue-600">
              Evolução Mensal
            </h2>
            <div className="h-[400px] bg-gray-50 rounded-lg flex gap-2">
                <Component/>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 h-full">
            <div className="bg-white rounded-xl p-4 shadow-sm h-full">
              <h2 className="text-lg font-semibold mb-3 text-emerald-600">
                Histórico
              </h2>
              <div className="h-[300px] overflow-y-auto">
                <Historico />
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm h-full">
              <h2 className="text-lg font-semibold mb-3 text-rose-600">
                Tabela de Gastos
              </h2>
              <div className="h-[300px] overflow-y-auto">
                <TabelaGastos />
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-96 flex flex-col gap-6">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-3 text-purple-600 ml-1">
              Análise por Categoria
            </h2>
            <div className="h-[350px] rounded-lg p-4 overflow-y-auto">
              <TabelaCategoria />
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-3 text-amber-600">
              Gastos Recentes
            </h2>
            <div className="space-y-2 h-[300px] overflow-y-auto">
              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                <span className="text-sm">Alimentação</span>
                <span className="text-sm font-medium text-rose-600">
                  R$ -100,00
                </span>
              </div>

              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                <span className="text-sm">Roupas</span>
                <span className="text-sm font-medium text-rose-600">
                  R$ -450,00
                </span>
              </div>

              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                <span className="text-sm">Feira</span>
                <span className="text-sm font-medium text-rose-600">
                  R$ -600,00
                </span>
              </div>

              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                <span className="text-sm">ifood</span>
                <span className="text-sm font-medium text-rose-600">
                  R$ -300,00
                </span>
              </div>

              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                <span className="text-sm">Uber</span>
                <span className="text-sm font-medium text-rose-600">
                  R$ -100,00
                </span>
              </div>

              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                <span className="text-sm">Steam</span>
                <span className="text-sm font-medium text-rose-600">
                  R$ -30,00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
