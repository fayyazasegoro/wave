"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Radio,
  TrendingUp,
  Compass,
  Lightbulb,
  Target,
  Hammer,
  Rocket,
  BookOpen,
  CreditCard,
  User,
  Settings,
  ChevronRight,
  X,
  Crown,
  Zap,
  ShieldAlert
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  group: string;
  badge?: "premium" | "pro";
}

const NAV_ITEMS: NavItem[] = [
  // Overview
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, group: "Overview" },
  // Discover
  { label: "Radar", href: "/radar", icon: Radio, group: "Discover" },
  { label: "Forecast", href: "/forecast", icon: TrendingUp, group: "Discover" },
  // Explore
  { label: "Beyond the Wave", href: "/beyond-the-wave", icon: Compass, group: "Explore", badge: "premium" },
  { label: "Innovate", href: "/innovate", icon: Lightbulb, group: "Explore", badge: "premium" },
  { label: "Opportunity", href: "/opportunity", icon: Target, group: "Explore" },
  // Build
  { label: "Builder", href: "/builder", icon: Hammer, group: "Build", badge: "pro" },
  { label: "Business Launch", href: "/business-launch", icon: Rocket, group: "Build", badge: "pro" },
  // Workspace
  { label: "My Business Canvas", href: "/canvas", icon: BookOpen, group: "Workspace" },
  // Account
  { label: "Subscription", href: "/subscription", icon: CreditCard, group: "Account" },
  { label: "Profile", href: "/profile", icon: User, group: "Account" },
  { label: "Settings", href: "/settings", icon: Settings, group: "Account" },
];

const GROUPS = ["Overview", "Discover", "Explore", "Build", "Workspace", "Account"];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#485344]/30 backdrop-blur-xs z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-[#E5E6DC] z-40 flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:z-auto`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E6DC] bg-[#FAF8F2]">
          <Link href="/dashboard" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#485344] flex items-center justify-center text-white shadow-xs group-hover:bg-[#394236] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2 19 C 6 8, 9 15, 13 9 C 17 3, 20 14, 22 7"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#485344]">WAVE</span>
              <span className="block text-[9px] uppercase tracking-widest text-[#A77F69] font-medium">Business Intelligence</span>
            </div>
          </Link>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-[#6B7A65] hover:bg-[#F3F1E9] transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {GROUPS.map((group) => {
            const items = NAV_ITEMS.filter((item) => item.group === group);
            if (!items.length) return null;

            return (
              <div key={group} className="space-y-1">
                <div className="px-3 text-[10px] font-semibold text-[#8C9886] uppercase tracking-wider">
                  {group}
                </div>
                {items.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-[#E2E9D8] text-[#485344] font-semibold shadow-xs"
                          : "text-[#6B7A65] hover:bg-[#F3F1E9] hover:text-[#485344]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon size={16} className={`shrink-0 ${isActive ? "text-[#485344]" : "text-[#7B8FA3]"}`} />
                        <span className="truncate">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.badge === "premium" && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[#E2E9D8] text-[#485344] border border-[#B8C8A7]">
                            PREMIUM
                          </span>
                        )}
                        {item.badge === "pro" && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[#E9C0A8] text-[#A77F69] border border-[#A77F69]/30">
                            PRO
                          </span>
                        )}
                        {isActive && <ChevronRight size={14} className="text-[#485344]" />}
                      </div>
                    </Link>
                  );
                })}
              </div>
            );
          })}

          {/* Admin link for management */}
          <div className="pt-2 border-t border-[#E5E6DC]">
            <Link
              href="/admin"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#7B8FA3] hover:text-[#485344] hover:bg-[#F3F1E9] transition-colors"
            >
              <ShieldAlert size={14} />
              <span>Admin Console</span>
            </Link>
          </div>
        </div>

        {/* Subscription Footer Status */}
        <div className="p-3 border-t border-[#E5E6DC] bg-[#FAF8F2]">
          <div className="p-3 rounded-xl bg-white border border-[#E5E6DC] shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Crown size={14} className="text-[#D4A853]" />
                <span className="text-xs font-bold text-[#485344]">Starter Plan</span>
              </div>
              <span className="text-[10px] font-semibold text-[#8C9886] bg-[#F3F1E9] px-1.5 py-0.5 rounded">
                Active
              </span>
            </div>
            <p className="text-[11px] text-[#6B7A65] mb-2 leading-tight">
              Unlock Beyond the Wave, Innovate & Builder modules.
            </p>
            <Link
              href="/subscription"
              className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 bg-[#E2E9D8] hover:bg-[#B8C8A7] text-[#485344] text-xs font-bold rounded-lg transition-colors"
            >
              <Zap size={12} />
              Upgrade Plan
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
