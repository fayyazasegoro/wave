interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  actions?: React.ReactNode;
}

export function PageHeader({ title, subtitle, badge, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
      <div>
        {badge && (
          <span className="inline-block text-[10px] font-bold text-[#A77F69] bg-[#E9C0A8]/30 border border-[#A77F69]/20 px-2.5 py-0.5 rounded-full mb-2 uppercase tracking-wider">
            {badge}
          </span>
        )}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#485344] tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-[#6B7A65] mt-1 text-xs sm:text-sm max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  );
}
