"use client";

import { ArrowRight, DollarSign, Zap, AlertTriangle } from "lucide-react";
import type { BusinessOpportunity } from "@/types";
import { getBusinessTypeBadgeClass, getCapitalLabel, getScoreBgClass, truncateText } from "@/lib/utils";

interface OpportunityCardProps {
  opportunity: BusinessOpportunity;
  onSave?: (id: string) => void;
  onBuild?: (id: string) => void;
}

export function OpportunityCard({ opportunity, onSave, onBuild }: OpportunityCardProps) {
  return (
    <div className="card-wave p-5 hover:shadow-card transition-all duration-200 group">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={getBusinessTypeBadgeClass(opportunity.business_type)}>
              {opportunity.business_type.charAt(0).toUpperCase() + opportunity.business_type.slice(1)}
            </span>
            <span className="data-label-demo">Demo</span>
          </div>
          <h3 className="font-bold text-sage text-sm leading-tight">{opportunity.name}</h3>
        </div>
        <div className={`shrink-0 text-sm font-bold px-2 py-1 rounded-lg ${getScoreBgClass(opportunity.opportunity_score)}`}>
          {opportunity.opportunity_score}
        </div>
      </div>

      {/* Problem */}
      <div className="mb-3">
        <div className="text-[11px] font-semibold text-sage-light uppercase tracking-wide mb-1">Customer Problem</div>
        <p className="text-xs text-sage leading-relaxed">{truncateText(opportunity.customer_problem, 120)}</p>
      </div>

      {/* Meta grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-warm rounded-lg p-2">
          <div className="text-[10px] text-sage-light mb-0.5">Capital Needed</div>
          <div className="text-xs font-semibold text-sage">{getCapitalLabel(opportunity.capital_category)}</div>
        </div>
        <div className="bg-warm rounded-lg p-2">
          <div className="text-[10px] text-sage-light mb-0.5">Competition</div>
          <div className="text-xs font-semibold text-sage capitalize">{opportunity.competition}</div>
        </div>
      </div>

      {/* Feasibility */}
      <div className="flex items-center gap-1 mb-4">
        <Zap size={12} className="text-warning shrink-0" />
        <span className="text-xs text-sage-light">Feasibility: </span>
        <span className="text-xs font-semibold text-sage">{opportunity.feasibility_score}/100</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-3 border-t border-[#E5E6DC]">
        {onSave && (
          <button
            onClick={() => onSave(opportunity.id)}
            className="flex-1 text-xs font-semibold text-sage border border-[#E5E6DC] rounded-lg py-1.5 hover:bg-warm transition-colors"
          >
            Save
          </button>
        )}
        {onBuild && (
          <button
            onClick={() => onBuild(opportunity.id)}
            className="flex-1 flex items-center justify-center gap-1 text-xs font-semibold bg-sage text-white rounded-lg py-1.5 hover:bg-sage-dark transition-colors"
          >
            Build This <ArrowRight size={10} />
          </button>
        )}
      </div>
    </div>
  );
}
