"use client";

import { useState } from "react";
import { User, Mail, Shield, Save, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";

export default function ProfilePage() {
  const [name, setName] = useState("Rafi Al Fareza");
  const [email, setEmail] = useState("founder@waveintel.id");
  const [role, setRole] = useState("Founder / Serial Entrepreneur");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-3xl pb-16">
      <PageHeader
        title="Founder Profile"
        subtitle="Manage your personal preferences, business background, and account credentials."
        badge="Account"
      />

      {saved && (
        <div className="p-3 bg-[#7CA982]/15 border border-[#7CA982]/30 rounded-xl text-xs font-semibold text-[#485344] flex items-center gap-2">
          <CheckCircle2 size={16} className="text-[#7CA982]" />
          <span>Profile changes saved successfully.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="card-wave p-6 space-y-5">
        <div className="flex items-center gap-4 pb-4 border-b border-[#E5E6DC]">
          <div className="w-16 h-16 rounded-2xl bg-[#B8C8A7] text-[#485344] text-xl font-bold flex items-center justify-center">
            {name.charAt(0)}
          </div>
          <div>
            <h2 className="text-base font-bold text-[#485344]">{name}</h2>
            <p className="text-xs text-[#8C9886]">{email}</p>
            <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded bg-[#E2E9D8] text-[#485344]">
              Starter Tier Active
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-[#485344] block mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#485344] block mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#485344] block mb-1">Entrepreneurial Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2.5 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-medium text-[#485344]"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-xs transition-colors"
          >
            <Save size={14} />
            <span>Save Profile</span>
          </button>
        </div>
      </form>
    </div>
  );
}
