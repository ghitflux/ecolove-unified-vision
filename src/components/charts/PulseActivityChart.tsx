import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts';
import { useChartData } from '@/hooks/useChartData';

export function PulseActivityChart() {
  const { activityData } = useChartData();

  const pulseStyle = {
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  };

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={280}>
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="20%" 
          outerRadius="80%" 
          data={activityData}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar 
            background={{ fill: 'hsl(var(--muted))' }}
            dataKey="value"
            fill="hsl(var(--ec-primary))"
            style={pulseStyle}
          />
          <Legend 
            iconSize={18}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              paddingTop: '20px',
              fontSize: '12px',
              color: 'hsl(var(--muted-foreground))'
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      
      {/* Center indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-ec-primary">87%</div>
          <div className="text-sm text-muted-foreground">Atividade</div>
        </div>
      </div>
    </div>
  );
}