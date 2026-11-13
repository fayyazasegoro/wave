"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Radio, SlidersHorizontal, Check } from "lucide-react";
import { DEMO_TRENDS, DEMO_INDUSTRIES } from "@/lib/data/demo-data";
import { TrendCard } from "@/components/shared/TrendCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataDisclaimer } from "@/components/shared/DataLabel";
import type { Lifecycle } from "@/types";

export default function RadarPage() {
  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedLifecycle, setSelectedLifecycle] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"all" | "rising" | "emerging" | "peak" | "evergreen">("all");

  const filteredTrends = useMemo(() => {
    return DEMO_TRENDS.filter((t) => {
      const matchSearch =
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.industry.name.toLowerCase().includes(search.toLowerCase());

      const matchIndustry = selectedIndustry === "all" || t.industry.slug === selectedIndustry;

      const matchLifecycle =
        selectedLifecycle === "all" || t.lifecycle === selectedLifecycle;

      const matchTab = activeTab === "all" || t.lifecycle === activeTab;

      return matchSearch && matchIndustry && matchLifecycle && matchTab;
    });
  }, [search, selectedIndustry, selectedLifecycle, activeTab]);

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <PageHeader
        title="WAVE Radar"
        subtitle="Discover categories and consumer trends rising across the Indonesian market before they reach peak saturation."
        badge="Market Signals"
      />

      <DataDisclaimer type="demo" />

      {/* Search & Filter Bar */}
      <div className="card-wave p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C9886]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by trend keyword, sector, or concept..."
              className="w-full pl-9 pr-4 py-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs sm:text-sm text-[#485344] placeholder:text-[#8C9886] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {/* Industry Filter dropdown */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="py-2 px-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-semibold text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            >
              <option value="all">All Industries</option>
              {DEMO_INDUSTRIES.map((ind) => (
                <option key={ind.id} value={ind.slug}>
                  {ind.name}
                </option>
              ))}
            </select>

            {/* Lifecycle Filter dropdown */}
            <select
              value={selectedLifecycle}
              onChange={(e) => setSelectedLifecycle(e.target.value)}
              className="py-2 px-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-semibold text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            >
              <option value="all">All Lifecycles</option>
              <option value="emerging">Emerging</option>
              <option value="rising">Rising</option>
              <option value="peak">At Peak</option>
              <option value="saturated">Saturated</option>
              <option value="evergreen">Evergreen</option>
            </select>
          </div>
        </div>

        {/* Quick Lifecycle Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-[#E5E6DC]">
          {[
            { id: "all", label: `All Trends (${DEMO_TRENDS.length})` },
            { id: "rising", label: "Rising Right Now" },
            { id: "emerging", label: "Emerging Signals" },
            { id: "peak", label: "Approaching Peak" },
            { id: "evergreen", label: "Evergreen Markets" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-[#485344] text-white shadow-xs"
                  : "bg-transparent text-[#6B7A65] hover:bg-[#F3F1E9] hover:text-[#485344]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Trend Cards Grid */}
      {filteredTrends.length === 0 ? (
        <div className="card-wave p-12 text-center space-y-3">
          <Radio size={32} className="mx-auto text-[#8C9886]" />
          <h3 className="text-base font-bold text-[#485344]">No trends matched your filter</h3>
          <p className="text-xs text-[#6B7A65]">Try clearing search keywords or switching industries.</p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedIndustry("all");
              setSelectedLifecycle("all");
              setActiveTab("all");
            }}
            className="px-3 py-1.5 bg-[#E2E9D8] text-[#485344] text-xs font-bold rounded-lg hover:bg-[#B8C8A7]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredTrends.map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>
      )}
    </div>
  );
}
