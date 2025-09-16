import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/ui/kpi-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, Users, TrendingUp, DollarSign, Download } from "lucide-react";

export default function Dashboard() {
  const actions = (
    <div className="flex items-center space-x-3">
      <Input
        type="date"
        placeholder="Data início"
        className="ec-input w-36"
      />
      <Input
        type="date"
        placeholder="Data fim"
        className="ec-input w-36"
      />
      <Button variant="outline" className="ec-btn soft">
        <Download className="w-4 h-4 mr-2" />
        Exportar Relatório
      </Button>
    </div>
  );

  return (
    <DashboardLayout title="Dashboard Geral" actions={actions}>
      <div className="space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Meta de Reciclagem"
            value="78%"
            subtitle="Progresso mensal"
            icon={<TrendingUp className="w-6 h-6" />}
            trend={{ value: 12, isPositive: true }}
          />
          <KPICard
            title="Leituras (mês)"
            value="1,247"
            subtitle="NFCe processadas"
            icon={<BarChart3 className="w-6 h-6" />}
            trend={{ value: 8, isPositive: true }}
          />
          <KPICard
            title="Pontos (mês)"
            value="45,230"
            subtitle="Distribuídos"
            icon={<Users className="w-6 h-6" />}
            trend={{ value: 15, isPositive: true }}
          />
          <KPICard
            title="Cashback (mês)"
            value="R$ 8,450"
            subtitle="Remuneração"
            icon={<DollarSign className="w-6 h-6" />}
            trend={{ value: 5, isPositive: true }}
          />
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="ec-card">
            <h3 className="ec-h3 mb-4">Usuários por Mês</h3>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="ec-empty">
                <BarChart3 className="w-12 h-12 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Gráfico em desenvolvimento</p>
              </div>
            </div>
          </div>
          
          <div className="ec-card">
            <h3 className="ec-h3 mb-4">Distribuição por Categoria</h3>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="ec-empty">
                <BarChart3 className="w-12 h-12 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Gráfico em desenvolvimento</p>
              </div>
            </div>
          </div>
          
          <div className="ec-card">
            <h3 className="ec-h3 mb-4">Crescimento de Usuários</h3>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="ec-empty">
                <TrendingUp className="w-12 h-12 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Gráfico em desenvolvimento</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parceiros em Destaque */}
        <div className="ec-card">
          <h3 className="ec-h3 mb-4">Parceiros em Destaque</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "EcoMarket", cupons: 12 },
              { name: "GreenShop", cupons: 8 },
              { name: "NaturalLife", cupons: 15 },
              { name: "BioStore", cupons: 6 },
            ].map((parceiro) => (
              <div key={parceiro.name} className="p-4 border border-border rounded-lg">
                <div className="w-12 h-12 bg-ec-primary/10 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-ec-primary font-bold text-lg">
                    {parceiro.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-medium mb-1">{parceiro.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {parceiro.cupons} cupons ativos
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}