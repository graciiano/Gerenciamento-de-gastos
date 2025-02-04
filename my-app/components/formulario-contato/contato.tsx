import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

export default function ContatoCard() {
  return (
    <div className="flex justify-center p-8">
      <Card className=" w-full max-w-lg shadow-lg rounded-lg border border-gray-200">
        <CardTitle className=" mt-4 text-xl font-semibold text-center">Contate-nos</CardTitle>
        <CardContent>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-600">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-600">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Seu e-mail"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-600">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Sua mensagem"
                required
              />
            </div>
            <div className="flex justify-center">
                <Button className="w-full">
                    Enviar
                </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
