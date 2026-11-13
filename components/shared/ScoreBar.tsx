"use client";

interface ScoreBarProps {
  score: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md";
}

export function ScoreBar({ score, label, showValue = true, size = "md" }: ScoreBarProps) {
  const color = score >= 80 ? "#7CA982" : score >= 60 ? "#8FA87A" : score >= 40 ? "#D4A853" : "#C17A6E";
  const height = size === "sm" ? "h-1.5" : "h-2";
  
  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-xs text-sage-light">{label}</span>}
          {showValue && <span className="text-xs font-semibold text-sage">{score}/100</span>}
        </div>
      )}
      <div className={`w-full bg-[#E5E6DC] rounded-full ${height} overflow-hidden`}>
        <div
          className={`${height} rounded-full transition-all duration-500`}
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
