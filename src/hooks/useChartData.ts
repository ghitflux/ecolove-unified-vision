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

  const activityData = useMemo(() => [
    { name: '24h', value: 92, fill: 'hsl(var(--ec-primary))' },
    { name: '7 dias', value: 78, fill: 'hsl(var(--ec-success))' },
    { name: '30 dias', value: 65, fill: 'hsl(var(--ec-info))' },
  ], []);

  const geographicData = useMemo(() => [
    { name: 'São Paulo', users: 1247, percentage: 34 },
    { name: 'Rio de Janeiro', users: 892, percentage: 24 },
    { name: 'Minas Gerais', users: 567, percentage: 15 },
    { name: 'Paraná', users: 423, percentage: 11 },
    { name: 'Bahia', users: 356, percentage: 10 },
    { name: 'Outros Estados', users: 234, percentage: 6 },
  ], []);

  return {
    monthlyUsers,
    categoryDistribution,
    userGrowth,
    activityData,
    geographicData,
  };
}