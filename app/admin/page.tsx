"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Users,
  CreditCard,
  BarChart3,
  Radio,
  Database,
  Cpu,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Plus
} from "lucide-react";
import { DEMO_TRENDS, DEMO_INDUSTRIES } from "@/lib/data/demo-data";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"analytics" | "users" | "trends" | "data" | "ai">("analytics");

  // Mock platform users
  const [users, setUsers] = useState([
    { id: "u1", name: "Rafi Al Fareza", email: "founder@waveintel.id", tier: "pro", activeProjects: 4, aiUsed: 48, status: "Active" },
    { id: "u2", name: "Anisa Rahma", email: "anisa@startup.id", tier: "premium", activeProjects: 2, aiUsed: 19, status: "Active" },
    { id: "u3", name: "Budi Santoso", email: "budi.umkm@gmail.com", tier: "free", activeProjects: 1, aiUsed: 4, status: "Active" },
    { id: "u4", name: "Dewi Lestari", email: "dewi.creator@yahoo.com", tier: "free", activeProjects: 0, aiUsed: 0, status: "Inactive" },
  ]);

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#485344]">
      {/* Admin Top Header */}
      <header className="bg-white border-b border-[#E5E6DC] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="p-1.5 rounded-lg border border-[#E5E6DC] text-[#6B7A65] hover:bg-[#FAF8F2]"
              title="Return to App"
            >
              <ArrowLeft size={16} />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#485344] text-white flex items-center justify-center font-bold text-xs">
                <ShieldAlert size={16} />
              </div>
              <div>
                <h1 className="text-sm font-bold text-[#485344]">WAVE System Administration</h1>
                <p className="text-[10px] text-[#8C9886]">Environment: Production Master Console</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-[#7CA982] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#7CA982] animate-pulse" />
              API Services Operational
            </span>
            <span className="text-[#8C9886]">|</span>
            <span className="font-bold text-[#485344]">SuperAdmin</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#E5E6DC] pb-2 overflow-x-auto">
          {[
            { id: "analytics", label: "Platform Analytics", icon: BarChart3 },
            { id: "users", label: "User & Subscriptions", icon: Users },
            { id: "trends", label: "Trend Management", icon: Radio },
            { id: "data", label: "Data Freshness & Pipelines", icon: Database },
            { id: "ai", label: "AI Quota & Gateway", icon: Cpu },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-[#485344] text-white shadow-xs"
                    : "text-[#6B7A65] hover:bg-[#F3F1E9]"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: ANALYTICS */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card-wave p-4">
                <div className="text-[10px] font-bold text-[#8C9886] uppercase">Monthly Active Founders</div>
                <div className="text-2xl font-extrabold text-[#485344] mt-1">1,428</div>
                <span className="text-[10px] text-[#7CA982] font-semibold">+18% MoM Growth</span>
              </div>
              <div className="card-wave p-4">
                <div className="text-[10px] font-bold text-[#8C9886] uppercase">Active Paid Subscriptions</div>
                <div className="text-2xl font-extrabold text-[#485344] mt-1">312</div>
                <span className="text-[10px] text-[#7CA982] font-semibold">Rp38.4M MRR</span>
              </div>
              <div className="card-wave p-4">
                <div className="text-[10px] font-bold text-[#8C9886] uppercase">Total Canvas Projects</div>
                <div className="text-2xl font-extrabold text-[#485344] mt-1">3,890</div>
                <span className="text-[10px] text-[#8C9886]">Avg 2.7 per active user</span>
              </div>
              <div className="card-wave p-4">
                <div className="text-[10px] font-bold text-[#8C9886] uppercase">AI Prompts Evaluated</div>
                <div className="text-2xl font-extrabold text-[#485344] mt-1">18,290</div>
                <span className="text-[10px] text-[#8C9886]">99.8% Success Rate</span>
              </div>
            </div>

            <div className="card-wave p-6 space-y-4">
              <h3 className="text-sm font-bold text-[#485344]">System Intelligence Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Database Connections</div>
                  <div className="text-sm font-bold text-[#7CA982] mt-0.5">Healthy (14 / 100 pool)</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Gemini AI Gateway</div>
                  <div className="text-sm font-bold text-[#7CA982] mt-0.5">Latency 420ms (P95)</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC]">
                  <div className="text-[10px] font-bold text-[#8C9886] uppercase">Row Level Security (RLS)</div>
                  <div className="text-sm font-bold text-[#7CA982] mt-0.5">Active &amp; Enforced</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: USERS */}
        {activeTab === "users" && (
          <div className="card-wave p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#485344]">Registered Founders</h3>
                <p className="text-xs text-[#6B7A65]">Manage user tiers, quotas, and account status.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E6DC] text-[#8C9886]">
                    <th className="py-2.5 px-3 font-bold">User Name</th>
                    <th className="py-2.5 px-3 font-bold">Email</th>
                    <th className="py-2.5 px-3 font-bold">Plan Tier</th>
                    <th className="py-2.5 px-3 font-bold">Projects</th>
                    <th className="py-2.5 px-3 font-bold">AI Quota Used</th>
                    <th className="py-2.5 px-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E6DC]">
                  {users.map((u) => (
                    <tr key={u.id}>
                      <td className="py-3 px-3 font-bold text-[#485344]">{u.name}</td>
                      <td className="py-3 px-3 text-[#6B7A65]">{u.email}</td>
                      <td className="py-3 px-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase bg-[#E2E9D8] text-[#485344]">
                          {u.tier}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#485344] font-semibold">{u.activeProjects}</td>
                      <td className="py-3 px-3 text-[#485344]">{u.aiUsed} req</td>
                      <td className="py-3 px-3">
                        <span className="text-[10px] font-bold text-[#7CA982]">{u.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: TREND MANAGEMENT */}
        {activeTab === "trends" && (
          <div className="card-wave p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#485344]">Tracked Market Trends ({DEMO_TRENDS.length})</h3>
                <p className="text-xs text-[#6B7A65]">Inspect and manage trends surfaced to users in WAVE Radar.</p>
              </div>
              <button
                onClick={() => alert("Add custom trend dialog")}
                className="px-3 py-1.5 bg-[#485344] text-white text-xs font-bold rounded-lg flex items-center gap-1.5"
              >
                <Plus size={13} />
                <span>Add Trend</span>
              </button>
            </div>

            <div className="divide-y divide-[#E5E6DC]">
              {DEMO_TRENDS.slice(0, 6).map((t) => (
                <div key={t.id} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#485344]">{t.name}</div>
                    <div className="text-[10px] text-[#8C9886]">
                      {t.industry.name} · Lifecycle: <strong className="uppercase">{t.lifecycle}</strong> · Opportunity Score: {t.opportunity_score}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF8F2] border border-[#E5E6DC] text-[#485344]">
                    {t.data_type.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: DATA FRESHNESS */}
        {activeTab === "data" && (
          <div className="card-wave p-6 space-y-4">
            <h3 className="text-sm font-bold text-[#485344]">Data Sources &amp; Collection Freshness</h3>
            <div className="space-y-3">
              {[
                { source: "Google Trends (Authorized API / Normalized)", status: "Active", updated: "6 hours ago" },
                { source: "TikTok & Instagram Public Sentiment Crawlers", status: "Active", updated: "12 hours ago" },
                { source: "Shopee & Tokopedia Commercial Search Indices", status: "Active", updated: "1 day ago" },
                { source: "BPS Indonesia National Consumption Statistics", status: "Quarterly", updated: "Q3 2024" },
              ].map((s, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#485344]">{s.source}</span>
                    <span className="block text-[10px] text-[#8C9886]">Last Refresh: {s.updated}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#7CA982] flex items-center gap-1">
                    <CheckCircle2 size={12} /> {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: AI GATEWAY */}
        {activeTab === "ai" && (
          <div className="card-wave p-6 space-y-4">
            <h3 className="text-sm font-bold text-[#485344]">Gemini LLM Provider Configuration</h3>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] space-y-2">
                <div className="flex justify-between">
                  <span className="font-bold text-[#485344]">Model Engine:</span>
                  <span className="text-[#8C9886] font-mono">gemini-1.5-pro / gemini-1.5-flash</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#485344]">Server Execution:</span>
                  <span className="text-[#7CA982] font-semibold">Strictly Server-Side Only (No Client Key Leak)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#485344]">Rate Limiting:</span>
                  <span className="text-[#485344]">Token Bucket per User Tier</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
