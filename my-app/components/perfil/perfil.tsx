import { Calendar, Copy, FileText, Mail, Pencil } from "lucide-react";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";

export default function Perfil() {
  return (
    <Card className="w-full max-w-[600px] p-4 sm:p-6 border-2 border-black">
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src="/avatar.webp"
              alt="Foto do Diogo Graciano"
              className="object-cover rounded-full"
            />
            <AvatarFallback className="bg-blue-100 text-blue-800 text-2xl font-semibold">
              DG
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-4">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-2xl text-gray-900 truncate">
                  Diogo Graciano
                </CardTitle>
                <CardDescription className="mt-1 truncate">
                  Desenvolvedor Full Stack
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-2">
                <Pencil className="w-4 h-4" />
                Editar Perfil
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="truncate">diogograciiano@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Calendar className="w-4 h-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent
                      className="bg-secondary rounded-md p-1"
                      side="right"
                    >
                    <span className="truncate">Membro desde: 01/2025</span>
                    </TooltipContent>
                  </Tooltip>
                  <span className="truncate">Membro desde: 01/2025</span>
                  
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="border-t pt-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Saldo disponível
              </h3>
              <p className="text-3xl font-semibold text-gray-900 mt-1">
                R$ 45.230,50
              </p>
            </div>
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 mt-2 sm:mt-0"
            >
              Conta Corrente
            </Badge>
          </div>

        
        </div>
      </CardContent>
    </Card>
  );
}
