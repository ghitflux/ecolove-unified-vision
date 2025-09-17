import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useChartData } from '@/hooks/useChartData';

export function GeographicHeatMap() {
  const { worldMapData } = useChartData();

  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    const size = Math.max(4, Math.min(20, payload.users / 50));
    const intensity = payload.users / 2000;
    
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={size + 4}
          fill="hsl(var(--ec-primary))"
          fillOpacity={intensity * 0.3}
          className="animate-pulse"
        />
        <circle
          cx={cx}
          cy={cy}
          r={size}
          fill="hsl(var(--ec-primary))"
          fillOpacity={Math.min(0.9, intensity + 0.4)}
        />
      </g>
    );
  };

  return (
    <div className="relative">
      {/* World map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg overflow-hidden">
        <svg 
          viewBox="0 0 1000 500" 
          className="w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified world map outline */}
          <path 
            d="M150,200 Q200,150 300,180 Q400,160 500,190 Q600,170 700,200 Q800,180 850,220 L850,350 Q800,330 700,350 Q600,370 500,340 Q400,360 300,330 Q200,350 150,320 Z" 
            fill="hsl(var(--muted))" 
            stroke="hsl(var(--border))" 
            strokeWidth="1"
          />
          <path 
            d="M100,120 Q150,100 250,130 Q350,110 450,140 L450,180 Q350,160 250,180 Q150,200 100,170 Z" 
            fill="hsl(var(--muted))" 
            stroke="hsl(var(--border))" 
            strokeWidth="1"
          />
          <path 
            d="M600,130 Q700,110 800,140 Q900,120 950,160 L950,200 Q900,180 800,200 Q700,220 600,190 Z" 
            fill="hsl(var(--muted))" 
            stroke="hsl(var(--border))" 
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* User distribution points */}
      <ResponsiveContainer width="100%" height={280}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
          <XAxis 
            type="number" 
            dataKey="x" 
            domain={[0, 100]}
            hide
          />
          <YAxis 
            type="number" 
            dataKey="y" 
            domain={[0, 100]}
            hide
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--background))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            formatter={(value, name) => {
              if (name === 'users') return [`${value} usuários`, 'Usuários ativos'];
              return [value, name];
            }}
            labelFormatter={(label, payload) => {
              if (payload && payload[0]) {
                return payload[0].payload.city;
              }
              return '';
            }}
          />
          <Scatter 
            data={worldMapData} 
            fill="hsl(var(--ec-primary))"
            shape={<CustomDot />}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}