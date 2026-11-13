"use client";

import { useState } from "react";
import {
  TrendingUp,
  AlertTriangle,
  HelpCircle,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Info
} from "lucide-react";
import { DEMO_TRENDS, DEMO_FORECAST_DATA } from "@/lib/data/demo-data";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataDisclaimer } from "@/components/shared/DataLabel";

export default function ForecastPage() {
  const [selectedTrendId, setSelectedTrendId] = useState(DEMO_TRENDS[0].id);
  const [forecastHorizon, setForecastHorizon] = useState<"3m" | "6m" | "12m">("6m");
  const [scenario, setScenario] = useState<"all" | "optimistic" | "base" | "pessimistic">("all");

  const trend = DEMO_TRENDS.find((t) => t.id === selectedTrendId) || DEMO_TRENDS[0];

  // Lifecycle stage progression
  const lifecycleStages = [
    { key: "emerging", label: "1. Emerging", desc: "Niche early adopters, low competition" },
    { key: "rising", label: "2. Rising", desc: "Rapid adoption, optimal entry window" },
    { key: "peak", label: "3. Peak", desc: "Maximum mass attention, saturated ads" },
    { key: "saturated", label: "4. Saturated", desc: "High supply, margin compression" },
    { key: "declining", label: "5. Declining", desc: "Drop in customer interest" },
    { key: "evergreen", label: "6. Evergreen", desc: "Stabilized structural demand" },
  ];

  const currentStageIndex = lifecycleStages.findIndex((s) => s.key === trend.lifecycle);

  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="WAVE Forecast"
        subtitle="Understand category lifecycles and evaluate statistical scenario forecasts before committing capital."
        badge="Predictive Intelligence"
      />

      <DataDisclaimer type="demo" />

      {/* Trend Selector Bar */}
      <div className="card-wave p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex-1">
          <label className="text-[10px] font-bold text-[#8C9886] uppercase tracking-wider block mb-1">
            Select Active Market Trend
          </label>
          <select
            value={selectedTrendId}
            onChange={(e) => setSelectedTrendId(e.target.value)}
            className="w-full sm:max-w-md py-2 px-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs sm:text-sm font-bold text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
          >
            {DEMO_TRENDS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.industry.name} — {t.lifecycle.toUpperCase()})
              </option>
            ))}
          </select>
        </div>

        {/* Forecast Horizon Selector */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          <span className="text-xs font-semibold text-[#6B7A65] mr-1">Horizon:</span>
          {(["3m", "6m", "12m"] as const).map((h) => (
            <button
              key={h}
              onClick={() => setForecastHorizon(h)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                forecastHorizon === h
                  ? "bg-[#485344] text-white"
                  : "bg-[#FAF8F2] border border-[#E5E6DC] text-[#6B7A65] hover:bg-[#E2E9D8]"
              }`}
            >
              {h.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Entry Recommendation Banner */}
      <div className="card-wave p-6 bg-gradient-to-r from-white via-[#FAF8F2] to-[#E2E9D8]/50 border-l-4 border-l-[#7CA982]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#7CA982] bg-[#7CA982]/10 px-2.5 py-0.5 rounded-full">
              <CheckCircle2 size={12} />
              Entry Recommendation
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#485344]">
              ENTER NOW — Optimal Window
            </h2>
            <p className="text-xs text-[#6B7A65] max-w-2xl leading-relaxed">
              Consumer interest in <strong>{trend.name}</strong> is currently accelerating in tier-1 Indonesian metropolitan regions with moderate competitive intensity. Established brands have not locked down niche specialized offerings.
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-[#E5E6DC] text-center shrink-0 min-w-[130px]">
            <div className="text-[10px] uppercase font-bold text-[#8C9886]">Confidence Level</div>
            <div className="text-xl font-extrabold text-[#485344]">87%</div>
            <span className="text-[9px] text-[#8C9886]">Statistical Variance ±6%</span>
          </div>
        </div>
      </div>

      {/* Lifecycle Framework Visualizer */}
      <div className="card-wave p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#485344]">6-Stage Lifecycle Framework</h3>
            <p className="text-[11px] text-[#6B7A65]">
              Saturation (high competition) differs fundamentally from Decline (falling customer willingness).
            </p>
          </div>
          <span className="text-xs font-bold text-[#485344] bg-[#E2E9D8] px-2.5 py-1 rounded-lg">
            Current: {trend.lifecycle.toUpperCase()}
          </span>
        </div>

        {/* Steps track */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 pt-2">
          {lifecycleStages.map((st, idx) => {
            const isCurrent = st.key === trend.lifecycle;
            const isPast = idx < currentStageIndex;

            return (
              <div
                key={st.key}
                className={`p-3 rounded-xl border transition-all ${
                  isCurrent
                    ? "bg-[#E2E9D8] border-[#B8C8A7] shadow-xs"
                    : isPast
                    ? "bg-[#FAF8F2] border-[#E5E6DC] opacity-75"
                    : "bg-white border-[#E5E6DC]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold ${isCurrent ? "text-[#485344]" : "text-[#8C9886]"}`}>
                    {st.label}
                  </span>
                  {isCurrent && <span className="w-2 h-2 rounded-full bg-[#485344]" />}
                </div>
                <p className="text-[10px] text-[#6B7A65] leading-tight">{st.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scenario Forecast Visualizer */}
      <div className="card-wave p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#485344] flex items-center gap-1.5">
              <TrendingUp size={16} className="text-[#485344]" />
              <span>Scenario Comparison Projection ({forecastHorizon.toUpperCase()})</span>
            </h3>
            <p className="text-xs text-[#6B7A65]">
              Modeled using historical Google Trends, local e-commerce volume, and category seasonality.
            </p>
          </div>

          {/* Scenario tabs */}
          <div className="flex items-center gap-1 bg-[#FAF8F2] p-1 rounded-xl border border-[#E5E6DC]">
            {[
              { id: "all", label: "All Scenarios" },
              { id: "optimistic", label: "Optimistic" },
              { id: "base", label: "Base Case" },
              { id: "pessimistic", label: "Pessimistic" },
            ].map((sc) => (
              <button
                key={sc.id}
                onClick={() => setScenario(sc.id as any)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  scenario === sc.id
                    ? "bg-white text-[#485344] shadow-xs"
                    : "text-[#6B7A65] hover:text-[#485344]"
                }`}
              >
                {sc.label}
              </button>
            ))}
          </div>
        </div>

        {/* SVG Multi-Scenario Projection Chart */}
        <div className="h-64 w-full bg-[#FAF8F2] rounded-2xl p-5 border border-[#E5E6DC] flex flex-col justify-between relative">
          <div className="flex justify-between text-xs text-[#8C9886] border-b border-[#E5E6DC] pb-2">
            <span>Historical Observed (Months 1–6)</span>
            <span className="font-bold text-[#485344]">Forecasted Horizon →</span>
          </div>

          <svg viewBox="0 0 600 150" className="w-full h-36 overflow-visible">
            {/* Historical Solid Line */}
            <path
              d="M 0 110 Q 75 95, 150 85 T 300 50"
              fill="none"
              stroke="#485344"
              strokeWidth="3"
            />
            {/* Split marker */}
            <line x1="300" y1="10" x2="300" y2="140" stroke="#8C9886" strokeDasharray="3,3" strokeWidth="1" />

            {/* Optimistic Scenario (Green) */}
            {(scenario === "all" || scenario === "optimistic") && (
              <path
                d="M 300 50 Q 400 35, 500 20 T 600 15"
                fill="none"
                stroke="#7CA982"
                strokeWidth="2.5"
                strokeDasharray="4,4"
              />
            )}

            {/* Base Scenario (Pistachio/Neutral) */}
            {(scenario === "all" || scenario === "base") && (
              <path
                d="M 300 50 Q 400 50, 500 48 T 600 45"
                fill="none"
                stroke="#A77F69"
                strokeWidth="2.5"
                strokeDasharray="4,4"
              />
            )}

            {/* Pessimistic Scenario (Amber) */}
            {(scenario === "all" || scenario === "pessimistic") && (
              <path
                d="M 300 50 Q 400 70, 500 95 T 600 110"
                fill="none"
                stroke="#C17A6E"
                strokeWidth="2.5"
                strokeDasharray="4,4"
              />
            )}

            {/* Connecting dot */}
            <circle cx="300" cy="50" r="4" fill="#E9C0A8" stroke="#485344" strokeWidth="2" />
          </svg>

          {/* Scenario Legend */}
          <div className="flex flex-wrap items-center justify-between text-[11px] pt-2 border-t border-[#E5E6DC]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-bold text-[#7CA982]">
                <span className="w-2.5 h-1 bg-[#7CA982] rounded" /> Optimistic (+28%)
              </span>
              <span className="flex items-center gap-1.5 font-bold text-[#A77F69]">
                <span className="w-2.5 h-1 bg-[#A77F69] rounded" /> Base Case (+12%)
              </span>
              <span className="flex items-center gap-1.5 font-bold text-[#C17A6E]">
                <span className="w-2.5 h-1 bg-[#C17A6E] rounded" /> Pessimistic (-15%)
              </span>
            </div>
            <span className="text-[#8C9886]">Confidence Interval: 90%</span>
          </div>
        </div>

        {/* 3 Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border border-[#E5E6DC]">
            <div className="text-xs font-bold text-[#7CA982] mb-1">Optimistic Scenario</div>
            <div className="text-lg font-extrabold text-[#485344]">Index: 96 / 100</div>
            <p className="text-[11px] text-[#6B7A65] mt-1">
              Social commerce viral adoption expands to secondary urban centers (Bandung, Semarang, Medan).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5E6DC]">
            <div className="text-xs font-bold text-[#A77F69] mb-1">Base Case (Most Likely)</div>
            <div className="text-lg font-extrabold text-[#485344]">Index: 88 / 100</div>
            <p className="text-[11px] text-[#6B7A65] mt-1">
              Solid consistent demand driven by health-conscious professionals. Repeat orders stabilize at 42%.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E5E6DC]">
            <div className="text-xs font-bold text-[#C17A6E] mb-1">Pessimistic Scenario</div>
            <div className="text-lg font-extrabold text-[#485344]">Index: 72 / 100</div>
            <p className="text-[11px] text-[#6B7A65] mt-1">
              Price wars from mass aggregators depress customer willingness to pay premium margins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
