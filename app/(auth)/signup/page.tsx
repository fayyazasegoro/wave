"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail, User, Sparkles } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Route to optional onboarding flow
      router.push("/onboarding");
    }, 600);
  };

  return (
    <div className="card-wave p-8 sm:p-10 space-y-6 bg-white">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-extrabold text-[#485344]">Start on WAVE</h1>
        <p className="text-xs text-[#6B7A65]">
          Find your next business opportunity with AI intelligence.
        </p>
      </div>

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="text-xs font-bold text-[#485344] block mb-1">Full Name</label>
          <div className="relative">
            <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C9886]" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Fayyaza Segoro"
              className="w-full pl-9 pr-3 py-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            />
          </div>
        </div>

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
          <label className="text-xs font-bold text-[#485344] block mb-1">Password</label>
          <div className="relative">
            <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C9886]" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 8 characters"
              className="w-full pl-9 pr-3 py-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344] focus:outline-none focus:ring-2 focus:ring-[#B8C8A7]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <span>{loading ? "Creating Account..." : "Create Free Account"}</span>
          <ArrowRight size={14} />
        </button>
      </form>

      <div className="pt-2 text-center text-xs text-[#6B7A65]">
        Already have an account?{" "}
        <Link href="/login" className="font-bold text-[#485344] underline hover:text-[#384235]">
          Sign in
        </Link>
      </div>
    </div>
  );
}
