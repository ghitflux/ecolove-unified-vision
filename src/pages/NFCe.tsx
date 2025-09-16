import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FileText, Eye, Award, CheckCircle, Download } from "lucide-react";
import { toast } from "sonner";

export default function NFCePage() {
  const [selectedNota, setSelectedNota] = useState<any>(null);

  const notas = [
    {
      id: 1,
      chave: "35240114200166000107550010000000111",
      chaveFormatted: "3524 0114 2001 6600 0107 5501 0000 0001 1",
      itens: 3,
      total: "R$ 125,45",
      status: "success" as const,
      items: [
        { descricao: "Produto Orgânico A", qtd: 2, unitario: "R$ 25,00", subtotal: "R$ 50,00" },
        { descricao: "Produto Sustentável B", qtd: 1, unitario: "R$ 35,45", subtotal: "R$ 35,45" },
        { descricao: "Item Ecológico C", qtd: 3, unitario: "R$ 13,33", subtotal: "R$ 40,00" },
      ],
    },
    {
      id: 2,
      chave: "35240114200166000107550010000000222",
      chaveFormatted: "3524 0114 2001 6600 0107 5501 0000 0002 2",
      itens: 2,
      total: "R$ 89,90",
      status: "warning" as const,
      items: [
        { descricao: "Produto Verde X", qtd: 1, unitario: "R$ 45,90", subtotal: "R$ 45,90" },
        { descricao: "Item Sustentável Y", qtd: 2, unitario: "R$ 22,00", subtotal: "R$ 44,00" },
      ],
    },
    {
      id: 3,
      chave: "35240114200166000107550010000000333",
      chaveFormatted: "3524 0114 2001 6600 0107 5501 0000 0003 3",
      itens: 5,
      total: "R$ 234,70",
      status: "danger" as const,
      items: [
        { descricao: "Produto A", qtd: 2, unitario: "R$ 50,00", subtotal: "R$ 100,00" },
        { descricao: "Produto B", qtd: 1, unitario: "R$ 75,70", subtotal: "R$ 75,70" },
        { descricao: "Produto C", qtd: 2, unitario: "R$ 29,50", subtotal: "R$ 59,00" },
      ],
    },
  ];

  const handleAction = (action: string, notaId: number) => {
    switch (action) {
      case "pontos":
        toast.success("Pontos atribuídos com sucesso!");
        break;
      case "revisar":
        toast.success("Nota marcada como revisada!");
        break;
      case "download":
        toast.info("Download iniciado!");
        break;
    }
  };

  return (
    <DashboardLayout title="NFCe">
      <div className="space-y-6">
        {/* Observação */}
        <div className="bg-muted/50 border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            <FileText className="w-4 h-4 inline mr-2" />
            Mostrando até 100 notas fiscais mais recentes. Use os filtros para refinar os resultados.
          </p>
        </div>

        {/* Tabela Principal */}
        <div className="ec-card">
          <div className="overflow-x-auto">
            <table className="ec-table">
              <thead>
                <tr>
                  <th scope="col">Chave NFCe</th>
                  <th scope="col">Itens</th>
                  <th scope="col">Total</th>
                  <th scope="col">Status</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {notas.map((nota) => (
                  <tr key={nota.id}>
                    <td>
                      <span className="font-mono text-sm">{nota.chaveFormatted}</span>
                    </td>
                    <td>{nota.itens}</td>
                    <td className="font-medium">{nota.total}</td>
                    <td>
                      <Badge variant={nota.status}>
                        {nota.status === "success" ? "Validada" : 
                         nota.status === "warning" ? "Aguardando" : "Rejeitada"}
                      </Badge>
                    </td>
                    <td>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSelectedNota(nota)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Ver itens
                          </Button>
                        </SheetTrigger>
                        <SheetContent className="w-[420px] sm:w-[540px]">
                          <SheetHeader>
                            <SheetTitle>Detalhes da NFCe</SheetTitle>
                          </SheetHeader>
                          
                          {selectedNota && (
                            <div className="space-y-6 py-4">
                              {/* Cabeçalho */}
                              <div className="space-y-2">
                                <h4 className="font-medium">Chave de Acesso</h4>
                                <p className="font-mono text-sm bg-muted p-2 rounded">
                                  {selectedNota.chave}
                                </p>
                              </div>

                              {/* Lista de Itens */}
                              <div className="space-y-3">
                                <h4 className="font-medium">Itens da Nota</h4>
                                <div className="space-y-2">
                                  {selectedNota.items.map((item: any, index: number) => (
                                    <div key={index} className="p-3 border border-border rounded-lg">
                                      <div className="flex justify-between items-start mb-2">
                                        <h5 className="font-medium text-sm">{item.descricao}</h5>
                                        <span className="font-medium">{item.subtotal}</span>
                                      </div>
                                      <div className="flex justify-between text-sm text-muted-foreground">
                                        <span>Qtd: {item.qtd}</span>
                                        <span>Unit: {item.unitario}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Total */}
                              <div className="border-t pt-4">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium">Total Geral</span>
                                  <span className="text-lg font-bold">{selectedNota.total}</span>
                                </div>
                              </div>

                              {/* Ações */}
                              <div className="space-y-3 border-t pt-4">
                                <h4 className="font-medium">Ações</h4>
                                <div className="grid grid-cols-1 gap-2">
                                  <Button
                                    onClick={() => handleAction("pontos", selectedNota.id)}
                                    className="ec-btn primary justify-start"
                                  >
                                    <Award className="w-4 h-4 mr-2" />
                                    Atribuir Pontos
                                  </Button>
                                  <Button
                                    onClick={() => handleAction("revisar", selectedNota.id)}
                                    className="ec-btn soft justify-start"
                                  >
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Marcar como Revisada
                                  </Button>
                                  <Button
                                    onClick={() => handleAction("download", selectedNota.id)}
                                    className="ec-btn ghost justify-start"
                                  >
                                    <Download className="w-4 h-4 mr-2" />
                                    Baixar XML/PDF
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </SheetContent>
                      </Sheet>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}