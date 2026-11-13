"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Rocket,
  CheckCircle2,
  Clock,
  Calendar,
  AlertCircle,
  Plus,
  ArrowRight,
  ChevronRight,
  Filter,
  Layers,
  ListTodo,
  TrendingUp,
  Bookmark
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataDisclaimer } from "@/components/shared/DataLabel";

interface LaunchTask {
  id: string;
  stageId: number;
  name: string;
  desc: string;
  priority: "high" | "medium" | "low";
  duration: string;
  status: "completed" | "in_progress" | "pending";
}

export default function BusinessLaunchPage() {
  const [view, setView] = useState<"milestones" | "checklist">("milestones");
  const [activeStageId, setActiveStageId] = useState(3);

  const stages = [
    { id: 1, name: "1. Idea Validation", status: "completed", target: "Day 1–3" },
    { id: 2, name: "2. Market Validation", status: "completed", target: "Day 4–7" },
    { id: 3, name: "3. Service Prototype", status: "in_progress", target: "Day 8–12" },
    { id: 4, name: "4. Sourcing & Supplies", status: "pending", target: "Day 13–16" },
    { id: 5, name: "5. Pricing & Economics", status: "pending", target: "Day 17–19" },
    { id: 6, name: "6. Brand & Identity", status: "pending", target: "Day 20–22" },
    { id: 7, name: "7. Packaging Setup", status: "pending", target: "Day 23–25" },
    { id: 8, name: "8. Marketing Content", status: "pending", target: "Day 26–28" },
    { id: 9, name: "9. Soft Launch Prep", status: "pending", target: "Day 29–30" },
    { id: 10, name: "10. Public Launch", status: "pending", target: "Day 31" },
    { id: 11, name: "11. Feedback Loop", status: "pending", target: "Week 5" },
    { id: 12, name: "12. Unit Optimization", status: "pending", target: "Week 6+" },
  ];

  const [tasks, setTasks] = useState<LaunchTask[]>([
    {
      id: "t1",
      stageId: 3,
      name: "Cook 5 test weekly recipe samples & test portion sizing",
      desc: "Measure ingredient cost per meal to verify COGS is under Rp19.000.",
      priority: "high",
      duration: "2 days",
      status: "completed",
    },
    {
      id: "t2",
      stageId: 3,
      name: "Run blind taste test with 10 target office workers",
      desc: "Gather quantitative feedback on taste, saltiness, packaging ergonomics.",
      priority: "high",
      duration: "1 day",
      status: "in_progress",
    },
    {
      id: "t3",
      stageId: 3,
      name: "Finalize standard weekly rotation menu (Menu A & Menu B)",
      desc: "Document step-by-step prep recipe guide for assistant cooks.",
      priority: "medium",
      duration: "2 days",
      status: "pending",
    },
  ]);

  const toggleTaskStatus = (id: string) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {
          const next = t.status === "completed" ? "pending" : "completed";
          return { ...t, status: next };
        }
        return t;
      })
    );
  };

  const completedTasksCount = tasks.filter((t) => t.status === "completed").length;
  const launchProgress = Math.round((completedTasksCount / tasks.length) * 100);

  return (
    <div className="space-y-8 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E9C0A8] text-[#A77F69] uppercase">
              EXECUTION ROADMAP
            </span>
            <span className="text-xs text-[#8C9886]">Attached to Project: <strong>DapoerHijau</strong></span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#485344] mt-1">
            Business Launch Engine
          </h1>
          <p className="text-xs text-[#6B7A65]">
            12 systematic stages transforming your business plan into daily operational tasks.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/canvas"
            className="px-3.5 py-2 bg-white border border-[#E5E6DC] text-xs font-bold text-[#485344] rounded-xl flex items-center gap-1.5"
          >
            <Bookmark size={13} />
            <span>Open in Canvas</span>
          </Link>
          <button
            onClick={() => alert("Added custom milestone task!")}
            className="px-4 py-2 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
          >
            <Plus size={14} />
            <span>Add Launch Task</span>
          </button>
        </div>
      </div>

      <DataDisclaimer type="demo" />

      {/* Progress & Target Launch Overview Card */}
      <div className="card-wave p-6 bg-gradient-to-r from-white via-[#FAF8F2] to-[#E2E9D8]/50 border-l-4 border-l-[#B8C8A7]">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
          <div className="space-y-1 sm:col-span-2">
            <div className="text-[10px] font-bold text-[#8C9886] uppercase">Active Milestone</div>
            <div className="text-base font-extrabold text-[#485344]">Stage 3 — Service Prototype &amp; Test</div>
            <p className="text-xs text-[#6B7A65]">Target Launch Date: <strong>14 Days Remaining (Nov 28)</strong></p>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E5E6DC] text-center">
            <div className="text-[10px] text-[#8C9886] font-bold uppercase">Milestones Finished</div>
            <div className="text-xl font-extrabold text-[#485344]">2 / 12</div>
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E5E6DC] text-center">
            <div className="text-[10px] text-[#8C9886] font-bold uppercase">Launch Readiness</div>
            <div className="text-xl font-extrabold text-[#7CA982]">{launchProgress}%</div>
          </div>
        </div>
      </div>

      {/* 12-Stage Visual Milestone Track */}
      <div className="card-wave p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#485344]">12-Stage Execution Track</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("milestones")}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                view === "milestones" ? "bg-[#485344] text-white" : "text-[#6B7A65]"
              }`}
            >
              Milestone View
            </button>
            <button
              onClick={() => setView("checklist")}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                view === "checklist" ? "bg-[#485344] text-white" : "text-[#6B7A65]"
              }`}
            >
              Checklist View
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-2">
          {stages.map((st) => {
            const isCompleted = st.status === "completed";
            const isInProgress = st.status === "in_progress";
            const isSelected = activeStageId === st.id;

            return (
              <button
                key={st.id}
                onClick={() => setActiveStageId(st.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "border-[#485344] shadow-xs ring-1 ring-[#485344]"
                    : "border-[#E5E6DC] hover:border-[#B8C8A7]"
                } ${
                  isCompleted
                    ? "bg-[#FAF8F2]"
                    : isInProgress
                    ? "bg-[#E2E9D8]/50"
                    : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-bold text-[#8C9886]">{st.target}</span>
                  {isCompleted ? (
                    <CheckCircle2 size={12} className="text-[#7CA982]" />
                  ) : isInProgress ? (
                    <span className="w-2 h-2 rounded-full bg-[#485344]" />
                  ) : null}
                </div>
                <div className="text-xs font-bold text-[#485344] truncate">{st.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Task Checklist for Selected Stage */}
      <div className="card-wave p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#485344]">
              Tasks for {stages.find((s) => s.id === activeStageId)?.name}
            </h3>
            <p className="text-xs text-[#6B7A65]">
              Check off tasks as completed to automatically update your launch readiness index.
            </p>
          </div>
          <span className="text-xs font-bold text-[#485344] bg-[#FAF8F2] border border-[#E5E6DC] px-2.5 py-1 rounded-lg">
            {completedTasksCount} of {tasks.length} Done
          </span>
        </div>

        <div className="space-y-3 pt-2">
          {tasks.map((task) => {
            const isDone = task.status === "completed";
            return (
              <div
                key={task.id}
                className={`p-4 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                  isDone
                    ? "bg-[#FAF8F2]/60 border-[#E5E6DC] opacity-75"
                    : "bg-white border-[#E5E6DC]"
                }`}
              >
                <div className="flex items-start gap-3 flex-1">
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => toggleTaskStatus(task.id)}
                    className="mt-1 w-4 h-4 rounded text-[#485344] focus:ring-[#B8C8A7]"
                  />
                  <div>
                    <h4 className={`text-xs font-bold ${isDone ? "line-through text-[#8C9886]" : "text-[#485344]"}`}>
                      {task.name}
                    </h4>
                    <p className="text-[11px] text-[#6B7A65] mt-0.5">{task.desc}</p>
                    <div className="flex items-center gap-3 mt-2 text-[10px] text-[#8C9886]">
                      <span className="font-semibold uppercase text-[#A77F69]">Priority: {task.priority}</span>
                      <span>•</span>
                      <span>Estimated Duration: {task.duration}</span>
                    </div>
                  </div>
                </div>

                <span
                  className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${
                    isDone
                      ? "bg-[#7CA982]/10 text-[#7CA982]"
                      : "bg-[#E2E9D8] text-[#485344]"
                  }`}
                >
                  {isDone ? "Completed" : "Active"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
