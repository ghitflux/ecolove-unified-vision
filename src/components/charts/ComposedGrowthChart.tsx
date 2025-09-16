import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useChartData } from '@/hooks/useChartData';

export function ComposedGrowthChart() {
  const { userGrowth } = useChartData();

  return (
    <ResponsiveContainer width="100%" height={280}>
      <ComposedChart data={userGrowth} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--ec-primary))" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="hsl(var(--ec-primary))" stopOpacity={0.3}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
        <XAxis 
          dataKey="month" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <YAxis 
          yAxisId="left"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <YAxis 
          yAxisId="right"
          orientation="right"
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
          yAxisId="left"
          dataKey="newUsers" 
          fill="url(#barGradient)"
          radius={[4, 4, 0, 0]}
          name="Novos Usuários"
        />
        <Line 
          yAxisId="right"
          type="monotone" 
          dataKey="totalActive" 
          stroke="hsl(var(--ec-info))"
          strokeWidth={3}
          name="Total Ativos"
          dot={{ fill: 'hsl(var(--ec-info))', strokeWidth: 2, r: 4 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}