import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useChartData } from '@/hooks/useChartData';

export function TrendColumnChart() {
  const { categoryDistribution } = useChartData();

  return (
    <ResponsiveContainer width="100%" height={280}>
      <ComposedChart data={categoryDistribution} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
        <XAxis 
          dataKey="category" 
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
        />
        <Bar 
          dataKey="count" 
          fill="hsl(var(--ec-primary))" 
          opacity={0.8}
          radius={[4, 4, 0, 0]}
        />
        <Line 
          type="monotone" 
          dataKey="trend" 
          stroke="hsl(var(--ec-warning))"
          strokeWidth={3}
          strokeDasharray="5 5"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}