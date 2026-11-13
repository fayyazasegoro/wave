"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  Radio,
  Compass,
  Lightbulb,
  BookOpen,
  Sparkles,
  Zap,
  Target,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { DEMO_TRENDS, DEMO_OPPORTUNITIES, DEMO_MARKET_STATS } from "@/lib/data/demo-data";
import { TrendCard } from "@/components/shared/TrendCard";
import { OpportunityCard } from "@/components/shared/OpportunityCard";

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const risingTrends = DEMO_TRENDS.filter(t => t.lifecycle === "rising");
  const peakTrends = DEMO_TRENDS.filter(t => t.lifecycle === "peak");
  const emergingTrends = DEMO_TRENDS.filter(t => t.lifecycle === "emerging");
  const evergreenTrends = DEMO_TRENDS.filter(t => t.lifecycle === "evergreen");

  // Sample recent Canvas projects from local workspace state
  const recentProjects = [
    {
      id: "proj-1",
      name: "DapoerHijau — Healthy Meal Box",
      type: "service" as const,
      stage: "Planning",
      progress: 65,
      updatedAt: "2 hours ago",
    },
    {
      id: "proj-2",
      name: "PawPal In-Home Pet Sitting",
      type: "service" as const,
      stage: "Research",
      progress: 35,
      updatedAt: "Yesterday",
    },
    {
      id: "proj-3",
      name: "Aksara SNBT Intensive Prep",
      type: "service" as const,
      stage: "Validation",
      progress: 80,
      updatedAt: "3 days ago",
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#E2E9D8] via-[#FAF8F2] to-[#E9C0A8]/50 p-6 sm:p-8 border border-[#E5E6DC] shadow-soft">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/80 border border-[#B8C8A7] text-[10px] font-bold text-[#485344] uppercase tracking-wider mb-3">
            <Sparkles size={11} className="text-[#A77F69]" />
            Market Intelligence Overview
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#485344] tracking-tight">
            Discover your next business opportunity.
          </h1>
          <p className="text-xs sm:text-sm text-[#6B7A65] mt-2 leading-relaxed">
            Market signals are surging in urban healthy nutrition, local botanical skincare, and accessible SME services. Review what's rising today and turn insights into actionable plans.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <Link
              href="/radar"
              className="px-4 py-2 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-1.5"
            >
              <Radio size={14} />
              <span>Explore WAVE Radar</span>
            </Link>
            <Link
              href="/canvas"
              className="px-4 py-2 bg-white hover:bg-[#FAF8F2] text-[#485344] text-xs font-bold rounded-xl border border-[#E5E6DC] transition-all flex items-center gap-1.5"
            >
              <BookOpen size={14} />
              <span>Open Business Canvas</span>
            </Link>
          </div>
        </div>

        {/* Decorative Wave lines */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
            <path d="M0 100 Q 50 40, 100 100 T 200 100" stroke="#485344" strokeWidth="4" />
            <path d="M0 130 Q 50 70, 100 130 T 200 130" stroke="#B8C8A7" strokeWidth="6" />
          </svg>
        </div>
      </div>

      {/* Section 1 — Rising Right Now */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7CA982] animate-pulse" />
              <h2 className="text-base sm:text-lg font-bold text-[#485344]">Rising Right Now</h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#E2E9D8] text-[#485344]">
                High Momentum
              </span>
            </div>
            <p className="text-xs text-[#6B7A65] mt-0.5">Category trends experiencing accelerated Indonesian consumer demand.</p>
          </div>
          <Link
            href="/radar"
            className="text-xs font-bold text-[#A77F69] hover:text-[#485344] flex items-center gap-1 transition-colors"
          >
            <span>View All ({DEMO_TRENDS.length})</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {risingTrends.slice(0, 4).map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>
      </div>

      {/* Section 2 — Opportunities Worth Exploring */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#A77F69]" />
              <h2 className="text-base sm:text-lg font-bold text-[#485344]">Opportunities Worth Exploring</h2>
            </div>
            <p className="text-xs text-[#6B7A65] mt-0.5">Simple, feasible product, service, and hybrid ideas with proven demand.</p>
          </div>
          <Link
            href="/beyond-the-wave"
            className="text-xs font-bold text-[#A77F69] hover:text-[#485344] flex items-center gap-1 transition-colors"
          >
            <span>Beyond the Wave</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DEMO_OPPORTUNITIES.slice(0, 3).map((opp) => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              onSave={() => alert(`Opportunity saved to My Business Canvas!`)}
              onBuild={() => window.location.href = `/builder?source=${opp.id}`}
            />
          ))}
        </div>
      </div>

      {/* Section 3 — Market Watch & Lifecycles */}
      <div className="card-wave p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-bold text-[#485344] flex items-center gap-2">
              <Target size={16} className="text-[#7B8FA3]" />
              <span>Market Watch & Lifecycle States</span>
            </h2>
            <p className="text-xs text-[#6B7A65]">Real-time categorization distinguishing rising, peak, saturated, and evergreen states.</p>
          </div>
          <Link href="/forecast" className="text-xs font-bold text-[#485344] hover:underline">
            Forecast Analysis →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
            <div className="text-[10px] font-bold text-[#7B8FA3] uppercase tracking-wider mb-1">
              Emerging Waves
            </div>
            <div className="text-xl font-extrabold text-[#485344]">{emergingTrends.length}</div>
            <p className="text-[10px] text-[#6B7A65] mt-1">High upside, validation required early.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#E2E9D8]/60 border border-[#B8C8A7]/40">
            <div className="text-[10px] font-bold text-[#485344] uppercase tracking-wider mb-1">
              Rising Momentum
            </div>
            <div className="text-xl font-extrabold text-[#485344]">{risingTrends.length}</div>
            <p className="text-[10px] text-[#6B7A65] mt-1">Optimal market entry window.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#E9C0A8]/40 border border-[#A77F69]/30">
            <div className="text-[10px] font-bold text-[#A77F69] uppercase tracking-wider mb-1">
              Approaching Peak
            </div>
            <div className="text-xl font-extrabold text-[#485344]">{peakTrends.length}</div>
            <p className="text-[10px] text-[#6B7A65] mt-1">Intense competition, niche required.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F3F1E9] border border-[#E5E6DC]">
            <div className="text-[10px] font-bold text-[#7CA982] uppercase tracking-wider mb-1">
              Evergreen Niches
            </div>
            <div className="text-xl font-extrabold text-[#485344]">{evergreenTrends.length}</div>
            <p className="text-[10px] text-[#6B7A65] mt-1">Reliable, constant year-round demand.</p>
          </div>
        </div>
      </div>

      {/* Section 4 & 5 — Workspace + Recommended for You */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Workspace Summary */}
        <div className="lg:col-span-7 card-wave p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-[#A77F69]" />
              <h3 className="text-base font-bold text-[#485344]">Your Business Workspace</h3>
            </div>
            <Link
              href="/canvas"
              className="text-xs font-bold text-[#A77F69] hover:text-[#485344] transition-colors"
            >
              Open All Projects →
            </Link>
          </div>
          <p className="text-xs text-[#6B7A65]">
            Continue building your saved business concepts on My Business Canvas.
          </p>

          <div className="space-y-3 pt-1">
            {recentProjects.map((p) => (
              <div
                key={p.id}
                className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] hover:border-[#B8C8A7] transition-all flex items-center justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#485344]">{p.name}</span>
                    <span className="text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#E2E9D8] text-[#485344]">
                      {p.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-[#8C9886]">
                    <span>Stage: <strong className="text-[#485344]">{p.stage}</strong></span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {p.updatedAt}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <span className="text-xs font-bold text-[#485344]">{p.progress}%</span>
                    <div className="w-16 bg-[#E5E6DC] h-1.5 rounded-full overflow-hidden mt-1">
                      <div className="bg-[#B8C8A7] h-full" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                  <Link
                    href={`/canvas/${p.id}`}
                    className="p-1.5 px-3 rounded-lg bg-[#E2E9D8] hover:bg-[#B8C8A7] text-xs font-bold text-[#485344] transition-colors"
                  >
                    Continue
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/canvas/new"
              className="w-full py-2.5 rounded-xl border-2 border-dashed border-[#B8C8A7] hover:border-[#485344] text-xs font-bold text-[#485344] flex items-center justify-center gap-1.5 transition-colors"
            >
              + Create New Business Project
            </Link>
          </div>
        </div>

        {/* Discover More Callouts */}
        <div className="lg:col-span-5 space-y-4">
          <div className="card-wave p-5 bg-gradient-to-br from-white to-[#E2E9D8]/30 border border-[#B8C8A7]/50">
            <div className="flex items-center gap-2 text-xs font-bold text-[#485344] mb-2">
              <Compass size={16} className="text-[#A77F69]" />
              <span>Beyond the Wave</span>
              <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#E2E9D8] text-[#485344]">PRO</span>
            </div>
            <h4 className="text-sm font-bold text-[#485344]">Uncover Overlooked Opportunities</h4>
            <p className="text-xs text-[#6B7A65] mt-1 leading-relaxed">
              Explore the relationship tree: Main Trend → Customer Need → Accessible Service/Product Idea.
            </p>
            <Link
              href="/beyond-the-wave"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#A77F69] hover:text-[#485344] mt-3"
            >
              <span>Explore Gap Mapping</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="card-wave p-5 bg-gradient-to-br from-white to-[#E9C0A8]/20 border border-[#A77F69]/30">
            <div className="flex items-center gap-2 text-xs font-bold text-[#485344] mb-2">
              <Lightbulb size={16} className="text-[#D4A853]" />
              <span>WAVE Innovate</span>
              <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#E9C0A8] text-[#A77F69]">PRO</span>
            </div>
            <h4 className="text-sm font-bold text-[#485344]">Practical Differentiation Studio</h4>
            <p className="text-xs text-[#6B7A65] mt-1 leading-relaxed">
              Transform standard offerings into unique, high-retention businesses using 8 practical innovation models.
            </p>
            <Link
              href="/innovate"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#A77F69] hover:text-[#485344] mt-3"
            >
              <span>Launch Innovation Studio</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
