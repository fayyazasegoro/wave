import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ivory flex">
      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pistachio-light via-pistachio/60 to-pistachio-dark flex-col justify-between p-12 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="#485344" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>
        
        {/* Floating cards */}
        <div className="absolute top-20 right-10 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-elevated max-w-xs">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-apricot rounded-lg flex items-center justify-center text-white text-xs font-bold">↑</div>
            <div>
              <div className="text-xs text-sage-light font-medium">Rising Trend</div>
              <div className="text-sm font-bold text-sage">Healthy Meal Prep</div>
            </div>
          </div>
          <div className="text-xs text-sage-light">Opportunity Score: <span className="text-success font-bold">82/100</span></div>
        </div>
        
        <div className="absolute bottom-32 right-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-elevated max-w-xs">
          <div className="text-xs text-sage-light font-medium mb-1">Emerging Opportunity</div>
          <div className="text-sm font-bold text-sage">Pet Sitting Service</div>
          <div className="text-xs text-sage-light mt-1">Low competition · Low capital</div>
        </div>
        
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sage rounded-xl flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M2 20 C6 8, 10 16, 14 10 C18 4, 20 14, 22 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-sage">WAVE</span>
          </div>
        </Link>
        
        {/* Tagline */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-sage leading-tight mb-4">
            Ride the Wave.<br />Build at the Right Time.
          </h2>
          <p className="text-sage-light text-lg">
            Discover trends, find opportunities, and turn your ideas into a real business.
          </p>
        </div>
        
        {/* Stats */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {[
            { label: "Trends Tracked", value: "48+" },
            { label: "Opportunities", value: "120+" },
            { label: "Business Ideas", value: "500+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
              <div className="text-xl font-bold text-sage">{stat.value}</div>
              <div className="text-xs text-sage-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right auth form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="lg:hidden mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sage rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M2 20 C6 8, 10 16, 14 10 C18 4, 20 14, 22 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-sage">WAVE</span>
          </Link>
        </div>
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
