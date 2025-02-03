import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Clock, Utensils, ShoppingCart, Home, Plus, List, DollarSign, PawPrint, Banknote } from "lucide-react";

export default function Gerenciamento() {
  return (
    <main className="sm:ml-14 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  sm:grid-cols-1">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Resumo Financeiro
        </h2>
        <DollarSign className="w-5 h-5 text-gray-800" />

        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Gasto Total
            </span>
            <span className="font-bold text-red-600 dark:text-red-400">
              R$ 4.520,00
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Orçamento Mensal
            </span>
            <span className="font-bold text-blue-600 dark:text-blue-400">
              R$ 6.000,00
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Saldo Restante
            </span>
            <span className="font-bold text-green-600 dark:text-green-400">
              R$ 1.480,00
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          Gastos por Categoria
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-orange-500" />
              <span className="text-gray-600 dark:text-gray-300">
                Alimentação
              </span>
            </div>
            <span className="font-bold text-orange-600 dark:text-orange-400">
              R$ 1.200,00
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-purple-500" />
              <span className="text-gray-600 dark:text-gray-300">Compras</span>
            </div>
            <span className="font-bold text-purple-600 dark:text-purple-400">
              R$ 980,00
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-300">Moradia</span>
            </div>
            <span className="font-bold text-blue-600 dark:text-blue-400">
              R$ 2.340,00
            </span>
          </div>

            <Button className="w-full p-3 transition-colors gap-2">
                <List className="w-4 h-4" />
                <span className="text-sm font-medium">Ver Todas as Categorias</span>
            </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          Ações Rápidas
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Button className="p-3 transition-colors gap-2">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium ">Nova Despesa</span>
          </Button>
          <Button className="p-3 transition-colors gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Filtrar por Data</span>
          </Button>
          <Button className="p-3 transition-colors gap-2">
            <span className="text-sm font-medium">Gerar Relatório</span>
          </Button>
          <Button className="p-3 transition-colors gap-2">
            <span className="text-sm font-medium">Exportar Dados</span>
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow col-span-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Transações Recentes
          </h2>
          <Select>
            <SelectTrigger className="w-[50px] mb-1">
              <List className="h-10 w-10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todas">Todas</SelectItem>
              <SelectItem value="Casa">Casa</SelectItem>
              <SelectItem value="alimentacao">Alimentação</SelectItem>
              <SelectItem value="Compras Online">Compras Online</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 dark:text-gray-300 border-b">
                <th className="pb-3">Data</th>
                <th className="pb-3">Descrição</th>
                <th className="pb-3">Categoria</th>
                <th className="pb-3">Valor</th>
                <th className="pb-3">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="py-3">15/05/2025</td>
                <td>Supermercado</td>
                <td>
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-purple-500" />
                    Compras
                  </div>
                </td>
                <td className="text-red-500">- R$ 250,00</td>
                <td>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      Editar
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-500">
                      Excluir
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="py-3">14/05/2025</td>
                <td>Restaurante</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-orange-500" />
                    Alimentação
                  </div>
                </td>
                <td className="text-red-500">- R$ 85,00</td>
                <td>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      Editar
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-500">
                      Excluir
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="py-3">13/05/2024</td>
                <td>Salário</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-blue-500" />
                    Renda
                  </div>
                </td>
                <td className="text-green-500">+ R$ 4.500,00</td>
                <td>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      Editar
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-500">
                      Excluir
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="py-3">13/05/2024</td>
                <td>Fatura</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-blue-500" />
                    Cartão de Crédito
                  </div>
                </td>
                <td className="text-red-500">- R$ 2.500,00</td>
                <td>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      Editar
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-500">
                      Excluir
                    </Button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="py-3">13/05/2024</td>
                <td>Aposta</td>
                <td>
                  <div className="flex items-center gap-2">
                    <PawPrint className="w-4 h-4 text-green-500" />
                    Tigrinho
                  </div>
                </td>
                <td className="text-green-500">+ R$ 1.500,00</td>
                <td>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      Editar
                    </Button>
                    <Button size="sm" variant="ghost" className="text-red-500">
                      Excluir
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
