"use client";

import { useState } from "react";
import {
  CreditCard,
  CheckCircle2,
  Crown,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock
} from "lucide-react";
import { SUBSCRIPTION_PLANS } from "@/lib/data/demo-data";
import { PageHeader } from "@/components/shared/PageHeader";

export default function SubscriptionPage() {
  const [currentTier, setCurrentTier] = useState<"free" | "premium" | "pro">("free");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const handleSelectPlan = (tier: "free" | "premium" | "pro") => {
    if (tier === currentTier) {
      alert("You are already on this plan.");
      return;
    }
    setCurrentTier(tier);
    setModalMessage(
      `Plan successfully updated to ${tier.toUpperCase()} in test environment! Backend entitlements applied.`
    );
  };

  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="Subscription & Quotas"
        subtitle="Manage your platform tier, review quota utilization, and adjust computational intelligence limits."
        badge="Billing & Entitlements"
      />

      {modalMessage && (
        <div className="p-4 rounded-xl bg-[#7CA982]/15 border border-[#7CA982]/30 flex items-center justify-between text-xs font-semibold text-[#485344]">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#7CA982]" />
            <span>{modalMessage}</span>
          </div>
          <button
            onClick={() => setModalMessage(null)}
            className="text-[#8C9886] hover:text-[#485344] font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Current Plan Overview Card */}
      <div className="card-wave p-6 bg-gradient-to-r from-white via-[#FAF8F2] to-[#E2E9D8]/50 border-l-4 border-l-[#D4A853]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Crown size={18} className="text-[#D4A853]" />
              <span className="text-xs font-bold text-[#8C9886] uppercase">Current Active Plan</span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#485344] uppercase">
              {currentTier} Tier
            </h2>
            <p className="text-xs text-[#6B7A65]">
              Renewing next on December 1, 2026. Test sandbox subscription active.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-white rounded-xl border border-[#E5E6DC]">
              <div className="text-[10px] text-[#8C9886] font-bold">AI Quota</div>
              <div className="text-sm font-extrabold text-[#485344]">
                {currentTier === "free" ? "4 / 10" : currentTier === "premium" ? "22 / 100" : "48 / 500"}
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#E5E6DC]">
              <div className="text-[10px] text-[#8C9886] font-bold">Saved Trends</div>
              <div className="text-sm font-extrabold text-[#485344]">
                {currentTier === "free" ? "3 / 10" : "18 / 50"}
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#E5E6DC]">
              <div className="text-[10px] text-[#8C9886] font-bold">Canvas Projects</div>
              <div className="text-sm font-extrabold text-[#485344]">
                {currentTier === "free" ? "4 / 5" : "12 / 20"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {SUBSCRIPTION_PLANS.map((plan) => {
          const isCurrent = currentTier === plan.tier;
          return (
            <div
              key={plan.id}
              className={`card-wave p-6 flex flex-col justify-between space-y-6 relative transition-all ${
                plan.highlighted
                  ? "border-2 border-[#B8C8A7] shadow-card"
                  : isCurrent
                  ? "border-2 border-[#485344]"
                  : ""
              }`}
            >
              {isCurrent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#485344] text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full tracking-wider">
                  Current Plan
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#485344]">{plan.name}</h3>
                  <span className="text-xs text-[#8C9886]">{plan.tagline}</span>
                </div>

                <div className="my-4">
                  <span className="text-3xl font-extrabold text-[#485344]">
                    {plan.price_idr === 0 ? "Free" : `Rp${plan.price_idr.toLocaleString("id-ID")}`}
                  </span>
                  {plan.price_idr > 0 && <span className="text-xs text-[#8C9886]"> / month</span>}
                </div>

                <div className="space-y-2 pt-3 border-t border-[#E5E6DC]">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#6B7A65]">
                      <CheckCircle2 size={13} className="text-[#7CA982] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelectPlan(plan.tier)}
                disabled={isCurrent}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isCurrent
                    ? "bg-[#FAF8F2] text-[#8C9886] border border-[#E5E6DC] cursor-default"
                    : plan.highlighted
                    ? "bg-[#485344] text-white hover:bg-[#384235]"
                    : "bg-[#E2E9D8] text-[#485344] hover:bg-[#B8C8A7]"
                }`}
              >
                {isCurrent ? "Active Plan" : `Upgrade to ${plan.name}`}
              </button>
            </div>
          );
        })}
      </div>

      {/* Data Preservation Assurance */}
      <div className="card-wave p-5 bg-[#FAF8F2] border-l-4 border-l-[#A77F69] space-y-1">
        <h4 className="text-xs font-bold text-[#485344] flex items-center gap-1.5">
          <ShieldCheck size={15} className="text-[#A77F69]" />
          <span>WAVE Data Guarantee: Your Saved Work is Never Lost</span>
        </h4>
        <p className="text-xs text-[#6B7A65] leading-relaxed">
          If your subscription tier ever lapses or is downgraded, all your business projects, canvas notes, and financial models remain 100% accessible with permanent read and export access.
        </p>
      </div>
    </div>
  );
}
