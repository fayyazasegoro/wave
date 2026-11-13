import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center card-wave">
      {Icon && (
        <div className="w-14 h-14 bg-[#E2E9D8] rounded-2xl flex items-center justify-center mb-3 text-[#485344]">
          <Icon size={24} />
        </div>
      )}
      <h3 className="text-sm font-bold text-[#485344] mb-1">{title}</h3>
      {description && <p className="text-xs text-[#6B7A65] max-w-sm mb-4 leading-relaxed">{description}</p>}
      {action}
    </div>
  );
}
