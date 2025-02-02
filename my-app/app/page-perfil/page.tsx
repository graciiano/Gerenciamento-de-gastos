import Perfil from "@/components/perfil/perfil";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, LucideVerified, PercentDiamond, X } from "lucide-react";

export default function PagePerfil() {
  return (
    <main className="sm:ml-14 p-4   mx-auto">
      <div className="mb-8">
        <Perfil />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-lg transition-shadow duration-300 group">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Gastos Recentes
              </CardTitle>
              <DollarSign className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
            </div>
            <CardDescription className="text-sm mt-1">
              Últimos 15 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-gray-900">R$ 250,00</p>
              <span className="text-sm text-muted-foreground">+2,5% vs período anterior</span>
            </div>
            <div className="mt-3 h-2 bg-gray-100 rounded-full">
              <div className="h-2 bg-emerald-600 rounded-full w-3/4" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300 group">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Pendências
              </CardTitle>
              <X className="w-5 h-5 text-rose-600 group-hover:text-rose-700 transition-colors" />
            </div>
            <CardDescription className="text-sm mt-1">
              Vencimento este mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-gray-900">6</p>
              <span className="text-sm text-muted-foreground">3 atrasadas</span>
            </div>
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-sm">
                <span>Vencimento mais próximo:</span>
                <span className="font-medium">15/07</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300 group">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Pagamentos
              </CardTitle>
              <LucideVerified className="w-5 h-5 text-sky-600 group-hover:text-sky-700 transition-colors" />
            </div>
            <CardDescription className="text-sm mt-1">
              Concluídos este mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-gray-900">14</p>
              <span className="text-sm text-muted-foreground">100% em dia</span>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="badge bg-green-100 text-green-800 p-2 rounded-full">Em dia</div>
              <div className="badge bg-blue-100 text-blue-800 p-2 rounded-full">Antecipados</div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300 group">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Previsão Financeira
              </CardTitle>
              <PercentDiamond className="w-5 h-5 text-amber-600 group-hover:text-amber-700 transition-colors" />
            </div>
            <CardDescription className="text-sm mt-1">
              Próximos 15 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-gray-900">R$ 760,00</p>
              <span className="text-sm text-muted-foreground">↘ 5% vs período anterior</span>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <div className="flex justify-between text-sm">
                <span>Despesas fixas:</span>
                <span className="font-medium">R$ 520,00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Despesas variáveis:</span>
                <span className="font-medium">R$ 240,00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}