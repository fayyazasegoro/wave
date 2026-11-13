import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "IDR"): string {
  if (currency === "IDR") {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
}

export function getLifecycleBadgeClass(lifecycle: string): string {
  const classes: Record<string, string> = {
    emerging: "badge-lifecycle-emerging",
    rising: "badge-lifecycle-rising",
    peak: "badge-lifecycle-peak",
    saturated: "badge-lifecycle-saturated",
    declining: "badge-lifecycle-declining",
    evergreen: "badge-lifecycle-evergreen",
  };
  return classes[lifecycle.toLowerCase()] || "badge-lifecycle-saturated";
}

export function getBusinessTypeBadgeClass(type: string): string {
  const classes: Record<string, string> = {
    product: "badge-product",
    service: "badge-service",
    hybrid: "badge-hybrid",
  };
  return classes[type.toLowerCase()] || "badge-hybrid";
}

export function getScoreColor(score: number): string {
  if (score >= 80) return "text-success";
  if (score >= 60) return "text-[#8FA87A]";
  if (score >= 40) return "text-warning";
  return "text-[#C17A6E]";
}

export function getScoreBgClass(score: number): string {
  if (score >= 80) return "bg-success/10 text-success";
  if (score >= 60) return "bg-pistachio-light text-sage";
  if (score >= 40) return "bg-warning/10 text-warning";
  return "bg-[#C17A6E]/10 text-[#C17A6E]";
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

export function getLifecycleLabel(lifecycle: string): string {
  const labels: Record<string, string> = {
    emerging: "Emerging", rising: "Rising", peak: "At Peak",
    saturated: "Saturated", declining: "Declining", evergreen: "Evergreen",
  };
  return labels[lifecycle.toLowerCase()] || lifecycle;
}

export function getDemandLabel(momentum: string): string {
  const labels: Record<string, string> = {
    surging: "Surging ↑↑", rising: "Rising ↑", stable: "Stable →",
    declining: "Declining ↓", volatile: "Volatile ~",
  };
  return labels[momentum.toLowerCase()] || momentum;
}

export function getCompetitionLabel(level: string): string {
  const labels: Record<string, string> = {
    low: "Low", moderate: "Moderate", high: "High", intense: "Very Intense",
  };
  return labels[level.toLowerCase()] || level;
}

export function getCapitalLabel(category: string): string {
  const labels: Record<string, string> = {
    low: "< Rp5 juta", medium: "Rp5–25 juta", high: "> Rp25 juta",
  };
  return labels[category.toLowerCase()] || category;
}

export function getFeasibilityLabel(level: string): string {
  const labels: Record<string, string> = {
    quick_win: "Quick Win", strategic: "Strategic Improvement", long_term: "Long-Term Opportunity",
  };
  return labels[level.toLowerCase()] || level;
}

export function getFeasibilityClass(level: string): string {
  const classes: Record<string, string> = {
    quick_win: "bg-success/10 text-success border-success/20",
    strategic: "bg-pistachio-light text-sage border-pistachio/30",
    long_term: "bg-apricot-light text-sage border-apricot-brown/30",
  };
  return classes[level.toLowerCase()] || "bg-warm text-sage border-border-soft";
}
