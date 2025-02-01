import {DollarSign} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";



export default function TabelaGastos() {
  return (
    <Card className=" w-full md:w-1/2 md:max-w-[700px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-700">
            Gastos mais recentes
          </CardTitle>
          <DollarSign className="ml-auto w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>Lista de pagamentos recentes.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Fatura</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Metodo</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead className="text-right">Ações</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">21/01</TableCell>
              <TableCell>Pago</TableCell>
              <TableCell>Cartão de credito</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right"><Button>Editar</Button></TableCell>
              <TableCell className="text-right"><Button className="bg-red-600">Remover</Button></TableCell>


            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}