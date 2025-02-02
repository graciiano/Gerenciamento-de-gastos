"use client";

import { DollarSign } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { useState } from "react";

export default function TabelaGastos() {
  const [gastos, setGastos] = useState([
    {
      id: 1,
      data: "21/01",
      status: "Pago",
      metodo: "Cartão de crédito",
      valor: 250.0,
    },
    {
      id: 2,
      data: "20/01",
      status: "Pendente",
      metodo: "Boleto",
      valor: 150.0,
    },
    {
      id: 3,
      data: "19/01",
      status: "Atrasado",
      metodo: "PIX",
      valor: 350.0,
    },
    {
      id: 4,
      data: "18/01",
      status: "Pago",
      metodo: "Cartão de débito",
      valor: 30.0,
    },
  ]);

  function apagar(id: number) {
    setGastos((gastos) => gastos.filter((item) => item.id !== id));
  }

  function editar(id: number) {
    const itemToEdit = gastos.find((gasto) => gasto.id === id);
    if (itemToEdit) {
      const novoValor = prompt(
        "Digite o novo valor:",
        itemToEdit.valor.toString()
      );
      if (novoValor !== null) {
        const atualizaGastos = gastos.map((gasto) =>
          gasto.id === id ? { ...gasto, valor: parseFloat(novoValor) } : gasto
        );
        setGastos(atualizaGastos);
      }
    }
  }

  function totalGastos(): number {
    let soma = 0;
    for (let i = 0; i < gastos.length; i++) {
      soma += gastos[i].valor;
    }
    return soma;
  }

  return (
    <Card className="w-full md:w-1/2 md:max-w-[700px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg sm:text-xl text-gray-700">
            Gastos Recentes
          </CardTitle>
          <DollarSign className="w-5 h-5 text-gray-500" />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Últimas transações realizadas.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Método</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gastos.map((gasto) => (
              <TableRow key={gasto.id}>
                <TableCell className="font-medium">{gasto.data}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      gasto.status === "Pago"
                        ? "bg-green-100 text-green-800"
                        : gasto.status === "Pendente"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {gasto.status}
                  </span>
                </TableCell>
                <TableCell>{gasto.metodo}</TableCell>
                <TableCell className="text-right">
                  R$ {gasto.valor.toFixed(2).replace(".", ",")}
                </TableCell>
                <TableCell className="text-right space-x-2">
                <div className="flex lg:flex-row lg:space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => editar(gasto.id)}
                      size="sm"
                    >
                      Editar
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => apagar(gasto.id)}
                    >
                      Remover
                    </Button>
                    </div> 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CardFooter className="font-medium pt-3">
          Total de gastos: R$ {totalGastos().toFixed(2).replace(".", ",")}
        </CardFooter>
      </CardContent>
    </Card>
  );
}
