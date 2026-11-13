"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Hammer,
  Sparkles,
  Save,
  Download,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  TrendingUp,
  FileText,
  Users,
  Layers,
  Truck,
  Target,
  Megaphone,
  Calculator,
  RefreshCw
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataDisclaimer } from "@/components/shared/DataLabel";
import { formatCurrency } from "@/lib/utils";

export default function BuilderPage() {
  const [activeSection, setActiveSection] = useState(1);
  const [saveStatus, setSaveStatus] = useState("All changes saved");

  // Section 1: Business Overview
  const [overview, setOverview] = useState({
    businessName: "DapoerHijau",
    tagline: "Fresh, healthy, zero-waste weekday meals delivered to your desk.",
    businessType: "service",
    revenueModel: "Weekly Subscription (5 Lunches / week)",
    valueProp: "Nutrient-dense Indonesian meals cooked with local organic ingredients and zero single-use plastic.",
  });

  // Section 6: Financial Modeling Inputs (Real formulas!)
  const [financials, setFinancials] = useState({
    pricePerPackage: 225000, // Rp225k per week (5 meals @ Rp45k)
    cogsPerPackage: 95000,   // Ingredients & packaging per week
    monthlyFixedCost: 3500000, // Kitchen rent share, basic utilities, tools
    targetSubscribers: 50,
  });

  // Real formula calculations
  const grossProfitPerPackage = financials.pricePerPackage - financials.cogsPerPackage;
  const grossMargin = Math.round((grossProfitPerPackage / financials.pricePerPackage) * 100);
  const monthlyRevenue = financials.pricePerPackage * financials.targetSubscribers * 4; // 4 weeks
  const monthlyCogs = financials.cogsPerPackage * financials.targetSubscribers * 4;
  const monthlyGrossProfit = monthlyRevenue - monthlyCogs;
  const monthlyNetProfit = monthlyGrossProfit - financials.monthlyFixedCost;
  const breakEvenPackages = Math.ceil(financials.monthlyFixedCost / grossProfitPerPackage);
  const breakEvenSubscribers = Math.ceil(breakEvenPackages / 4);

  const sections = [
    { id: 1, title: "1. Business Overview", icon: FileText, completed: true },
    { id: 2, title: "2. Product / Service Scope", icon: Layers, completed: true },
    { id: 3, title: "3. Customer Persona", icon: Users, completed: true },
    { id: 4, title: "4. Market & Competitors", icon: Target, completed: false },
    { id: 5, title: "5. Business Model Canvas", icon: Layers, completed: false },
    { id: 6, title: "6. Pricing & Financials", icon: Calculator, completed: true },
    { id: 7, title: "7. Branding & Marketing", icon: Megaphone, completed: false },
    { id: 8, title: "8. Operational Plan", icon: Truck, completed: false },
    { id: 9, title: "9. Complete Business Plan", icon: Download, completed: false },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Top Bar with export and status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E9C0A8] text-[#A77F69] uppercase">
              PRO STUDIO
            </span>
            <span className="text-xs text-[#7CA982] flex items-center gap-1 font-semibold">
              <CheckCircle2 size={12} /> {saveStatus}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#485344] mt-1">
            WAVE Builder Studio
          </h1>
          <p className="text-xs text-[#6B7A65]">
            Structure your business concept into an investor-ready plan and robust unit economics model.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSaveStatus("Saving...");
              setTimeout(() => setSaveStatus("Saved just now"), 500);
            }}
            className="px-3.5 py-2 bg-white border border-[#E5E6DC] hover:bg-[#FAF8F2] text-xs font-bold text-[#485344] rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Save size={13} />
            <span>Save Draft</span>
          </button>

          <button
            onClick={() => alert("Exporting compiled business plan as PDF...")}
            className="px-4 py-2 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Download size={13} />
            <span>Export Plan (PDF)</span>
          </button>
        </div>
      </div>

      <DataDisclaimer type="demo" />

      {/* 3-Column Studio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Sections Navigation */}
        <div className="lg:col-span-3 card-wave p-4 space-y-2 sticky top-20">
          <div className="text-[10px] font-bold text-[#8C9886] uppercase tracking-wider px-2 mb-2">
            Planning Modules
          </div>

          {sections.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[#E2E9D8] text-[#485344] shadow-xs"
                    : "text-[#6B7A65] hover:bg-[#F3F1E9] hover:text-[#485344]"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Icon size={14} className={isActive ? "text-[#485344]" : "text-[#8C9886]"} />
                  <span className="truncate">{sec.title}</span>
                </div>
                {sec.completed && (
                  <CheckCircle2 size={13} className="text-[#7CA982] shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Center Column: Active Section Editor */}
        <div className="lg:col-span-6 card-wave p-6 space-y-6">
          {/* Section 1: Overview */}
          {activeSection === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#485344]">1. Business Overview</h3>
                <p className="text-xs text-[#6B7A65]">Define the core identity, business type, and primary value hook.</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-[#485344] block mb-1">Business Name</label>
                  <input
                    type="text"
                    value={overview.businessName}
                    onChange={(e) => setOverview({ ...overview, businessName: e.target.value })}
                    className="w-full p-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-bold text-[#485344]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#485344] block mb-1">Tagline</label>
                  <input
                    type="text"
                    value={overview.tagline}
                    onChange={(e) => setOverview({ ...overview, tagline: e.target.value })}
                    className="w-full p-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs text-[#6B7A65]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#485344] block mb-1">Business Model Type</label>
                  <select
                    value={overview.businessType}
                    onChange={(e) => setOverview({ ...overview, businessType: e.target.value })}
                    className="w-full p-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-semibold text-[#485344]"
                  >
                    <option value="service">Service-Based Business</option>
                    <option value="product">Physical Product Business</option>
                    <option value="hybrid">Hybrid (Product + Service)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#485344] block mb-1">Value Proposition Statement</label>
                  <textarea
                    rows={3}
                    value={overview.valueProp}
                    onChange={(e) => setOverview({ ...overview, valueProp: e.target.value })}
                    className="w-full p-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs text-[#485344]"
                  />
                </div>
              </div>

              <button
                onClick={() => setActiveSection(2)}
                className="px-4 py-2 bg-[#485344] text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
              >
                <span>Save &amp; Continue to Scope</span>
                <ChevronRight size={14} />
              </button>
            </div>
          )}

          {/* Section 6: Financial Planning (Real formulas) */}
          {activeSection === 6 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#485344]">6. Pricing, COGS &amp; Unit Economics</h3>
                <p className="text-xs text-[#6B7A65]">Real mathematical calculation of margins, monthly profit, and break-even scale.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-[#485344] block mb-1">
                    Selling Price per Package / Week (Rp)
                  </label>
                  <input
                    type="number"
                    value={financials.pricePerPackage}
                    onChange={(e) => setFinancials({ ...financials, pricePerPackage: Number(e.target.value) })}
                    className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#485344] block mb-1">
                    COGS &amp; Materials per Package (Rp)
                  </label>
                  <input
                    type="number"
                    value={financials.cogsPerPackage}
                    onChange={(e) => setFinancials({ ...financials, cogsPerPackage: Number(e.target.value) })}
                    className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#485344] block mb-1">
                    Monthly Fixed Overhead (Rent, Tools, Ads) (Rp)
                  </label>
                  <input
                    type="number"
                    value={financials.monthlyFixedCost}
                    onChange={(e) => setFinancials({ ...financials, monthlyFixedCost: Number(e.target.value) })}
                    className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#485344] block mb-1">
                    Target Active Weekly Subscribers
                  </label>
                  <input
                    type="number"
                    value={financials.targetSubscribers}
                    onChange={(e) => setFinancials({ ...financials, targetSubscribers: Number(e.target.value) })}
                    className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-bold"
                  />
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#E5E6DC] space-y-3">
                <div className="text-[10px] font-bold text-[#8C9886] uppercase tracking-wider">
                  Automated Unit Economics Projections
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-[#E5E6DC]">
                    <div className="text-[10px] text-[#8C9886]">Gross Margin</div>
                    <div className="text-lg font-extrabold text-[#7CA982]">{grossMargin}%</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#E5E6DC]">
                    <div className="text-[10px] text-[#8C9886]">Break-Even Subscribers</div>
                    <div className="text-lg font-extrabold text-[#485344]">{breakEvenSubscribers} clients</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#E5E6DC]">
                    <div className="text-[10px] text-[#8C9886]">Projected Monthly Net Profit</div>
                    <div className="text-lg font-extrabold text-[#485344]">
                      {formatCurrency(monthlyNetProfit)}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-[#6B7A65] pt-1">
                  At <strong>{financials.targetSubscribers} active clients</strong>, you generate{" "}
                  <strong>{formatCurrency(monthlyRevenue)}</strong> in monthly revenue with{" "}
                  <strong>{formatCurrency(monthlyGrossProfit)}</strong> gross profit.
                </div>
              </div>
            </div>
          )}

          {/* Sections other than 1 and 6 show standard workspace */}
          {activeSection !== 1 && activeSection !== 6 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-[#485344]">
                  {sections.find((s) => s.id === activeSection)?.title}
                </h3>
                <p className="text-xs text-[#6B7A65]">
                  Workspace loaded from your Business Canvas research attachments.
                </p>
              </div>

              <textarea
                rows={8}
                defaultValue={`Section details and actionable parameters for ${sections.find((s) => s.id === activeSection)?.title}. You can customize operational milestones, customer acquisition channels, and partner requirements here.`}
                className="w-full p-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs text-[#485344] leading-relaxed"
              />

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert("Section saved successfully!")}
                  className="px-4 py-2 bg-[#485344] text-white text-xs font-bold rounded-xl"
                >
                  Save Section
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: AI Assistant Panel */}
        <div className="lg:col-span-3 card-wave p-5 space-y-4 sticky top-20 bg-gradient-to-br from-white to-[#FAF8F2]">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#A77F69]" />
            <h3 className="text-xs font-bold text-[#485344]">Contextual AI Advisor</h3>
          </div>

          <div className="p-3 rounded-xl bg-[#E2E9D8]/50 border border-[#B8C8A7] space-y-1.5 text-xs">
            <span className="text-[10px] font-bold text-[#485344] uppercase">Margin Recommendation</span>
            <p className="text-[11px] text-[#485344] leading-relaxed">
              Your {grossMargin}% gross margin is healthy for Indonesian F&amp;B prep services. To hedge food inflation, consider seasonal ingredient swaps every quarter.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#E5E6DC] space-y-1.5 text-xs">
            <span className="text-[10px] font-bold text-[#8C9886] uppercase">CAC Optimization</span>
            <p className="text-[11px] text-[#6B7A65] leading-relaxed">
              Target office clusters in Kuningan &amp; Sudirman with corporate group discounts (e.g. 3 colleagues order together = free weekly delivery).
            </p>
          </div>

          <button
            onClick={() => alert("WAVE AI regenerated contextual suggestions!")}
            className="w-full py-2 bg-[#FAF8F2] border border-[#E5E6DC] hover:bg-[#E2E9D8] text-[11px] font-bold text-[#485344] rounded-xl flex items-center justify-center gap-1.5 transition-colors"
          >
            <RefreshCw size={12} />
            <span>Generate New Suggestions</span>
          </button>
        </div>
      </div>
    </div>
  );
}
