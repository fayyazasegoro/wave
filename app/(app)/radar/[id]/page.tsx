"use client";

import { use, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Bookmark,
  TrendingUp,
  Compass,
  Target,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  HelpCircle,
  Zap,
  Building
} from "lucide-react";
import { DEMO_TRENDS, DEMO_OPPORTUNITIES } from "@/lib/data/demo-data";
import { DataDisclaimer } from "@/components/shared/DataLabel";
import {
  getLifecycleBadgeClass,
  getLifecycleLabel,
  getDemandLabel,
  getScoreColor
} from "@/lib/utils";

export default function TrendDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [saved, setSaved] = useState(false);

  const trend = DEMO_TRENDS.find((t) => t.id === id) || DEMO_TRENDS[0];
  const relatedOpps = DEMO_OPPORTUNITIES.filter((o) => o.trend_id === trend.id);

  const handleSaveToCanvas = () => {
    setSaved(true);
    alert(`"${trend.name}" has been pinned to My Business Canvas!`);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Back button & top bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/radar"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7A65] hover:text-[#485344] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to WAVE Radar</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSaveToCanvas}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              saved
                ? "bg-[#7CA982] text-white"
                : "bg-white border border-[#E5E6DC] text-[#485344] hover:bg-[#E2E9D8]"
            }`}
          >
            <Bookmark size={13} />
            <span>{saved ? "Saved in Canvas" : "Save to Canvas"}</span>
          </button>
        </div>
      </div>

      <DataDisclaimer type="demo" />

      {/* Hero Overview Card */}
      <div className="card-wave p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-[#A77F69] bg-[#E9C0A8]/30 px-2.5 py-0.5 rounded-full">
                {trend.industry.name}
              </span>
              <span className={getLifecycleBadgeClass(trend.lifecycle)}>
                {getLifecycleLabel(trend.lifecycle)}
              </span>
              <span className="text-[10px] font-semibold text-[#8C9886] bg-[#F3F1E9] px-2 py-0.5 rounded">
                Updated: {trend.last_updated}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#485344] tracking-tight">
              {trend.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#6B7A65] leading-relaxed">
              {trend.description}
            </p>
          </div>

          {/* Opportunity Score Pill */}
          <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#E5E6DC] text-center shrink-0 min-w-[130px]">
            <div className="text-[10px] uppercase font-bold text-[#8C9886] tracking-wider mb-1">
              Opportunity Score
            </div>
            <div className={`text-3xl font-extrabold ${getScoreColor(trend.opportunity_score)}`}>
              {trend.opportunity_score}
              <span className="text-xs font-normal text-[#8C9886]">/100</span>
            </div>
            <span className="text-[10px] font-semibold text-[#7CA982] mt-1 block">
              High Feasibility
            </span>
          </div>
        </div>

        {/* 4 Pillars Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#E5E6DC]">
          <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]/80">
            <div className="text-[10px] font-bold text-[#8C9886] uppercase mb-0.5">Demand Momentum</div>
            <div className="text-xs font-extrabold text-[#485344]">{getDemandLabel(trend.demand_momentum)}</div>
          </div>

          <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]/80">
            <div className="text-[10px] font-bold text-[#8C9886] uppercase mb-0.5">Competition Level</div>
            <div className="text-xs font-extrabold text-[#485344] capitalize">{trend.competition_level}</div>
          </div>

          <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]/80">
            <div className="text-[10px] font-bold text-[#8C9886] uppercase mb-0.5">Primary Entry Angle</div>
            <div className="text-xs font-extrabold text-[#485344]">Service &amp; Hybrid Models</div>
          </div>

          <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]/80">
            <div className="text-[10px] font-bold text-[#8C9886] uppercase mb-0.5">Recommended Action</div>
            <div className="text-xs font-extrabold text-[#7CA982]">Enter Now with Niche</div>
          </div>
        </div>
      </div>

      {/* Historical Movement & Demand Signals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 card-wave p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-[#485344] flex items-center gap-1.5">
                <TrendingUp size={16} className="text-[#7CA982]" />
                <span>Demand Velocity Trajectory (6 Months)</span>
              </h2>
              <p className="text-[11px] text-[#6B7A65]">Relative index momentum observed across Indonesian search and commercial channels.</p>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E2E9D8] text-[#485344]">
              Rising +34%
            </span>
          </div>

          {/* Simple custom SVG sparkline chart */}
          <div className="h-44 w-full bg-[#FAF8F2] rounded-xl p-4 border border-[#E5E6DC] flex flex-col justify-between">
            <div className="flex justify-between text-[10px] text-[#8C9886]">
              <span>Index: 40</span>
              <span>Index: 85 (Peak Wave)</span>
            </div>
            <svg viewBox="0 0 500 100" className="w-full h-24 overflow-visible">
              <defs>
                <linearGradient id="grad-trend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B8C8A7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#B8C8A7" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 75 Q 70 65, 140 55 T 280 35 T 420 15 L 500 10"
                fill="none"
                stroke="#485344"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 0 75 Q 70 65, 140 55 T 280 35 T 420 15 L 500 10 L 500 100 L 0 100 Z"
                fill="url(#grad-trend)"
              />
              {/* Highlight circle */}
              <circle cx="500" cy="10" r="4" fill="#E9C0A8" stroke="#485344" strokeWidth="2" />
            </svg>
            <div className="flex justify-between text-[10px] font-medium text-[#8C9886]">
              <span>Month 1</span>
              <span>Month 2</span>
              <span>Month 3</span>
              <span>Month 4</span>
              <span>Month 5</span>
              <span>Today</span>
            </div>
          </div>
        </div>

        {/* Strategic Next Steps */}
        <div className="lg:col-span-4 card-wave p-6 space-y-4">
          <h2 className="text-sm font-bold text-[#485344] flex items-center gap-1.5">
            <Zap size={15} className="text-[#D4A853]" />
            <span>Recommended Next Steps</span>
          </h2>
          <div className="space-y-3">
            <Link
              href={`/forecast?trend=${trend.id}`}
              className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] hover:border-[#B8C8A7] transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-bold text-[#485344]">Explore with WAVE Forecast</div>
                <div className="text-[10px] text-[#6B7A65]">Simulate 3–12 months scenarios</div>
              </div>
              <ArrowRight size={13} className="text-[#8C9886] group-hover:text-[#485344]" />
            </Link>

            <Link
              href={`/beyond-the-wave?trend=${trend.id}`}
              className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] hover:border-[#B8C8A7] transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-bold text-[#485344]">Beyond the Wave</div>
                <div className="text-[10px] text-[#6B7A65]">Uncover secondary service niches</div>
              </div>
              <ArrowRight size={13} className="text-[#8C9886] group-hover:text-[#485344]" />
            </Link>

            <Link
              href={`/opportunity?trend=${trend.id}`}
              className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] hover:border-[#B8C8A7] transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-bold text-[#485344]">WAVE Opportunity Evaluation</div>
                <div className="text-[10px] text-[#6B7A65]">Calculate unit economics &amp; risk</div>
              </div>
              <ArrowRight size={13} className="text-[#8C9886] group-hover:text-[#485344]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Related Business Opportunities */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[#485344] flex items-center gap-2">
              <Sparkles size={16} className="text-[#A77F69]" />
              <span>Related Feasible Business Opportunities</span>
            </h2>
            <p className="text-xs text-[#6B7A65]">Opportunities derived from this trend with simple operational requirements.</p>
          </div>
          <Link
            href="/beyond-the-wave"
            className="text-xs font-bold text-[#A77F69] hover:underline"
          >
            Explore More →
          </Link>
        </div>

        {relatedOpps.length === 0 ? (
          <div className="card-wave p-6 text-center text-xs text-[#6B7A65]">
            No direct mapped opportunity yet. You can generate custom opportunities in <strong>WAVE Innovate</strong>.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedOpps.map((opp) => (
              <div key={opp.id} className="card-wave p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E2E9D8] text-[#485344]">
                    {opp.business_type.toUpperCase()}
                  </span>
                  <span className="text-xs font-bold text-[#7CA982]">Score: {opp.feasibility_score}/100</span>
                </div>
                <h3 className="text-sm font-bold text-[#485344]">{opp.name}</h3>
                <p className="text-xs text-[#6B7A65]">{opp.customer_problem}</p>
                <div className="pt-2 border-t border-[#E5E6DC] flex items-center justify-between">
                  <span className="text-[10px] text-[#8C9886]">Capital: {opp.capital_category}</span>
                  <Link
                    href={`/builder?opp=${opp.id}`}
                    className="text-xs font-bold text-[#485344] hover:underline flex items-center gap-1"
                  >
                    <span>Build This</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Risk Assessment */}
      <div className="card-wave p-6 border-l-4 border-l-[#A77F69] space-y-2">
        <h3 className="text-sm font-bold text-[#485344] flex items-center gap-1.5">
          <ShieldAlert size={16} className="text-[#A77F69]" />
          <span>Operational Risks &amp; Entry Barriers</span>
        </h3>
        <ul className="text-xs text-[#6B7A65] space-y-1 list-disc pl-4">
          <li>Cold chain delivery reliability in second-tier cities requires careful courier selection.</li>
          <li>Customer acquisition costs (CAC) increase as major brands launch mass-market equivalents.</li>
          <li>Menu or product fatigue typically emerges within 4–6 months without seasonal rotation.</li>
        </ul>
      </div>
    </div>
  );
}
