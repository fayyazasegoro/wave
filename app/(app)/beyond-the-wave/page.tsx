"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  Filter,
  Bookmark,
  Zap,
  ShieldAlert,
  Coins,
  CheckCircle2
} from "lucide-react";
import { DEMO_TRENDS, DEMO_OPPORTUNITIES, DEMO_INDUSTRIES } from "@/lib/data/demo-data";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataDisclaimer } from "@/components/shared/DataLabel";
import {
  getBusinessTypeBadgeClass,
  getCapitalLabel,
  getScoreBgClass
} from "@/lib/utils";
import type { BusinessOpportunity } from "@/types";

export default function BeyondTheWavePage() {
  const [selectedTrendId, setSelectedTrendId] = useState(DEMO_TRENDS[0].id);
  const [businessTypeFilter, setBusinessTypeFilter] = useState<string>("all");
  const [capitalFilter, setCapitalFilter] = useState<string>("all");
  const [selectedOpp, setSelectedOpp] = useState<BusinessOpportunity | null>(DEMO_OPPORTUNITIES[0]);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const currentTrend = DEMO_TRENDS.find((t) => t.id === selectedTrendId) || DEMO_TRENDS[0];

  // Filter opportunities
  const filteredOpps = useMemo(() => {
    return DEMO_OPPORTUNITIES.filter((opp) => {
      const matchType = businessTypeFilter === "all" || opp.business_type === businessTypeFilter;
      const matchCapital = capitalFilter === "all" || opp.capital_category === capitalFilter;
      return matchType && matchCapital;
    });
  }, [businessTypeFilter, capitalFilter]);

  const handleSave = (opp: BusinessOpportunity) => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="Beyond the Wave"
        subtitle="Uncover accessible, high-margin opportunities hiding behind major macro trends—without needing heavy capital or complex tech."
        badge="Niche Discovery"
      />

      <DataDisclaimer type="demo" />

      {/* Filter and Trend Bar */}
      <div className="card-wave p-5 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex-1">
            <label className="text-[10px] font-bold text-[#8C9886] uppercase tracking-wider block mb-1">
              Select Macro Trend to Explore
            </label>
            <select
              value={selectedTrendId}
              onChange={(e) => setSelectedTrendId(e.target.value)}
              className="w-full md:max-w-md py-2 px-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs sm:text-sm font-bold text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            >
              {DEMO_TRENDS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} ({t.industry.name})
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Type Filter */}
            <select
              value={businessTypeFilter}
              onChange={(e) => setBusinessTypeFilter(e.target.value)}
              className="py-2 px-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-semibold text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            >
              <option value="all">All Business Types</option>
              <option value="product">Product-Based</option>
              <option value="service">Service-Based</option>
              <option value="hybrid">Hybrid Model</option>
            </select>

            {/* Capital Filter */}
            <select
              value={capitalFilter}
              onChange={(e) => setCapitalFilter(e.target.value)}
              className="py-2 px-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-semibold text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            >
              <option value="all">All Capital Tiers</option>
              <option value="low">Low (&lt; Rp5jt)</option>
              <option value="medium">Medium (Rp5–25jt)</option>
              <option value="high">High (&gt; Rp25jt)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Visual Relationship Map: Trend → Unmet Need → Opportunity → Concept */}
      <div className="card-wave p-6 bg-gradient-to-r from-white via-[#FAF8F2] to-[#E2E9D8]/30">
        <div className="mb-4">
          <span className="text-[10px] font-bold text-[#A77F69] uppercase tracking-widest">
            Value Relationship Map
          </span>
          <h2 className="text-base font-bold text-[#485344] mt-0.5">
            How Macro Momentum Converts to Accessible Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          {/* Node 1: Macro Trend */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E5E6DC] shadow-xs">
            <span className="text-[9px] font-bold text-[#8C9886] uppercase block mb-1">1. Macro Trend</span>
            <div className="text-xs font-bold text-[#485344]">{currentTrend.name}</div>
            <div className="text-[10px] text-[#7CA982] font-semibold mt-1">High public attention</div>
          </div>

          {/* Node 2: Unmet Customer Need */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E5E6DC] shadow-xs">
            <span className="text-[9px] font-bold text-[#A77F69] uppercase block mb-1">2. Overlooked Customer Need</span>
            <div className="text-xs font-bold text-[#485344]">Convenience &amp; Accessibility</div>
            <div className="text-[10px] text-[#6B7A65] mt-1">People want results without friction</div>
          </div>

          {/* Node 3: Accessible Opportunity */}
          <div className="p-3.5 rounded-xl bg-[#E2E9D8] border border-[#B8C8A7] shadow-xs">
            <span className="text-[9px] font-bold text-[#485344] uppercase block mb-1">3. Opportunity Angle</span>
            <div className="text-xs font-bold text-[#485344]">Localized Subscription Service</div>
            <div className="text-[10px] text-[#485344] font-medium mt-1">Low initial capex (&lt; Rp5jt)</div>
          </div>

          {/* Node 4: Concrete Concept */}
          <div className="p-3.5 rounded-xl bg-[#485344] text-white shadow-xs">
            <span className="text-[9px] font-bold text-[#B8C8A7] uppercase block mb-1">4. Ready Concept</span>
            <div className="text-xs font-bold">Weekly Pre-portioned Kit</div>
            <div className="text-[10px] text-[#E2E9D8] mt-1">Direct via WhatsApp &amp; IG</div>
          </div>
        </div>
      </div>

      {/* Main Opportunities Explorer (Grid & Detail side-by-side) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Opportunity List */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[#485344]">
              Discovered Opportunities ({filteredOpps.length})
            </span>
            <span className="text-[10px] text-[#8C9886]">Click card to inspect feasibility breakdown</span>
          </div>

          {filteredOpps.map((opp) => {
            const isSelected = selectedOpp?.id === opp.id;
            return (
              <div
                key={opp.id}
                onClick={() => setSelectedOpp(opp)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white border-[#485344] shadow-card ring-1 ring-[#485344]"
                    : "bg-white border-[#E5E6DC] hover:border-[#B8C8A7] hover:shadow-xs"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className={getBusinessTypeBadgeClass(opp.business_type)}>
                      {opp.business_type.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-semibold text-[#8C9886] bg-[#FAF8F2] px-2 py-0.5 rounded">
                      Capital: {getCapitalLabel(opp.capital_category)}
                    </span>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${getScoreBgClass(opp.opportunity_score)}`}>
                    Score: {opp.opportunity_score}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#485344] mb-1">{opp.name}</h3>
                <p className="text-xs text-[#6B7A65] line-clamp-2">{opp.customer_problem}</p>

                <div className="mt-3 pt-2 border-t border-[#E5E6DC] flex items-center justify-between text-[11px] text-[#8C9886]">
                  <span>Competition: <strong className="text-[#485344] capitalize">{opp.competition}</strong></span>
                  <span className="text-[#A77F69] font-bold flex items-center gap-1">
                    Inspect Details <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: In-Depth Opportunity Detail Pane */}
        <div className="lg:col-span-6 sticky top-20">
          {selectedOpp ? (
            <div className="card-wave p-6 space-y-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={getBusinessTypeBadgeClass(selectedOpp.business_type)}>
                      {selectedOpp.business_type.toUpperCase()}
                    </span>
                    <span className="data-label-demo">Demo Signal</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#485344]">{selectedOpp.name}</h3>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-extrabold text-[#7CA982]">{selectedOpp.feasibility_score}</div>
                  <div className="text-[9px] uppercase font-bold text-[#8C9886]">Feasibility</div>
                </div>
              </div>

              {savedSuccess && (
                <div className="p-2.5 rounded-lg bg-[#7CA982]/15 text-[#485344] text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#7CA982]" />
                  Opportunity added to your Business Canvas workspace!
                </div>
              )}

              {/* Problem & Audience */}
              <div className="space-y-3">
                <div>
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase tracking-wider mb-0.5">
                    Target Customer Problem
                  </div>
                  <p className="text-xs text-[#485344] leading-relaxed bg-[#FAF8F2] p-3 rounded-lg border border-[#E5E6DC]">
                    {selectedOpp.customer_problem}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase tracking-wider mb-0.5">
                    Ideal Customer Segment
                  </div>
                  <p className="text-xs text-[#6B7A65]">{selectedOpp.target_customer}</p>
                </div>
              </div>

              {/* Economic & Operational Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Startup Capital</div>
                  <div className="text-xs font-bold text-[#485344] mt-0.5">{getCapitalLabel(selectedOpp.capital_category)}</div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Complexity</div>
                  <div className="text-xs font-bold text-[#485344] mt-0.5 capitalize">{selectedOpp.operational_complexity} complexity</div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Revenue Model</div>
                  <div className="text-xs font-bold text-[#485344] mt-0.5 truncate">{selectedOpp.revenue_model}</div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Differentiation</div>
                  <div className="text-xs font-bold text-[#485344] mt-0.5 line-clamp-1">{selectedOpp.differentiation}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-[#E5E6DC] flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handleSave(selectedOpp)}
                  className="flex-1 py-2 px-3 rounded-xl border border-[#E5E6DC] text-xs font-bold text-[#485344] hover:bg-[#FAF8F2] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Bookmark size={13} />
                  <span>Save Opportunity</span>
                </button>

                <Link
                  href={`/opportunity?opp=${selectedOpp.id}`}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#E2E9D8] hover:bg-[#B8C8A7] text-xs font-bold text-[#485344] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Zap size={13} />
                  <span>Evaluate Unit Economics</span>
                </Link>

                <Link
                  href={`/builder?opp=${selectedOpp.id}`}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#485344] hover:bg-[#384235] text-xs font-bold text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Build Business</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="card-wave p-12 text-center text-xs text-[#8C9886]">
              Select an opportunity to view full operational details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
