"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  Search,
  Bell,
  User,
  CreditCard,
  Settings,
  LogOut,
  ChevronDown,
  Sparkles,
  Bookmark
} from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
  title?: string;
}

export function Header({ onMenuClick, title }: HeaderProps) {
  const router = useRouter();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/radar?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-[#FAF8F2]/90 backdrop-blur-md border-b border-[#E5E6DC] px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Mobile toggle + Page Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg text-[#485344] hover:bg-[#E2E9D8] transition-colors"
            aria-label="Toggle Navigation"
          >
            <Menu size={20} />
          </button>
          {title && (
            <h1 className="text-base sm:text-lg font-bold text-[#485344] hidden md:block">
              {title}
            </h1>
          )}
        </div>

        {/* Center: Global Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C9886]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trends, opportunities, categories..."
            className="w-full pl-9 pr-4 py-1.5 bg-white border border-[#E5E6DC] rounded-xl text-xs sm:text-sm text-[#485344] placeholder:text-[#8C9886] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7] focus:border-transparent transition-all"
          />
        </form>

        {/* Right Side: Quick Action + Notifications + User Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick AI Suggestion / Canvas button */}
          <Link
            href="/canvas"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF8F2] border border-[#E5E6DC] hover:bg-[#E2E9D8] text-xs font-semibold text-[#485344] rounded-lg transition-colors"
          >
            <Bookmark size={13} className="text-[#A77F69]" />
            <span>My Canvas</span>
          </Link>

          {/* Notifications */}
          <div className="relative">
            <button
              className="p-2 rounded-lg text-[#6B7A65] hover:bg-[#E2E9D8] hover:text-[#485344] transition-colors relative"
              title="Notifications"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E9C0A8] ring-2 ring-[#FAF8F2]" />
            </button>
          </div>

          {/* User Profile dropdown */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 p-1.5 pl-2 rounded-xl hover:bg-[#E2E9D8] transition-colors border border-transparent hover:border-[#B8C8A7]"
            >
              <div className="w-7 h-7 rounded-lg bg-[#B8C8A7] text-[#485344] font-bold text-xs flex items-center justify-center">
                W
              </div>
              <span className="hidden sm:inline text-xs font-semibold text-[#485344]">
                Founder
              </span>
              <ChevronDown size={14} className="text-[#8C9886]" />
            </button>

            {userMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setUserMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-[#E5E6DC] py-1.5 z-50 text-xs">
                  <div className="px-3 py-2 border-b border-[#E5E6DC] mb-1">
                    <p className="font-bold text-[#485344]">Rafi Al Fareza</p>
                    <p className="text-[11px] text-[#8C9886]">founder@waveintel.id</p>
                    <span className="inline-block mt-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#E2E9D8] text-[#485344]">
                      Free Tier
                    </span>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-[#485344] hover:bg-[#FAF8F2] transition-colors"
                  >
                    <User size={14} className="text-[#8C9886]" />
                    <span>My Profile</span>
                  </Link>

                  <Link
                    href="/subscription"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-[#485344] hover:bg-[#FAF8F2] transition-colors"
                  >
                    <CreditCard size={14} className="text-[#8C9886]" />
                    <span>Subscription & Quotas</span>
                  </Link>

                  <Link
                    href="/settings"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-[#485344] hover:bg-[#FAF8F2] transition-colors"
                  >
                    <Settings size={14} className="text-[#8C9886]" />
                    <span>Workspace Settings</span>
                  </Link>

                  <div className="border-t border-[#E5E6DC] my-1" />

                  <Link
                    href="/login"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-[#C17A6E] hover:bg-[#F3F1E9] transition-colors"
                  >
                    <LogOut size={14} />
                    <span>Log Out</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
