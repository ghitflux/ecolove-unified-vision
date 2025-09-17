import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useChartData } from '@/hooks/useChartData';

export function GeographicHeatMap() {
  const { brazilianRegionsData } = useChartData();

  const colors = [
    'hsl(var(--ec-primary))',
    'hsl(var(--ec-secondary))', 
    'hsl(var(--ec-accent))',
    'hsl(var(--ec-warning))',
    'hsl(var(--ec-info))'
  ];

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={brazilianRegionsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
        <XAxis 
          dataKey="region" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          formatter={(value, name) => [`${value} usuários`, name]}
          labelFormatter={(label) => `Região ${label}`}
        />
        {brazilianRegionsData[0] && Object.keys(brazilianRegionsData[0])
          .filter(key => key !== 'region')
          .map((state, index) => (
            <Bar 
              key={state}
              dataKey={state} 
              stackId="states"
              fill={colors[index % colors.length]}
              radius={index === Object.keys(brazilianRegionsData[0]).filter(key => key !== 'region').length - 1 ? [4, 4, 0, 0] : [0, 0, 0, 0]}
            />
          ))
        }
      </BarChart>
    </ResponsiveContainer>
  );
}