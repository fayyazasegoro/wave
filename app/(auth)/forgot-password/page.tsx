"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="card-wave p-8 sm:p-10 space-y-6 bg-white">
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-extrabold text-[#485344]">Reset Password</h1>
        <p className="text-xs text-[#6B7A65]">
          Enter your registered email to receive recovery instructions.
        </p>
      </div>

      {sent ? (
        <div className="p-4 rounded-xl bg-[#7CA982]/15 text-[#485344] text-xs space-y-2 text-center">
          <CheckCircle2 size={24} className="mx-auto text-[#7CA982]" />
          <p className="font-bold">Password Reset Link Dispatched</p>
          <p className="text-[#6B7A65]">
            Check your inbox at <strong>{email}</strong> for instructions to update your password.
          </p>
          <div className="pt-2">
            <Link href="/login" className="font-bold text-[#485344] underline">
              Return to Login
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full py-2.5 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl transition-all shadow-xs"
          >
            Send Recovery Link
          </button>

          <div className="pt-2 text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C9886] hover:text-[#485344]"
            >
              <ArrowLeft size={13} />
              <span>Back to Sign In</span>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
