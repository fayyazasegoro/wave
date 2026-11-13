"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Target,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  Zap,
  CheckCircle2,
  Bookmark,
  DollarSign,
  Scale,
  Users,
  Percent,
  Sliders
} from "lucide-react";
import { DEMO_OPPORTUNITIES } from "@/lib/data/demo-data";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataDisclaimer } from "@/components/shared/DataLabel";
import { ScoreBar } from "@/components/shared/ScoreBar";

export default function OpportunityEvaluationPage() {
  const [selectedOppId, setSelectedOppId] = useState(DEMO_OPPORTUNITIES[0].id);

  // Dynamic weights for the 5-pillar scoring framework
  const [weights, setWeights] = useState({
    demandMomentum: 25,
    growthPotential: 20,
    competitionGap: 20,
    profitabilityPotential: 20,
    entryFeasibility: 15,
  });

  const opp = DEMO_OPPORTUNITIES.find((o) => o.id === selectedOppId) || DEMO_OPPORTUNITIES[0];

  // Specific metric ratings for selected opportunity (out of 100)
  const metrics = {
    demandMomentum: 88,
    growthPotential: 82,
    competitionGap: 80,
    profitabilityPotential: 78,
    entryFeasibility: 85,
  };

  // Weighted overall calculation
  const totalScore = Math.round(
    (metrics.demandMomentum * weights.demandMomentum +
      metrics.growthPotential * weights.growthPotential +
      metrics.competitionGap * weights.competitionGap +
      metrics.profitabilityPotential * weights.profitabilityPotential +
      metrics.entryFeasibility * weights.entryFeasibility) /
      100
  );

  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="WAVE Opportunity"
        subtitle="Rigorous 5-pillar commercial evaluation: demand velocity, competitive moat, unit economics, and entry barriers."
        badge="Feasibility Analyzer"
      />

      <DataDisclaimer type="demo" />

      {/* Opportunity Selector */}
      <div className="card-wave p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex-1">
          <label className="text-[10px] font-bold text-[#8C9886] uppercase tracking-wider block mb-1">
            Choose Opportunity Concept to Evaluate
          </label>
          <select
            value={selectedOppId}
            onChange={(e) => setSelectedOppId(e.target.value)}
            className="w-full sm:max-w-md py-2 px-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs sm:text-sm font-bold text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
          >
            {DEMO_OPPORTUNITIES.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name} ({o.business_type.toUpperCase()})
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert(`Saved comprehensive evaluation report for "${opp.name}" to My Business Canvas!`)}
            className="px-3.5 py-2 bg-white border border-[#E5E6DC] hover:bg-[#E2E9D8] text-xs font-bold text-[#485344] rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Bookmark size={13} />
            <span>Save Report</span>
          </button>
          <Link
            href={`/builder?opp=${opp.id}`}
            className="px-4 py-2 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
          >
            <span>Proceed to Builder</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* Main Score & Recommendation Card */}
      <div className="card-wave p-6 sm:p-8 bg-gradient-to-r from-white via-[#FAF8F2] to-[#E2E9D8]/40 border-l-4 border-l-[#7CA982]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E2E9D8] text-[#485344] uppercase">
                {opp.business_type} Model
              </span>
              <span className="text-xs font-bold text-[#7CA982]">Evaluation Verdict: Highly Recommended</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#485344]">{opp.name}</h2>
            <p className="text-xs text-[#6B7A65] leading-relaxed max-w-xl">
              Strong market signals with addressable customer pain. Initial execution can launch as a localized MVP without upfront infrastructure investment.
            </p>
          </div>

          <div className="md:col-span-4 p-5 rounded-2xl bg-white border border-[#E5E6DC] text-center shadow-xs">
            <div className="text-[10px] font-bold text-[#8C9886] uppercase tracking-wider">
              Composite Opportunity Score
            </div>
            <div className="text-4xl font-extrabold text-[#485344] my-1">
              {totalScore}
              <span className="text-sm font-normal text-[#8C9886]">/100</span>
            </div>
            <span className="text-[10px] font-bold text-[#7CA982] bg-[#7CA982]/10 px-2.5 py-0.5 rounded-full inline-block">
              Top 10% Feasibility Tier
            </span>
          </div>
        </div>
      </div>

      {/* 5-Pillar Score Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 card-wave p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#485344] flex items-center gap-1.5">
              <Scale size={16} className="text-[#A77F69]" />
              <span>5-Pillar Quantitative Metric Breakdown</span>
            </h3>
            <span className="text-[10px] text-[#8C9886]">Standard Weights</span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-[#485344] mb-1">
                <span>1. Demand Velocity (Weight {weights.demandMomentum}%)</span>
                <span>{metrics.demandMomentum}/100</span>
              </div>
              <ScoreBar score={metrics.demandMomentum} showValue={false} />
              <p className="text-[10px] text-[#8C9886] mt-1">High search intent across Jabodetabek and Surabaya.</p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#485344] mb-1">
                <span>2. Growth Potential (Weight {weights.growthPotential}%)</span>
                <span>{metrics.growthPotential}/100</span>
              </div>
              <ScoreBar score={metrics.growthPotential} showValue={false} />
              <p className="text-[10px] text-[#8C9886] mt-1">Expansion into secondary tier-2 cities provides 3x TAM headroom.</p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#485344] mb-1">
                <span>3. Competition Gap (Weight {weights.competitionGap}%)</span>
                <span>{metrics.competitionGap}/100</span>
              </div>
              <ScoreBar score={metrics.competitionGap} showValue={false} />
              <p className="text-[10px] text-[#8C9886] mt-1">Incumbents rely on mass catering; lack specialized dietary personalization.</p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#485344] mb-1">
                <span>4. Profitability &amp; Unit Economics (Weight {weights.profitabilityPotential}%)</span>
                <span>{metrics.profitabilityPotential}/100</span>
              </div>
              <ScoreBar score={metrics.profitabilityPotential} showValue={false} />
              <p className="text-[10px] text-[#8C9886] mt-1">Gross margins projected at 45–55% on recurring weekly packages.</p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-[#485344] mb-1">
                <span>5. Entry Feasibility &amp; Startup Barrier (Weight {weights.entryFeasibility}%)</span>
                <span>{metrics.entryFeasibility}/100</span>
              </div>
              <ScoreBar score={metrics.entryFeasibility} showValue={false} />
              <p className="text-[10px] text-[#8C9886] mt-1">Initial capital required is under Rp5jt; manageable operational complexity.</p>
            </div>
          </div>
        </div>

        {/* Business Type Specific Deep Dive */}
        <div className="lg:col-span-5 card-wave p-6 space-y-4">
          <h3 className="text-sm font-bold text-[#485344]">
            {opp.business_type === "service" ? "Service Operational Evaluation" : "Product & Supply Chain Evaluation"}
          </h3>
          <p className="text-xs text-[#6B7A65]">
            Evaluating capacity constraints, labor requirements, and retention assumptions.
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
              <div className="text-[10px] font-bold text-[#8C9886] uppercase">Client Retention Assumption</div>
              <div className="text-xs font-bold text-[#485344] mt-0.5">3.4 Months Average Lifespan</div>
              <p className="text-[10px] text-[#6B7A65] mt-1">Weekly subscribers average 14 recurring orders before pause.</p>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
              <div className="text-[10px] font-bold text-[#8C9886] uppercase">Labor &amp; Delivery Overhead</div>
              <div className="text-xs font-bold text-[#485344] mt-0.5">2 Part-time Cooks + Third-Party Instant Courier</div>
              <p className="text-[10px] text-[#6B7A65] mt-1">No need to purchase proprietary delivery motorbikes initially.</p>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
              <div className="text-[10px] font-bold text-[#8C9886] uppercase">Break-Even Velocity</div>
              <div className="text-xs font-bold text-[#7CA982] mt-0.5">25 Active Weekly Subscribers</div>
              <p className="text-[10px] text-[#6B7A65] mt-1">Fixed costs covered within Month 2 of operations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
