import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import { useChartData } from '@/hooks/useChartData';

const COLORS = [
  'hsl(var(--ec-primary))',
  'hsl(var(--ec-success))',
  'hsl(var(--ec-info))',
  'hsl(var(--ec-warning))',
  'hsl(var(--ec-neutral))'
];

export function GeographicHeatMap() {
  const { geographicData } = useChartData();

  const CustomizedContent = (props: any) => {
    const { root, depth, x, y, width, height, index, name, users } = props;
    
    const opacity = depth === 1 ? 0.8 : 0.6;
    const fontSize = Math.min(width / 8, height / 4, 14);
    
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: COLORS[index % COLORS.length],
            fillOpacity: opacity,
            stroke: 'hsl(var(--background))',
            strokeWidth: 2,
            strokeOpacity: 1,
          }}
          rx={4}
        />
        {width > 60 && height > 30 && (
          <>
            <text
              x={x + width / 2}
              y={y + height / 2 - 5}
              textAnchor="middle"
              fill="white"
              fontSize={fontSize}
              fontWeight="bold"
            >
              {name}
            </text>
            <text
              x={x + width / 2}
              y={y + height / 2 + 12}
              textAnchor="middle"
              fill="white"
              fontSize={fontSize - 2}
            >
              {users} usuários
            </text>
          </>
        )}
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={280}>
      <Treemap
        data={geographicData}
        dataKey="users"
        aspectRatio={4/3}
        stroke="hsl(var(--background))"
        content={<CustomizedContent />}
      >
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          formatter={(value, name) => [
            `${value} usuários`,
            name === 'users' ? 'Total' : name
          ]}
        />
      </Treemap>
    </ResponsiveContainer>
  );
}