"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Plus,
  Search,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Bookmark,
  CheckCircle2,
  Trash2,
  MoreVertical
} from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataDisclaimer } from "@/components/shared/DataLabel";
import { formatCurrency } from "@/lib/utils";

interface Project {
  id: string;
  name: string;
  category: string;
  businessType: "service" | "product" | "hybrid";
  stage: string;
  progress: number;
  updatedAt: string;
  summary: string;
}

export default function CanvasIndexPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "proj-1",
      name: "DapoerHijau — Healthy Meal Box",
      category: "Food & Beverage",
      businessType: "service",
      stage: "Planning & Financials",
      progress: 65,
      updatedAt: "2 hours ago",
      summary: "Eco-friendly zero-plastic weekly lunch meal subscription for office workers.",
    },
    {
      id: "proj-2",
      name: "PawPal In-Home Pet Sitting",
      category: "Pet Care",
      businessType: "service",
      stage: "Market Research",
      progress: 35,
      updatedAt: "Yesterday",
      summary: "Daily home visits for urban cats and dogs with photo check-ins.",
    },
    {
      id: "proj-3",
      name: "Aksara SNBT Intensive Prep",
      category: "Education & Skills",
      businessType: "service",
      stage: "Ready for Launch",
      progress: 80,
      updatedAt: "3 days ago",
      summary: "Short 4-week modular university entrance prep cohorts on Zoom.",
    },
    {
      id: "proj-4",
      name: "Botanika Skin Elixir",
      category: "Beauty & Personal Care",
      businessType: "hybrid",
      stage: "Concept Validation",
      progress: 25,
      updatedAt: "1 week ago",
      summary: "Indonesian centella & turmeric essence combined with skin consultation.",
    },
  ]);

  const filteredProjects = projects.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "all" || p.businessType === typeFilter;
    return matchSearch && matchType;
  });

  const handleCreateNew = () => {
    const name = prompt("Enter your new Business Project Name:", "New Venture Project");
    if (name) {
      const newProj: Project = {
        id: `proj-${Date.now()}`,
        name: name.trim(),
        category: "General Business",
        businessType: "service",
        stage: "Draft Idea",
        progress: 10,
        updatedAt: "Just now",
        summary: "Newly initialized business canvas project ready for research attachments.",
      };
      setProjects([newProj, ...projects]);
    }
  };

  return (
    <div className="space-y-8 pb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E2E9D8] text-[#485344] uppercase">
              ALL TIERS PERSISTENT WORKSPACE
            </span>
            <span className="text-xs text-[#7CA982] flex items-center gap-1 font-semibold">
              <CheckCircle2 size={12} /> Auto-Saved &amp; Permanent
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#485344] mt-1">
            My Business Canvas
          </h1>
          <p className="text-xs text-[#6B7A65]">
            Save, organize, develop, and track your business ventures from trend discovery to live execution.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-4 py-2.5 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Plus size={15} />
          <span>Create New Project</span>
        </button>
      </div>

      <DataDisclaimer type="demo" />

      {/* Filter and Search Bar */}
      <div className="card-wave p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C9886]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search saved business projects..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
          />
        </div>

        <div className="flex items-center gap-2">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="py-1.5 px-3 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-semibold text-[#485344]"
          >
            <option value="all">All Models</option>
            <option value="service">Service-Based</option>
            <option value="product">Product-Based</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="card-wave p-6 flex flex-col justify-between space-y-4 hover:border-[#B8C8A7] hover:shadow-card transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E2E9D8] text-[#485344] uppercase">
                  {p.businessType}
                </span>
                <span className="text-[10px] text-[#8C9886] flex items-center gap-1">
                  <Clock size={11} /> {p.updatedAt}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#485344]">{p.name}</h3>
                <span className="text-[11px] font-semibold text-[#A77F69]">{p.category}</span>
                <p className="text-xs text-[#6B7A65] mt-1.5 line-clamp-2">{p.summary}</p>
              </div>

              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-[#8C9886]">Stage: {p.stage}</span>
                  <span className="text-[#485344] font-bold">{p.progress}%</span>
                </div>
                <div className="w-full bg-[#E5E6DC] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#B8C8A7] h-full" style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E5E6DC] flex items-center justify-between">
              <Link
                href={`/canvas/${p.id}`}
                className="w-full py-2 bg-[#FAF8F2] hover:bg-[#E2E9D8] text-xs font-bold text-[#485344] rounded-xl text-center transition-colors flex items-center justify-center gap-1"
              >
                <span>Open Canvas Studio</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
