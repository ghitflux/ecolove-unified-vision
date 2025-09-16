import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useChartData } from '@/hooks/useChartData';

export function WaveChart() {
  const { monthlyUsers } = useChartData();

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={monthlyUsers} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--ec-primary))" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="hsl(var(--ec-primary))" stopOpacity={0.05}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
        <XAxis 
          dataKey="month" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
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
        <Area
          type="monotone"
          dataKey="users"
          stroke="hsl(var(--ec-primary))"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#waveGradient)"
          animationDuration={1500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}