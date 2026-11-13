"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  Briefcase,
  Compass,
  Layers
} from "lucide-react";
import { DEMO_INDUSTRIES } from "@/lib/data/demo-data";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    goal: "new_business",
    industries: ["food-beverage", "digital-services"],
    businessType: "service",
    capitalRange: "low",
    channel: "online",
    horizon: "long_term",
  });

  const toggleIndustry = (slug: string) => {
    setFormData((prev) => {
      const exists = prev.industries.includes(slug);
      if (exists) {
        return { ...prev, industries: prev.industries.filter((i) => i !== slug) };
      }
      return { ...prev, industries: [...prev.industries, slug] };
    });
  };

  const handleFinish = () => {
    // Save onboarding preferences
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2] flex items-center justify-center p-4">
      <div className="w-full max-w-xl card-wave p-6 sm:p-8 space-y-6">
        {/* Progress header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E6DC]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#485344] text-white flex items-center justify-center text-xs font-bold">
              W
            </div>
            <span className="text-xs font-bold text-[#485344]">WAVE Founder Onboarding</span>
          </div>
          <span className="text-xs font-semibold text-[#8C9886]">
            Step {step} of 3
          </span>
        </div>

        {/* STEP 1: Goal & Business Type */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-bold text-[#485344]">What is your primary entrepreneurial goal?</h2>
              <p className="text-xs text-[#6B7A65]">We will calibrate opportunity scores to fit your profile.</p>
            </div>

            <div className="space-y-2.5">
              {[
                { id: "new_business", title: "Starting a New Business", desc: "Discover fresh, feasible opportunities from scratch." },
                { id: "grow_existing", title: "Growing / Differentiating an Existing Business", desc: "Find new customer segments or practical innovation angles." },
                { id: "side_hustle", title: "Building a Weekend Side Hustle", desc: "Low capex ideas you can run alongside your primary career." },
              ].map((g) => (
                <div
                  key={g.id}
                  onClick={() => setFormData({ ...formData, goal: g.id })}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    formData.goal === g.id
                      ? "bg-[#E2E9D8] border-[#B8C8A7] shadow-xs"
                      : "bg-[#FAF8F2] border-[#E5E6DC] hover:border-[#B8C8A7]"
                  }`}
                >
                  <div className="text-xs font-bold text-[#485344]">{g.title}</div>
                  <div className="text-[11px] text-[#6B7A65] mt-0.5">{g.desc}</div>
                </div>
              ))}
            </div>

            <div>
              <label className="text-xs font-bold text-[#485344] block mb-2">Preferred Business Nature</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "service", label: "Service-Based" },
                  { id: "product", label: "Product-Based" },
                  { id: "hybrid", label: "Hybrid" },
                ].map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, businessType: b.id })}
                    className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all ${
                      formData.businessType === b.id
                        ? "bg-[#485344] text-white border-[#485344]"
                        : "bg-[#FAF8F2] border-[#E5E6DC] text-[#6B7A65]"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Link href="/dashboard" className="text-xs font-bold text-[#8C9886] hover:text-[#485344]">
                Skip Onboarding
              </Link>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 bg-[#485344] text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
              >
                <span>Continue</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Sectors of Interest */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-bold text-[#485344]">Which Indonesian industries are you curious about?</h2>
              <p className="text-xs text-[#6B7A65]">Select 1 to 4 categories for your initial dashboard radar.</p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-1">
              {DEMO_INDUSTRIES.map((ind) => {
                const selected = formData.industries.includes(ind.slug);
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => toggleIndustry(ind.slug)}
                    className={`p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                      selected
                        ? "bg-[#E2E9D8] border-[#B8C8A7] text-[#485344]"
                        : "bg-[#FAF8F2] border-[#E5E6DC] text-[#6B7A65] hover:border-[#B8C8A7]"
                    }`}
                  >
                    <span className="truncate">{ind.name}</span>
                    {selected && <CheckCircle2 size={13} className="text-[#485344] shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-bold text-[#8C9886] hover:text-[#485344]"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-4 py-2 bg-[#485344] text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
              >
                <span>Continue</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Capital and Channels */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-bold text-[#485344]">What is your initial budget and delivery format?</h2>
              <p className="text-xs text-[#6B7A65]">WAVE specializes in accessible opportunities that do not require over-leveraging.</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#485344] block">Approximate Startup Capital</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "low", label: "Low (< Rp5jt)" },
                  { id: "medium", label: "Mid (Rp5-25jt)" },
                  { id: "high", label: "High (> Rp25jt)" },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, capitalRange: c.id })}
                    className={`py-2 px-2.5 rounded-lg text-xs font-bold border transition-all ${
                      formData.capitalRange === c.id
                        ? "bg-[#485344] text-white border-[#485344]"
                        : "bg-[#FAF8F2] border-[#E5E6DC] text-[#6B7A65]"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#485344] block">Primary Sales &amp; Delivery Channel</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "online", label: "Online First" },
                  { id: "offline", label: "Physical Local" },
                  { id: "hybrid", label: "Omnichannel" },
                ].map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, channel: ch.id })}
                    className={`py-2 px-2.5 rounded-lg text-xs font-bold border transition-all ${
                      formData.channel === ch.id
                        ? "bg-[#485344] text-white border-[#485344]"
                        : "bg-[#FAF8F2] border-[#E5E6DC] text-[#6B7A65]"
                    }`}
                  >
                    {ch.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs font-bold text-[#8C9886] hover:text-[#485344]"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleFinish}
                className="px-5 py-2.5 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-xs"
              >
                <Sparkles size={14} className="text-[#E9C0A8]" />
                <span>Launch My Dashboard</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
