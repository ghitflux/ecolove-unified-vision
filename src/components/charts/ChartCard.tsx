import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  statistic?: {
    label: string;
    value: string;
    trend?: string;
    isPositive?: boolean;
  };
}

export function ChartCard({ title, children, statistic }: ChartCardProps) {
  return (
    <div className="ec-card">
      <h3 className="ec-h3 mb-4">{title}</h3>
      <div className="mb-4">
        {children}
      </div>
      {statistic && (
        <div className="pt-3 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{statistic.label}</span>
            <div className="flex items-center space-x-2">
              <span className="font-medium">{statistic.value}</span>
              {statistic.trend && (
                <span className={`text-xs ${
                  statistic.isPositive ? 'text-ec-success' : 'text-ec-danger'
                }`}>
                  {statistic.trend}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}