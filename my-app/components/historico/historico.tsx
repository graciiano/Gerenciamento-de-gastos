"use client";

import { useState } from "react";
import { History } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
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

export default function Historico() {
  const [items, setItems] = useState([
    {
      id: 1,
      data: "21/01",
      local: "Supermercado",
      descricao: "Feira do mês",
      valor: 550.0,
    },
    {
      id: 2,
      data: "17/01",
      local: "Nubank",
      descricao: "Fatura do cartão",
      valor: 150.0,
    },
    {
      id: 3,
      data: "12/01",
      local: "Digna",
      descricao: "Plano de saúde",
      valor: 350.0,
    },
    {
      id: 4,
      data: "11/01",
      local: "TV",
      descricao: "Streaming",
      valor: 30.0,
    },
  ]);

  function apagar(id: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function editar(id: number) {
    const itemToEdit = items.find((item) => item.id === id);
    if (itemToEdit) {
      const novoValor = prompt(
        "Digite o novo valor:",
        itemToEdit.valor.toString()
      );
      if (novoValor !== null) {
        const atualizaItens = [...items];
        for (let i = 0; i < atualizaItens.length; i++) {
          if (atualizaItens[i].id === id) {
            atualizaItens[i] = {
              ...atualizaItens[i],
              valor: parseFloat(novoValor),
            };
            break;
          }
        }
        setItems(atualizaItens);
      }
    }
  }

  function totalGastos(): number {
    let soma = 0;
    for (let i = 0; i < items.length; i++) {
      soma += items[i].valor;
    }
    return soma;
  }

  return (
    <Card className="w-full md:w-1/2 md:max-w-[700px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg sm:text-xl text-gray-700">
            Histórico
          </CardTitle>
          <History className="w-5 h-5 text-gray-500" />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Prévia do histórico de gastos.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Data</TableHead>
              <TableHead>Local</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.data}</TableCell>
                <TableCell>{item.local}</TableCell>
                <TableCell>{item.descricao}</TableCell>
                <TableCell className="text-right">
                  R$ {item.valor.toFixed(2).replace(".", ",")}
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => editar(item.id)}
                    size="sm"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => apagar(item.id)}
                  >
                    Remover
                  </Button>
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
