import { useMemo } from 'react';

export function useChartData() {
  const monthlyUsers = useMemo(() => [
    { month: 'Jan', users: 1200 },
    { month: 'Fev', users: 1450 },
    { month: 'Mar', users: 1680 },
    { month: 'Abr', users: 1920 },
    { month: 'Mai', users: 2150 },
    { month: 'Jun', users: 2380 },
    { month: 'Jul', users: 2650 },
    { month: 'Ago', users: 2847 },
    { month: 'Set', users: 3120 },
    { month: 'Out', users: 3450 },
    { month: 'Nov', users: 3780 },
    { month: 'Dez', users: 4100 },
  ], []);

  const categoryDistribution = useMemo(() => [
    { category: 'Alimentícios', count: 1280, trend: 45 },
    { category: 'Eletrônicos', count: 890, trend: 25 },
    { category: 'Roupas', count: 670, trend: 18 },
    { category: 'Casa & Jardim', count: 450, trend: 12 },
    { category: 'Outros', count: 320, trend: 8 },
  ], []);

  const userGrowth = useMemo(() => [
    { month: 'Jan', newUsers: 156, totalActive: 1100 },
    { month: 'Fev', newUsers: 189, totalActive: 1250 },
    { month: 'Mar', newUsers: 167, totalActive: 1380 },
    { month: 'Abr', newUsers: 203, totalActive: 1520 },
    { month: 'Mai', newUsers: 245, totalActive: 1680 },
    { month: 'Jun', newUsers: 198, totalActive: 1850 },
    { month: 'Jul', newUsers: 234, totalActive: 2020 },
    { month: 'Ago', newUsers: 267, totalActive: 2180 },
  ], []);

  const hourlyActivity = useMemo(() => [
    { hour: '00h', users: 234, isPeak: false },
    { hour: '02h', users: 156, isPeak: false },
    { hour: '04h', users: 89, isPeak: false },
    { hour: '06h', users: 287, isPeak: false },
    { hour: '08h', users: 945, isPeak: false },
    { hour: '10h', users: 1420, isPeak: true },
    { hour: '12h', users: 1680, isPeak: true },
    { hour: '14h', users: 1890, isPeak: true },
    { hour: '16h', users: 1340, isPeak: false },
    { hour: '18h', users: 1560, isPeak: true },
    { hour: '20h', users: 1230, isPeak: false },
    { hour: '22h', users: 890, isPeak: false },
  ], []);

  const brazilianRegionsData = useMemo(() => [
    { 
      region: 'Sudeste', 
      'São Paulo': 1247, 
      'Rio de Janeiro': 892, 
      'Minas Gerais': 634, 
      'Espírito Santo': 198 
    },
    { 
      region: 'Sul', 
      'Rio Grande do Sul': 456, 
      'Santa Catarina': 378, 
      'Paraná': 512 
    },
    { 
      region: 'Nordeste', 
      'Bahia': 423, 
      'Pernambuco': 345, 
      'Ceará': 289, 
      'Outros': 267 
    },
    { 
      region: 'Norte', 
      'Amazonas': 178, 
      'Pará': 156, 
      'Outros': 98 
    },
    { 
      region: 'Centro-Oeste', 
      'Goiás': 234, 
      'Mato Grosso': 145, 
      'Brasília': 189, 
      'Mato Grosso do Sul': 87 
    },
  ], []);

  return {
    monthlyUsers,
    categoryDistribution,
    userGrowth,
    hourlyActivity,
    brazilianRegionsData,
  };
}