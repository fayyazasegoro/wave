"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail, Sparkles, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("founder@waveintel.id");
  const [password, setPassword] = useState("••••••••");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="card-wave p-8 sm:p-10 space-y-6 bg-white">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-extrabold text-[#485344]">Welcome to WAVE</h1>
        <p className="text-xs text-[#6B7A65]">
          Sign in to access your business intelligence workspace.
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-[#485344] block mb-1">Email Address</label>
          <div className="relative">
            <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C9886]" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="founder@company.id"
              className="w-full pl-9 pr-3 py-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-xs font-bold text-[#485344]">Password</label>
            <Link
              href="/forgot-password"
              className="text-[11px] font-semibold text-[#A77F69] hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C9886]" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-9 pr-3 py-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <span>{loading ? "Signing in..." : "Sign In to Platform"}</span>
          <ArrowRight size={14} />
        </button>
      </form>

      <div className="pt-2 text-center text-xs text-[#6B7A65]">
        Don't have an account yet?{" "}
        <Link href="/signup" className="font-bold text-[#485344] underline hover:text-[#384235]">
          Sign up free
        </Link>
      </div>
    </div>
  );
}
