import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/ui/kpi-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift, Plus, Download, Search, Star, Package, Users, Percent } from "lucide-react";
import { toast } from "sonner";

export default function Cupons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const actions = (
    <div className="flex items-center space-x-3">
      <Button onClick={() => setIsModalOpen(true)} className="ec-btn primary">
        <Plus className="w-4 h-4 mr-2" />
        Novo Cupom
      </Button>
      <Button variant="outline" className="ec-btn soft">
        <Download className="w-4 h-4 mr-2" />
        Exportar
      </Button>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar cupons..."
          className="ec-input pl-10 w-64"
        />
      </div>
      <Select>
        <SelectTrigger className="ec-select w-40">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nome">Nome</SelectItem>
          <SelectItem value="pontos">Pontos</SelectItem>
          <SelectItem value="desconto">Desconto</SelectItem>
          <SelectItem value="data">Data</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );

  const cupons = [
    {
      id: 1,
      parceiro: "EcoMarket",
      descricao: "10% de desconto em produtos orgânicos",
      categoria: "Alimentação",
      pontos: 500,
      desconto: "10%",
      status: "success" as const,
    },
    {
      id: 2,
      parceiro: "GreenShop",
      descricao: "R$ 20 off em compras acima de R$ 100",
      categoria: "Vestuário",
      pontos: 800,
      desconto: "R$ 20",
      status: "warning" as const,
    },
    {
      id: 3,
      parceiro: "NaturalLife",
      descricao: "Frete grátis + 15% desconto",
      categoria: "Cosméticos",
      pontos: 1200,
      desconto: "15%",
      status: "success" as const,
    },
    {
      id: 4,
      parceiro: "BioStore",
      descricao: "Cashback de 25% em produtos selecionados",
      categoria: "Casa e Jardim",
      pontos: 1500,
      desconto: "25%",
      status: "danger" as const,
    },
  ];

  const categorias = ["Todas", "Alimentação", "Vestuário", "Cosméticos", "Casa e Jardim"];

  const handleSaveCupom = () => {
    toast.success("Cupom salvo com sucesso!");
    setIsModalOpen(false);
  };

  return (
    <DashboardLayout title="Gerenciamento de Cupons" actions={actions}>
      <div className="space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total de Cupons"
            value="87"
            subtitle="Ativos e inativos"
            icon={<Gift className="w-6 h-6" />}
          />
          <KPICard
            title="Pontos (média)"
            value="1,025"
            subtitle="Por cupom"
            icon={<Star className="w-6 h-6" />}
          />
          <KPICard
            title="Maior Desconto"
            value="50%"
            subtitle="Cupom premium"
            icon={<Percent className="w-6 h-6" />}
          />
          <KPICard
            title="Parceiros Únicos"
            value="24"
            subtitle="Ativos"
            icon={<Users className="w-6 h-6" />}
          />
        </div>

        {/* Filtros por categoria */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Categorias:</span>
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                categoria === "Todas"
                  ? "bg-ec-primary text-white border-ec-primary"
                  : "border-border hover:bg-muted"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Lista de cupons */}
        <div className="ec-card">
          <div className="overflow-x-auto">
            <table className="ec-table">
              <thead>
                <tr>
                  <th scope="col">Parceiro</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Pontos</th>
                  <th scope="col">Desconto</th>
                  <th scope="col">Status</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {cupons.map((cupom) => (
                  <tr key={cupom.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-ec-primary/10 rounded-lg flex items-center justify-center">
                          <Package className="w-4 h-4 text-ec-primary" />
                        </div>
                        <span className="font-medium">{cupom.parceiro}</span>
                      </div>
                    </td>
                    <td>{cupom.descricao}</td>
                    <td>{cupom.categoria}</td>
                    <td>{cupom.pontos.toLocaleString()}</td>
                    <td>{cupom.desconto}</td>
                    <td>
                      <Badge variant={cupom.status}>
                        {cupom.status === "success" ? "Ativo" : 
                         cupom.status === "warning" ? "Esgotado" : "Inativo"}
                      </Badge>
                    </td>
                    <td>
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Novo Cupom */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="ec-modal max-w-md">
            <DialogHeader>
              <DialogTitle>Novo Cupom</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Parceiro</label>
                <Input placeholder="Nome do parceiro" className="ec-input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Descrição</label>
                <Input placeholder="Descrição do cupom" className="ec-input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Categoria</label>
                <Select>
                  <SelectTrigger className="ec-select">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alimentacao">Alimentação</SelectItem>
                    <SelectItem value="vestuario">Vestuário</SelectItem>
                    <SelectItem value="cosmeticos">Cosméticos</SelectItem>
                    <SelectItem value="casa">Casa e Jardim</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Pontos</label>
                  <Input type="number" placeholder="0" className="ec-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Desconto</label>
                  <Input placeholder="10%" className="ec-input" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  variant="ghost"
                  onClick={() => setIsModalOpen(false)}
                  className="ec-btn ghost"
                >
                  Cancelar
                </Button>
                <Button onClick={handleSaveCupom} className="ec-btn primary">
                  Salvar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}