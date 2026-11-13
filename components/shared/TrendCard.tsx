"use client";

import Link from "next/link";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { Trend } from "@/types";
import { getLifecycleBadgeClass, getLifecycleLabel, getDemandLabel, getScoreColor, truncateText } from "@/lib/utils";

interface TrendCardProps {
  trend: Trend;
  compact?: boolean;
}

function MiniSparkline({ data }: { data: number[] }) {
  if (!data || data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 60;
  const height = 24;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return `${x},${y}`;
  }).join(" ");
  const isUp = data[data.length - 1] >= data[0];
  return (
    <svg width={width} height={height} className="shrink-0">
      <polyline
        fill="none"
        stroke={isUp ? "#7CA982" : "#C17A6E"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

function DemandIcon({ momentum }: { momentum: string }) {
  if (momentum === "surging" || momentum === "rising") return <TrendingUp size={12} className="text-success" />;
  if (momentum === "declining") return <TrendingDown size={12} className="text-[#C17A6E]" />;
  return <Minus size={12} className="text-sage-light" />;
}

export function TrendCard({ trend, compact = false }: TrendCardProps) {
  return (
    <Link href={`/radar/${trend.id}`}>
      <div className="card-wave p-4 hover:shadow-card transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[10px] font-medium text-sage-light truncate">{trend.industry.name}</span>
              <span className="data-label-demo shrink-0">Demo</span>
            </div>
            <h3 className="font-bold text-sage text-sm leading-tight group-hover:text-pistachio-dark transition-colors line-clamp-2">
              {trend.name}
            </h3>
          </div>
          {trend.sparkline_data && <MiniSparkline data={trend.sparkline_data} />}
        </div>

        {!compact && (
          <p className="text-xs text-sage-light leading-relaxed mb-3 line-clamp-2">
            {truncateText(trend.description, 100)}
          </p>
        )}

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className={getLifecycleBadgeClass(trend.lifecycle)}>
            {getLifecycleLabel(trend.lifecycle)}
          </span>
          <span className="flex items-center gap-1 text-xs text-sage-light">
            <DemandIcon momentum={trend.demand_momentum} />
            {getDemandLabel(trend.demand_momentum)}
          </span>
        </div>

        {/* Score */}
        <div className="flex items-center justify-between pt-3 border-t border-[#E5E6DC]">
          <div className="text-xs text-sage-light">Opportunity Score</div>
          <div className={`text-sm font-bold ${getScoreColor(trend.opportunity_score)}`}>
            {trend.opportunity_score}
            <span className="text-xs font-normal text-sage-light">/100</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
