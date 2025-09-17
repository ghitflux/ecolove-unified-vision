import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useChartData } from '@/hooks/useChartData';

export function PulseActivityChart() {
  const { hourlyActivity } = useChartData();

  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.isPeak) {
      return (
        <circle
          cx={cx}
          cy={cy}
          r={6}
          fill="hsl(var(--ec-primary))"
          stroke="hsl(var(--background))"
          strokeWidth={2}
          className="animate-pulse"
        />
      );
    }
    return (
      <circle
        cx={cx}
        cy={cy}
        r={3}
        fill="hsl(var(--ec-primary))"
        fillOpacity={0.6}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={hourlyActivity} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="activityGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--ec-primary))" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="hsl(var(--ec-primary))" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
        <XAxis 
          dataKey="hour" 
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
          formatter={(value, name) => [
            `${value} usuários`,
            name === 'users' ? 'Usuários ativos' : name
          ]}
        />
        <ReferenceLine y={1000} stroke="hsl(var(--ec-warning))" strokeDasharray="5 5" />
        <Line 
          type="monotone" 
          dataKey="users" 
          stroke="hsl(var(--ec-primary))"
          strokeWidth={3}
          fill="url(#activityGradient)"
          dot={<CustomDot />}
          activeDot={{ r: 8, fill: 'hsl(var(--ec-primary))' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}