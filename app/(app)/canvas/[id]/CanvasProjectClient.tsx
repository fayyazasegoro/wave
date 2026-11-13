"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Save,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
  BookOpen,
  Target,
  DollarSign,
  Users,
  Megaphone,
  Truck,
  Compass,
  Lightbulb,
  Radio,
  FileText
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataDisclaimer } from "@/components/shared/DataLabel";

export default function CanvasProjectClient({ initialId }: { initialId?: string }) {
  const params = useParams();
  const id = (initialId || (params?.id as string)) || "proj-1";

  const [activeSectionId, setActiveSectionId] = useState(1);
  const [saveMessage, setSaveMessage] = useState("All changes auto-saved");

  // 15 Canvas Sections defined in Part 15
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "1. Business Idea",
      status: "completed",
      content: "Eco-friendly healthy weekday meal prep subscription targeting urban office workers in Jakarta, utilizing 100% locally-sourced ingredients and compostable packaging.",
    },
    {
      id: 2,
      title: "2. Market Research",
      status: "completed",
      content: "Attached Wave Radar Trend: 'Healthy Meal Prep Services' (+48% MoM demand, Rising lifecycle). Urban health consciousness accelerating post-pandemic.",
    },
    {
      id: 3,
      title: "3. Target Customer",
      status: "completed",
      content: "Tier-1 city corporate professionals, age 24-38, spending Rp40k-Rp70k daily on lunch, frustrated with high delivery app surcharges and greasy food.",
    },
    {
      id: 4,
      title: "4. Customer Problem",
      status: "completed",
      content: "Lack of time to meal prep on weeknights; office lunch canteens lack balanced macros; commercial delivery apps generate excess plastic trash.",
    },
    {
      id: 5,
      title: "5. Value Proposition",
      status: "completed",
      content: "Delicious, dietitian-approved Indonesian lunch delivered to your office lobby before 11:30 AM every weekday—zero plastic waste, zero guilt.",
    },
    {
      id: 6,
      title: "6. Product / Service Concept",
      status: "in_progress",
      content: "5-meal weekly subscription with 2 daily choice rotations (High Protein or Vegan Fiber). Delivery in reusable thermal totes.",
    },
    {
      id: 7,
      title: "7. Innovation Blueprint",
      status: "in_progress",
      content: "Adopted WAVE Innovate Blueprint: Cassava bio-packaging + weekly WhatsApp 1-click delivery schedule adjustor.",
    },
    {
      id: 8,
      title: "8. Competitor Analysis",
      status: "in_progress",
      content: "Incumbent caterers require monthly lock-ins and deliver oily food. App delivery adds Rp20k extra in service/delivery surcharges per meal.",
    },
    {
      id: 9,
      title: "9. USP & Differentiation",
      status: "draft",
      content: "First corporate cluster-drop model: 3 coworkers ordering in the same building triggers free delivery + 10% cash rebate.",
    },
    {
      id: 10,
      title: "10. Business Model",
      status: "draft",
      content: "Direct-to-consumer recurring weekly billing. Target gross margin: 55%.",
    },
    {
      id: 11,
      title: "11. Pricing Structure",
      status: "draft",
      content: "Rp225.000 / week (Rp45.000 / lunch inclusive of cluster delivery).",
    },
    {
      id: 12,
      title: "12. Financial Planning",
      status: "draft",
      content: "Break-even at 25 active subscribers (approx. 5 office clusters).",
    },
    {
      id: 13,
      title: "13. Marketing Channels",
      status: "draft",
      content: "Instagram reels showing behind-the-scenes meal prep; LinkedIn corporate wellness partnerships; sample lunch drops to HR teams.",
    },
    {
      id: 14,
      title: "14. Operations Plan",
      status: "draft",
      content: "Shared cloud kitchen rental in Setiabudi (Jakarta Selatan); 2 prep cooks; 1 dedicated route delivery driver.",
    },
    {
      id: 15,
      title: "15. Launch Roadmap",
      status: "draft",
      content: "Stage 3 active: 10-person pilot testing beginning next Monday.",
    },
  ]);

  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0];

  const updateActiveContent = (newText: string) => {
    setSections(
      sections.map((s) => (s.id === activeSectionId ? { ...s, content: newText } : s))
    );
    setSaveMessage("Saved changes");
  };

  const updateActiveStatus = (status: string) => {
    setSections(
      sections.map((s) => (s.id === activeSectionId ? { ...s, status } : s))
    );
  };

  const completedCount = sections.filter((s) => s.status === "completed").length;
  const progressPercent = Math.round((completedCount / sections.length) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/canvas"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B7A65] hover:text-[#485344] mb-2 transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to All Canvas Projects</span>
          </Link>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-[#485344]">
              DapoerHijau — Healthy Meal Box
            </h1>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E2E9D8] text-[#485344] uppercase">
              Service
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#8C9886] mt-1">
            <span>Overall Completion: <strong className="text-[#485344]">{progressPercent}%</strong></span>
            <span>•</span>
            <span className="text-[#7CA982] flex items-center gap-1">
              <CheckCircle2 size={12} /> {saveMessage}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/builder"
            className="px-4 py-2 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <span>Open in Builder Studio</span>
            <ChevronRight size={13} />
          </Link>
        </div>
      </div>

      <DataDisclaimer type="demo" />

      {/* 3-Column Canvas Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 15 Sections List */}
        <div className="lg:col-span-4 card-wave p-4 space-y-1.5 max-h-[750px] overflow-y-auto sticky top-20">
          <div className="text-[10px] font-bold text-[#8C9886] uppercase tracking-wider px-2 mb-2">
            15 Business Canvas Dimensions
          </div>

          {sections.map((sec) => {
            const isSelected = activeSectionId === sec.id;
            const isCompleted = sec.status === "completed";
            const isInProgress = sec.status === "in_progress";

            return (
              <button
                key={sec.id}
                onClick={() => setActiveSectionId(sec.id)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-all ${
                  isSelected
                    ? "bg-[#E2E9D8] text-[#485344] font-bold shadow-xs"
                    : "text-[#6B7A65] hover:bg-[#F3F1E9]"
                }`}
              >
                <span className="truncate">{sec.title}</span>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0 ${
                    isCompleted
                      ? "bg-[#7CA982]/10 text-[#7CA982]"
                      : isInProgress
                      ? "bg-[#E9C0A8]/40 text-[#A77F69]"
                      : "bg-[#F3F1E9] text-[#8C9886]"
                  }`}
                >
                  {sec.status}
                </span>
              </button>
            );
          })}
        </div>

        {/* Center Column: Section Editor */}
        <div className="lg:col-span-5 card-wave p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-[#485344]">{activeSection.title}</h2>
              <p className="text-xs text-[#6B7A65]">Detail and edit this canvas dimension.</p>
            </div>

            {/* Status Switcher */}
            <select
              value={activeSection.status}
              onChange={(e) => updateActiveStatus(e.target.value)}
              className="py-1 px-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-lg text-xs font-bold text-[#485344]"
            >
              <option value="draft">Draft</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="needs_revision">Needs Revision</option>
            </select>
          </div>

          <textarea
            rows={12}
            value={activeSection.content}
            onChange={(e) => updateActiveContent(e.target.value)}
            className="w-full p-4 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs sm:text-sm text-[#485344] leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            placeholder="Document notes, quantitative metrics, or market assumptions here..."
          />

          <div className="flex items-center justify-between text-xs text-[#8C9886] pt-1">
            <span>Section #{activeSection.id} of 15</span>
            <button
              onClick={() => {
                if (activeSectionId < 15) setActiveSectionId(activeSectionId + 1);
              }}
              className="text-xs font-bold text-[#485344] hover:underline"
            >
              Next Section →
            </button>
          </div>
        </div>

        {/* Right Column: Attached WAVE Insights & AI Notes */}
        <div className="lg:col-span-3 space-y-4 sticky top-20">
          <div className="card-wave p-4 bg-gradient-to-br from-white to-[#E2E9D8]/30 space-y-2 border border-[#B8C8A7]/40">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#485344]">
              <Radio size={14} className="text-[#7CA982]" />
              <span>Attached Trend Signal</span>
            </div>
            <p className="text-xs font-bold text-[#485344]">Healthy Meal Prep Services</p>
            <p className="text-[11px] text-[#6B7A65]">Opportunity Score: 82/100 · Rising Momentum</p>
          </div>

          <div className="card-wave p-4 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#485344]">
              <Sparkles size={14} className="text-[#A77F69]" />
              <span>AI Validation Note</span>
            </div>
            <p className="text-[11px] text-[#6B7A65] leading-relaxed">
              Your cluster delivery model is a strong differentiator. Ensure you acquire at least 3 companies in the same commercial tower to minimize courier idle time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
