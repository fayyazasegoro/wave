"use client";

import { useState } from "react";
import { Settings, Bell, Shield, Moon, Globe, Save, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";

export default function SettingsPage() {
  const [currency, setCurrency] = useState("IDR");
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [trendFrequency, setTrendFrequency] = useState("daily");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-3xl pb-16">
      <PageHeader
        title="Workspace Settings"
        subtitle="Configure platform notifications, default market currency, and intelligence updates."
        badge="Preferences"
      />

      {saved && (
        <div className="p-3 bg-[#7CA982]/15 border border-[#7CA982]/30 rounded-xl text-xs font-semibold text-[#485344] flex items-center gap-2">
          <CheckCircle2 size={16} className="text-[#7CA982]" />
          <span>Workspace preferences saved.</span>
        </div>
      )}

      <div className="card-wave p-6 space-y-6">
        <div>
          <h3 className="text-sm font-bold text-[#485344] mb-3">Localization &amp; Currency</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#485344] block mb-1">Display Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-semibold text-[#485344]"
              >
                <option value="IDR">Indonesian Rupiah (Rp)</option>
                <option value="USD">US Dollar ($)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#485344] block mb-1">Trend Signal Alerts</label>
              <select
                value={trendFrequency}
                onChange={(e) => setTrendFrequency(e.target.value)}
                className="w-full p-2 bg-[#FAF8F2] border border-[#E5E6DC] rounded-xl text-xs font-semibold text-[#485344]"
              >
                <option value="daily">Daily Rising Waves Digest</option>
                <option value="weekly">Weekly High-Score Summary</option>
                <option value="none">Disabled</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E5E6DC]">
          <h3 className="text-sm font-bold text-[#485344] mb-3">Notification Preferences</h3>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
              className="w-4 h-4 rounded text-[#485344] focus:ring-[#B8C8A7]"
            />
            <span className="text-xs text-[#6B7A65]">
              Send email alerts whenever a tracked opportunity in My Business Canvas reaches critical momentum.
            </span>
          </label>
        </div>

        <div className="pt-2">
          <button
            onClick={handleSave}
            className="px-5 py-2.5 bg-[#485344] hover:bg-[#384235] text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-xs transition-colors"
          >
            <Save size={14} />
            <span>Save Preferences</span>
          </button>
        </div>
      </div>
    </div>
  );
}
