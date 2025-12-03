import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  List,
  Check,
  CircleMinus,
  SquarePen,
  Trash,
  ListCheck,
} from "lucide-react";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-200 flex justify-center-safe items-center-safe">
      <Card className="w-xl ">
        <CardHeader>
          <CardTitle>Minhas Tarefas</CardTitle>
          <CardDescription>
            Gerencie suas tarefas diárias de forma eficiente
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className=" flex gap-4">
            <Input placeholder="Adicionar Tarefa"></Input>
            <Button className="cursor-pointer">
              <Plus />
              Cadastrar
            </Button>
          </div>

          <Separator className="my-4" />

          <div className="gap-2 flex">
            <Badge className="cursor-pointer" variant="default">
              <List /> Todas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              {" "}
              <CircleMinus /> Não Finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check />
              Concluídas
            </Badge>
          </div>

          <div className="mt-4 border-b-1">
            <div className="h-14 flex justify-between items-center border-t-1">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm"> Estudar</p>

              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger asChild> 
                    <SquarePen size={16} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>

                    <div className="flex gap-2">
                      <Input placeholder="Editar tarefa"></Input>
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Trash size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center mt-4">
              <ListCheck size={18} />
              <p className="text-sm"> Tarefas Concluísas (3/3)</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="mt-2 text-xs h-7 cursor-pointer"
                  variant="outline">
                  <Trash />
                  Limpar Tarefas Concluídas
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja excluir x itens?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction>Continuar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div
              className="h-full bg-green-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-end mt-2 items-center gap-2">
            <p className="text-xs text-gray-500 mt-1"> Total: 3 Tarefas</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;
