import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/ui/kpi-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ChartCard } from "@/components/charts/ChartCard";
import { PulseActivityChart } from "@/components/charts/PulseActivityChart";
import { GeographicHeatMap } from "@/components/charts/GeographicHeatMap";
import { Users, UserPlus, TrendingUp, Activity, Search } from "lucide-react";

export default function UsuariosPage() {
  const [activeTab, setActiveTab] = useState("mes");

  const usuarios = [
    {
      id: 1,
      nome: "Ana Silva",
      email: "ana.silva@email.com",
      avatar: "AS",
      ultimoAcesso: "2024-01-15",
      status: "success" as const,
      pontos: 1250,
    },
    {
      id: 2,
      nome: "Carlos Santos",
      email: "carlos.santos@email.com",
      avatar: "CS",
      ultimoAcesso: "2024-01-10",
      status: "success" as const,
      pontos: 2340,
    },
    {
      id: 3,
      nome: "Mariana Costa",
      email: "mariana.costa@email.com",
      avatar: "MC",
      ultimoAcesso: "2023-12-20",
      status: "neutral" as const,
      pontos: 890,
    },
    {
      id: 4,
      nome: "João Oliveira",
      email: "joao.oliveira@email.com",
      avatar: "JO",
      ultimoAcesso: "2024-01-14",
      status: "success" as const,
      pontos: 3450,
    },
  ];

  const tabs = [
    { id: "hoje", label: "Hoje" },
    { id: "semana", label: "Semana" },
    { id: "mes", label: "Mês" },
  ];

  return (
    <DashboardLayout title="Usuários">
      <div className="space-y-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total de Usuários"
            value="2,847"
            subtitle="Cadastrados"
            icon={<Users className="w-6 h-6" />}
          />
          <KPICard
            title="Ativos (30d)"
            value="1,923"
            subtitle="67% do total"
            icon={<Activity className="w-6 h-6" />}
            trend={{ value: 12, isPositive: true }}
          />
          <KPICard
            title="Novos (30d)"
            value="156"
            subtitle="Registros"
            icon={<UserPlus className="w-6 h-6" />}
            trend={{ value: 8, isPositive: true }}
          />
          <KPICard
            title="Taxa de Crescimento"
            value="5.8%"
            subtitle="Mensal"
            icon={<TrendingUp className="w-6 h-6" />}
            trend={{ value: 2, isPositive: true }}
          />
        </div>

        {/* Tabs de período */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Período:</span>
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-ec-primary text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Atividade & Distribuição */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard
            title="Atividade de Usuários"
            statistic={{
              label: "Usuários ativos agora",
              value: "1,247 usuários ativos",
              trend: "Pico das 14h",
              isPositive: true
            }}
          >
            <PulseActivityChart />
          </ChartCard>
          
          <ChartCard
            title="Distribuição Geográfica"
            statistic={{
              label: "Concentração regional",
              value: "São Paulo concentra 34%",
              trend: "Sudeste domina",
              isPositive: true
            }}
          >
            <GeographicHeatMap />
          </ChartCard>
        </div>

        {/* Ranking de usuários */}
        <div className="ec-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="ec-h3">Usuários Mais Ativos</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome ou email..."
                className="ec-input pl-10 w-64"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="ec-table">
              <thead>
                <tr>
                  <th scope="col">Usuário</th>
                  <th scope="col">Email</th>
                  <th scope="col">Último Acesso</th>
                  <th scope="col">Pontos</th>
                  <th scope="col">Status</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-ec-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-ec-primary font-medium text-sm">
                            {usuario.avatar}
                          </span>
                        </div>
                        <span className="font-medium">{usuario.nome}</span>
                      </div>
                    </td>
                    <td>{usuario.email}</td>
                    <td>{new Date(usuario.ultimoAcesso).toLocaleDateString("pt-BR")}</td>
                    <td>{usuario.pontos.toLocaleString()} pts</td>
                    <td>
                      <Badge variant={usuario.status}>
                        {usuario.status === "success" ? "Ativo" : "Inativo"}
                      </Badge>
                    </td>
                    <td>
                      <button className="text-ec-primary hover:text-ec-primary/80 text-sm font-medium">
                        Ver perfil
                      </button>
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