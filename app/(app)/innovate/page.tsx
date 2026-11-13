"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Lightbulb,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Zap,
  CheckCircle2,
  Copy,
  Layers,
  Search,
  Filter,
  SlidersHorizontal,
  Bookmark
} from "lucide-react";
import { DEMO_TRENDS, DEMO_INNOVATIONS } from "@/lib/data/demo-data";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataDisclaimer } from "@/components/shared/DataLabel";
import { getFeasibilityClass, getFeasibilityLabel, getCapitalLabel } from "@/lib/utils";
import type { InnovationSuggestion } from "@/types";

export default function InnovatePage() {
  const [activeTab, setActiveTab] = useState<"catalog" | "generator" | "competitors" | "usp">("catalog");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [businessType, setBusinessType] = useState<"all" | "product" | "service" | "hybrid">("all");

  // USP Generator state
  const [uspInput, setUspInput] = useState({
    businessName: "DapoerHijau",
    productService: "Healthy Meal Prep Subscription",
    targetAudience: "Busy urban corporate workers & young parents",
    coreProblem: "No time to cook balanced meals; daily delivery apps are oily and expensive",
    keyAdvantage: "100% locally-sourced organic vegetables, compostable cassava packaging, customized macros",
  });
  const [generatedUsp, setGeneratedUsp] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const categories = [
    "Product Improvement",
    "Service Innovation",
    "Business Model Innovation",
    "Customer Experience",
    "Niche Market",
    "Packaging and Bundling",
    "Digital Enablement",
    "Distribution Innovation",
  ];

  const handleGenerateUSP = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedUsp({
        headline: "Nourish Your Body Without Sacrificing Your Time.",
        usp: "Indonesia's first zero-guilt, zero-waste weekday meal subscription—curated with seasonal local harvests and tailored to your daily health goals.",
        differentiator: "Unlike generic catering, we track your nutritional preference, deliver in zero-plastic cassava packages, and allow 1-click WhatsApp pauses.",
        reasonToBuy: "Save 7 hours per week while eating chef-crafted, dietitian-verified local superfoods for less than Rp45.000 per meal.",
        targetPitch: "For busy urban professionals who care about wellness and the planet but have zero time to grocery shop.",
      });
      setIsGenerating(false);
    }, 800);
  };

  const filteredInnovations = DEMO_INNOVATIONS.filter((i) => {
    const matchCat = selectedCategory === "all" || i.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchType = businessType === "all" || i.business_type === businessType;
    return matchCat && matchType;
  });

  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="WAVE Innovate"
        subtitle="Practical differentiation studio: upgrade existing offerings, optimize customer journeys, and package higher-margin value propositions."
        badge="Innovation Studio"
      />

      <DataDisclaimer type="demo" />

      {/* Main Studio Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E5E6DC] pb-1 overflow-x-auto">
        {[
          { id: "catalog", label: "Practical Innovation Blueprints", icon: Layers },
          { id: "generator", label: "Concept Ideation Sandbox", icon: Sparkles },
          { id: "competitors", label: "Competitor Intelligence & Gaps", icon: Search },
          { id: "usp", label: "Automated USP Generator", icon: Zap },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-[#485344] text-white shadow-xs"
                  : "bg-transparent text-[#6B7A65] hover:bg-[#F3F1E9] hover:text-[#485344]"
              }`}
            >
              <Icon size={14} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: INNOVATION CATALOG */}
      {activeTab === "catalog" && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="card-wave p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-xs font-semibold text-[#8C9886]">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-1.5 px-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-lg text-xs font-bold text-[#485344]"
              >
                <option value="all">All 8 Innovation Models</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-[#8C9886]">Model:</span>
              {(["all", "product", "service", "hybrid"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setBusinessType(t)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                    businessType === t
                      ? "bg-[#E2E9D8] text-[#485344] border border-[#B8C8A7]"
                      : "text-[#6B7A65] hover:bg-[#F3F1E9]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredInnovations.map((inv) => (
              <div key={inv.id} className="card-wave p-5 flex flex-col justify-between space-y-4 hover:border-[#B8C8A7] transition-all">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#A77F69] bg-[#E9C0A8]/30 px-2 py-0.5 rounded">
                      {inv.category}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getFeasibilityClass(inv.feasibility_level)}`}>
                      {getFeasibilityLabel(inv.feasibility_level)}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#485344]">{inv.name}</h3>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#8C9886] block">Unmet Problem:</span>
                      <p className="text-[#6B7A65] mt-0.5">{inv.customer_problem}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#8C9886] block">Practical Solution:</span>
                      <p className="text-[#485344] mt-0.5 font-medium">{inv.proposed_solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E6DC] flex items-center justify-between text-[11px]">
                  <span className="text-[#8C9886]">Capital: {getCapitalLabel(inv.capital_category)}</span>
                  <Link
                    href={`/builder?inv=${inv.id}`}
                    className="text-xs font-bold text-[#485344] hover:underline flex items-center gap-1"
                  >
                    <span>Adopt Blueprint</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: CONCEPT IDEATION SANDBOX */}
      {activeTab === "generator" && (
        <div className="card-wave p-6 space-y-6">
          <div>
            <h3 className="text-base font-bold text-[#485344]">Generate Practical Innovations for Any Business Idea</h3>
            <p className="text-xs text-[#6B7A65]">
              Input an existing commodity service or product, and WAVE AI will return 3 high-margin differentiation angles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#485344] block mb-1">Target Sector / Commodity</label>
              <input
                type="text"
                defaultValue="Home Cleaning & Maintenance"
                className="w-full p-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344] focus:ring-2 focus:ring-[#B8C8A7] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#485344] block mb-1">Customer Friction / Frustration</label>
              <input
                type="text"
                defaultValue="Unreliable cleaners, chemical smell, trust issues leaving strangers at home"
                className="w-full p-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344] focus:ring-2 focus:ring-[#B8C8A7] focus:outline-none"
              />
            </div>
          </div>

          <button
            onClick={() => alert("AI Innovation Ideas generated based on your inputs!")}
            className="px-4 py-2.5 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2"
          >
            <Sparkles size={14} className="text-[#E9C0A8]" />
            <span>Generate 3 Feasible Innovation Angles</span>
          </button>

          {/* Result preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#E5E6DC]">
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] space-y-2">
              <span className="text-[10px] font-bold text-[#7CA982] uppercase">1. Quick Win</span>
              <h4 className="text-xs font-bold text-[#485344]">Pet-Safe &amp; Baby-Safe Organic Cleaning</h4>
              <p className="text-[11px] text-[#6B7A65]">Only certified hypoallergenic solutions. Send photos of completion checklist via WhatsApp.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] space-y-2">
              <span className="text-[10px] font-bold text-[#A77F69] uppercase">2. Strategic Improvement</span>
              <h4 className="text-xs font-bold text-[#485344]">Assigned Caretaker Subscription</h4>
              <p className="text-[11px] text-[#6B7A65]">Lock in the same background-checked helper every Tuesday and Friday. 40% higher retention.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] space-y-2">
              <span className="text-[10px] font-bold text-[#7B8FA3] uppercase">3. Business Model</span>
              <h4 className="text-xs font-bold text-[#485344]">Move-In / Move-Out Turnkey Bundle</h4>
              <p className="text-[11px] text-[#6B7A65]">Target apartment tenants with a flat-rate Deep Cleaning + AC Servicing combined package.</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COMPETITOR INTELLIGENCE */}
      {activeTab === "competitors" && (
        <div className="card-wave p-6 space-y-6">
          <div>
            <h3 className="text-base font-bold text-[#485344]">Competitor Gap Finder</h3>
            <p className="text-xs text-[#6B7A65]">
              Identify weak spots in incumbent market offerings so your business doesn't compete on price alone.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#E5E6DC] text-[#8C9886]">
                  <th className="py-2.5 px-3 font-bold">Incumbent Competitor</th>
                  <th className="py-2.5 px-3 font-bold">Their Positioning</th>
                  <th className="py-2.5 px-3 font-bold">Observed Weakness / Customer Complaints</th>
                  <th className="py-2.5 px-3 font-bold text-[#485344]">Your WAVE Opportunity Gap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E6DC]">
                <tr>
                  <td className="py-3 px-3 font-bold text-[#485344]">Mass Food Delivery Apps</td>
                  <td className="py-3 px-3 text-[#6B7A65]">Speed &amp; massive discount vouchers</td>
                  <td className="py-3 px-3 text-[#C17A6E]">High delivery fees, inconsistent nutrition, excess plastic waste</td>
                  <td className="py-3 px-3 font-bold text-[#7CA982]">Zero-waste scheduled weekly subscription</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-[#485344]">Big National Bimbel Chains</td>
                  <td className="py-3 px-3 text-[#6B7A65]">Prestige &amp; high volume physical centers</td>
                  <td className="py-3 px-3 text-[#C17A6E]">Expensive long term contracts (Rp10jt+), rigid curriculum</td>
                  <td className="py-3 px-3 font-bold text-[#7CA982]">Short 4-week exam sprint packages on-demand</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-bold text-[#485344]">Commercial Pet Boarding</td>
                  <td className="py-3 px-3 text-[#6B7A65]">Facility cages &amp; group holding</td>
                  <td className="py-3 px-3 text-[#C17A6E]">Pet stress from unfamiliar dogs, kennel cough risk</td>
                  <td className="py-3 px-3 font-bold text-[#7CA982]">In-home daily visit sitting with live video updates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: AUTOMATED USP GENERATOR */}
      {activeTab === "usp" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-6 card-wave p-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-[#485344]">Unique Selling Proposition (USP) Studio</h3>
              <p className="text-xs text-[#6B7A65]">Fill in the basic parameters to generate a clear, compelling value proposition.</p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-[#485344] block mb-1">Business Name</label>
                <input
                  type="text"
                  value={uspInput.businessName}
                  onChange={(e) => setUspInput({ ...uspInput, businessName: e.target.value })}
                  className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#485344] block mb-1">Product or Service Scope</label>
                <input
                  type="text"
                  value={uspInput.productService}
                  onChange={(e) => setUspInput({ ...uspInput, productService: e.target.value })}
                  className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#485344] block mb-1">Target Customer</label>
                <input
                  type="text"
                  value={uspInput.targetAudience}
                  onChange={(e) => setUspInput({ ...uspInput, targetAudience: e.target.value })}
                  className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#485344] block mb-1">Customer Problem Solved</label>
                <textarea
                  rows={2}
                  value={uspInput.coreProblem}
                  onChange={(e) => setUspInput({ ...uspInput, coreProblem: e.target.value })}
                  className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#485344] block mb-1">Key Unfair Advantage / Feature</label>
                <textarea
                  rows={2}
                  value={uspInput.keyAdvantage}
                  onChange={(e) => setUspInput({ ...uspInput, keyAdvantage: e.target.value })}
                  className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-lg text-xs"
                />
              </div>

              <button
                onClick={handleGenerateUSP}
                disabled={isGenerating}
                className="w-full py-2.5 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Sparkles size={14} className="text-[#E9C0A8]" />
                <span>{isGenerating ? "Synthesizing USP..." : "Generate Distinctive USP & Pitch"}</span>
              </button>
            </div>
          </div>

          {/* Output Preview */}
          <div className="lg:col-span-6 card-wave p-6 space-y-5 bg-gradient-to-br from-white to-[#FAF8F2]">
            <div>
              <span className="text-[10px] font-bold text-[#A77F69] uppercase tracking-wider">Generated Brand Blueprint</span>
              <h3 className="text-base font-bold text-[#485344] mt-0.5">Value Proposition &amp; Pitch Assets</h3>
            </div>

            {generatedUsp ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-[#E5E6DC] space-y-1">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Main Headline</div>
                  <div className="text-sm font-extrabold text-[#485344]">{generatedUsp.headline}</div>
                </div>

                <div className="p-4 rounded-xl bg-[#E2E9D8]/50 border border-[#B8C8A7] space-y-1">
                  <div className="text-[10px] font-bold text-[#485344] uppercase">Unique Selling Proposition (USP)</div>
                  <p className="text-xs font-semibold text-[#485344] leading-relaxed">{generatedUsp.usp}</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E6DC] space-y-1">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Competitive Differentiator</div>
                  <p className="text-xs text-[#6B7A65] leading-relaxed">{generatedUsp.differentiator}</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E6DC] space-y-1">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Customer Reason to Choose</div>
                  <p className="text-xs text-[#6B7A65] leading-relaxed">{generatedUsp.reasonToBuy}</p>
                </div>

                <button
                  onClick={() => alert("Copied USP to clipboard and saved to My Business Canvas!")}
                  className="w-full py-2 bg-[#FAF8F2] border border-[#E5E6DC] hover:bg-[#E2E9D8] text-xs font-bold text-[#485344] rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Bookmark size={13} />
                  <span>Attach to My Business Canvas</span>
                </button>
              </div>
            ) : (
              <div className="py-16 text-center text-xs text-[#8C9886] space-y-2">
                <Zap size={24} className="mx-auto text-[#B8C8A7]" />
                <p>Click "Generate Distinctive USP" to construct your value proposition messaging.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
