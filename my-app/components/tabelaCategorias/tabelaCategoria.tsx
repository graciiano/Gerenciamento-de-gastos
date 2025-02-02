"use client";

import { DollarSign, List } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";

export default function TabelaCategoria() {
  const [gastos, setGastosOriginais] = useState([
    { id: 1, data: "21/01", categoria: "Alimentacao", valor: 250.0 },
    { id: 2, data: "21/01", categoria: "Alimentacao", valor: 250.0 },
    { id: 3, data: "22/01", categoria: "Casa", valor: 500.0 },
    { id: 4, data: "23/01", categoria: "Compras Online", valor: 300.0 },
  ]);

  const [gastosFiltrados, setGastosFiltrados] = useState(gastos);

  const [categoria, setCategoria] = useState("");

function filtrarCategoria(value: string) {
    setCategoria(value);

    if (value === "todas") {
        setGastosFiltrados(gastos);
    } else {
        const gastosFiltrados = gastos.filter(
            (gasto) => gasto.categoria.toLowerCase() === value.toLowerCase()
        );
        setGastosFiltrados(gastosFiltrados);
    }
}

function totalGastosFiltrados(): number {
    let soma = 0;
    for (let i = 0; i < gastosFiltrados.length; i++) {
        soma += gastosFiltrados[i].valor;
    }
    return soma;
}


  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="font-medium">
            Total de gastos: R$ {totalGastosFiltrados().toFixed(2).replace(".", ",")}
          </div>
          <DollarSign className="w-5 h-5 text-gray-500" />
        </div>
      </CardHeader>
      <CardContent>
        <Select onValueChange={filtrarCategoria} value={categoria}>
          <SelectTrigger className="w-[50px] mb-1">
            <List className="h-4 w-4" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas</SelectItem>
            <SelectItem value="Casa">Casa</SelectItem>
            <SelectItem value="alimentacao">Alimentação</SelectItem>
            <SelectItem value="Compras Online">Compras Online</SelectItem>
          </SelectContent>
        </Select>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Categorias</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gastosFiltrados.map((gasto) => (
              <TableRow key={gasto.id}>
                <TableCell className="font-medium">{gasto.data}</TableCell>
                <TableCell>{gasto.categoria}</TableCell>
                <TableCell className="text-right">
                  R$ {gasto.valor.toFixed(2).replace(".", ",")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
