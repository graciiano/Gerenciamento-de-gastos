'use client'

import useFetch from '@/hooks/useFetch';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function ConversorDeMoedasApi() {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('BRL');
  const [toCurrency, setToCurrency] = useState<string>('USD');
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  const { data, loading, error } = useFetch<{ conversion_rates: { [key: string]: number } }>(
    `https://v6.exchangerate-api.com/v6/a265dc811a2eb796253d9007/latest/${fromCurrency}`
  );

  const handleConvert = () => {
    if (data && data.conversion_rates[toCurrency]) {
      const rate = data.conversion_rates[toCurrency];
      setConvertedAmount(amount * rate);
    }
  };

  if (loading) return (
    <div className="max-w-md mx-auto mt-8">
      <Skeleton className="h-[40px] w-[200px] mb-4" />
      <div className="space-y-4">
        <Skeleton className="h-[56px]" />
        <Skeleton className="h-[56px]" />
        <Skeleton className="h-[56px]" />
        <Skeleton className="h-[40px] w-[100px]" />
      </div>
    </div>
  );

  if (error) return (
    <Card className="max-w-md mx-auto mt-8">
      <CardContent className="mt-4 text-destructive">
        Erro ao buscar dados: {error}
      </CardContent>
    </Card>
  );

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Conversor de Moedas</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount">Valor</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>De</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD - Dólar Americano</SelectItem>
                <SelectItem value="EUR">EUR - Euro</SelectItem>
                <SelectItem value="BRL">BRL - Real Brasileiro</SelectItem>
                <SelectItem value="GBP">GBP - Libra Esterlina</SelectItem>
                <SelectItem value="JPY">JPY - Iene Japonês</SelectItem>
                <SelectItem value="AUD">AUD - Dólar Australiano</SelectItem>
                <SelectItem value="CAD">CAD - Dólar Canadense</SelectItem>
                <SelectItem value="CHF">CHF - Franco Suíço</SelectItem>
                <SelectItem value="CNY">CNY - Yuan Chinês</SelectItem>
                <SelectItem value="ARS">ARS - Peso Argentino</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Para</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD - Dólar Americano</SelectItem>
                <SelectItem value="EUR">EUR - Euro</SelectItem>
                <SelectItem value="BRL">BRL - Real Brasileiro</SelectItem>
                <SelectItem value="GBP">GBP - Libra Esterlina</SelectItem>
                <SelectItem value="JPY">JPY - Iene Japonês</SelectItem>
                <SelectItem value="AUD">AUD - Dólar Australiano</SelectItem>
                <SelectItem value="CAD">CAD - Dólar Canadense</SelectItem>
                <SelectItem value="CHF">CHF - Franco Suíço</SelectItem>
                <SelectItem value="CNY">CNY - Yuan Chinês</SelectItem>
                <SelectItem value="ARS">ARS - Peso Argentino</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full" onClick={handleConvert}>
          Converter
        </Button>

        {convertedAmount !== null && (
          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <p className="text-lg font-medium text-center">
                {amount.toFixed(2)} {fromCurrency} = {" "}
                <span className="text-primary">
                  {convertedAmount.toFixed(2)} {toCurrency}
                </span>
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
