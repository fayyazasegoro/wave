"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Radio,
  Lightbulb,
  Target,
  Hammer,
  Rocket,
  BookOpen,
  Check,
  HelpCircle,
  ChevronDown,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { SUBSCRIPTION_PLANS, DEMO_TRENDS, DEMO_OPPORTUNITIES } from "@/lib/data/demo-data";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#485344] selection:bg-[#E2E9D8]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 bg-[#FAF8F2]/90 backdrop-blur-md border-b border-[#E5E6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#485344] flex items-center justify-center text-white shadow-xs">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2 19 C 6 8, 9 15, 13 9 C 17 3, 20 14, 22 7"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#485344]">WAVE</span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-bold tracking-widest text-[#A77F69] bg-[#E9C0A8]/30 px-2 py-0.5 rounded-full">
                Intelligence Platform
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#6B7A65]">
            <a href="#how-it-works" className="hover:text-[#485344] transition-colors">How It Works</a>
            <a href="#features" className="hover:text-[#485344] transition-colors">Capabilities</a>
            <a href="#canvas" className="hover:text-[#485344] transition-colors">Business Canvas</a>
            <a href="#pricing" className="hover:text-[#485344] transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-[#485344] transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-3.5 py-1.5 text-xs font-bold text-[#485344] hover:bg-[#E2E9D8] rounded-lg transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-xs font-bold bg-[#485344] text-white hover:bg-[#384235] rounded-xl shadow-xs transition-all duration-200 flex items-center gap-1.5 hover:gap-2"
            >
              <span>Explore Platform</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2E9D8] border border-[#B8C8A7] text-[11px] font-bold text-[#485344] uppercase tracking-wider">
                <Sparkles size={12} className="text-[#A77F69]" />
                AI-Powered Trend Intelligence & Business Platform
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#485344] leading-[1.12] tracking-tight">
                Find Your Next <br className="hidden sm:inline" />
                <span className="relative inline-block text-[#485344]">
                  Business Opportunity.
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#E9C0A8]/40 -z-10 rounded-sm" />
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#6B7A65] leading-relaxed max-w-xl font-normal">
                Discover rising trends, uncover overlooked market opportunities, and turn promising ideas into businesses that stand out. Designed specifically for Indonesian founders, online sellers, and innovators.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/dashboard"
                  className="px-6 py-3.5 bg-[#485344] hover:bg-[#384235] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore WAVE Platform</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#how-it-works"
                  className="px-6 py-3.5 bg-[#E2E9D8] hover:bg-[#B8C8A7] text-[#485344] font-bold text-sm rounded-xl transition-colors flex items-center justify-center"
                >
                  See How It Works
                </a>
              </div>

              {/* Tagline callout */}
              <div className="pt-4 border-t border-[#E5E6DC] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#8C9886]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#7CA982]" />
                  <span>Ride the Wave. Build at the Right Time.</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#B8C8A7]" />
                  <span>Real Indonesian Market Context</span>
                </div>
              </div>
            </div>

            {/* Right Column: Abstract Wave Visual with Floating Insight Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-[#E2E9D8] via-[#FAF8F2] to-[#E9C0A8]/40 p-6 border border-[#E5E6DC] shadow-soft flex flex-col justify-between overflow-hidden">
                {/* Background Wave Graphic */}
                <div className="absolute inset-0 opacity-25 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                    <path
                      d="M-50 200 Q 50 100, 150 200 T 350 200 T 550 200"
                      stroke="#485344"
                      strokeWidth="3"
                    />
                    <path
                      d="M-50 260 Q 80 160, 200 260 T 450 260"
                      stroke="#B8C8A7"
                      strokeWidth="4"
                    />
                    <path
                      d="M-50 140 Q 120 40, 250 140 T 500 140"
                      stroke="#E9C0A8"
                      strokeWidth="3"
                    />
                  </svg>
                </div>

                {/* Floating Card 1: Rising Trend */}
                <div className="relative z-10 bg-white rounded-2xl p-4 shadow-card border border-[#E5E6DC] transform -rotate-1 hover:rotate-0 transition-transform">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#A77F69] uppercase tracking-wider bg-[#E9C0A8]/30 px-2 py-0.5 rounded">
                      Rising Right Now
                    </span>
                    <span className="text-xs font-bold text-[#7CA982] flex items-center gap-1">
                      <TrendingUp size={14} /> +48% MoM
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#485344]">Healthy Meal Prep Services</h4>
                  <p className="text-[11px] text-[#6B7A65] mt-1">High demand from busy urban professionals in Jakarta & Surabaya.</p>
                  <div className="mt-3 pt-2 border-t border-[#E5E6DC] flex items-center justify-between text-[11px]">
                    <span className="text-[#8C9886]">Opportunity Score</span>
                    <span className="font-extrabold text-[#485344]">82 / 100</span>
                  </div>
                </div>

                {/* Floating Card 2: Simple Business Opportunity */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xs rounded-2xl p-4 shadow-card border border-[#E5E6DC] ml-6 transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E2E9D8] text-[#485344]">
                      Service Opportunity
                    </span>
                    <span className="text-[10px] text-[#8C9886]">Capital: &lt; Rp5jt</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#485344]">Weekly Eco Meal Subscription</h5>
                  <p className="text-[10px] text-[#6B7A65] mt-0.5">Customized portions, zero packaging waste, direct WhatsApp booking.</p>
                </div>

                {/* Floating Card 3: Market Signal Indicator */}
                <div className="relative z-10 bg-[#485344] text-white rounded-2xl p-3.5 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E2E9D8] text-[#485344] flex items-center justify-center font-bold text-xs">
                      ⚡
                    </div>
                    <div>
                      <div className="text-[10px] text-[#B8C8A7] uppercase font-bold tracking-wider">Market Entry Signal</div>
                      <div className="text-xs font-bold">Recommended: Enter Now</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white/10 px-2 py-1 rounded-md text-white font-medium">Low Competition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-[#E2E9D8]/40 border-y border-[#E5E6DC]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A77F69]">Core Product Philosophy</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#485344]">
            "Not every promising business needs a revolutionary invention."
          </h2>
          <p className="text-sm sm:text-base text-[#6B7A65] leading-relaxed max-w-2xl mx-auto">
            Sometimes, the best business opportunity is solving an existing problem in a simpler, more convenient, more accessible, or more targeted way. WAVE discovers real, feasible opportunities that you can actually launch.
          </p>
        </div>
      </section>

      {/* How It Works (4 Steps) */}
      <section id="how-it-works" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A77F69]">Four-Step Architecture</span>
          <h2 className="text-3xl font-extrabold text-[#485344] mt-1">From Market Signal to Real Business</h2>
          <p className="text-sm text-[#6B7A65] mt-2">A structured innovation pipeline that turns raw market movement into verified commercial action.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discover",
              desc: "Identify rising demand, category momentum, and lifecycle status using WAVE Radar & Forecast.",
              icon: Radio,
              tag: "Trend Intelligence"
            },
            {
              step: "02",
              title: "Explore",
              desc: "Uncover underserved niches, unmet customer pains, and simple opportunities in Beyond the Wave.",
              icon: Compass,
              tag: "Gap Identification"
            },
            {
              step: "03",
              title: "Innovate",
              desc: "Generate practical differentiation, new revenue packaging, and strong USPs with WAVE Innovate.",
              icon: Lightbulb,
              tag: "Value Creation"
            },
            {
              step: "04",
              title: "Build",
              desc: "Structure unit economics, customer persona, pricing, and launch roadmaps in WAVE Builder.",
              icon: Hammer,
              tag: "Execution Roadmap"
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="card-wave p-6 relative group hover:border-[#B8C8A7] transition-all">
                <div className="text-3xl font-extrabold text-[#E2E9D8] mb-4">{item.step}</div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-[#E5E6DC] flex items-center justify-center text-[#485344] mb-3 group-hover:bg-[#E2E9D8] transition-colors">
                  <Icon size={20} />
                </div>
                <span className="text-[10px] font-bold text-[#A77F69] uppercase tracking-wider">{item.tag}</span>
                <h3 className="text-lg font-bold text-[#485344] mt-1 mb-2">{item.title}</h3>
                <p className="text-xs text-[#6B7A65] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section id="features" className="py-20 bg-[#F3F1E9]/60 border-t border-[#E5E6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A77F69]">Full SaaS Modules</span>
            <h2 className="text-3xl font-extrabold text-[#485344] mt-1">Built for Systematic Innovation</h2>
            <p className="text-sm text-[#6B7A65] mt-2">Every module addresses one critical phase of developing a viable business.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "WAVE Radar",
                desc: "Real-time discovery of consumer shifts, rising categories, and demand momentum across Indonesian industries.",
                icon: Radio,
                link: "/radar"
              },
              {
                title: "WAVE Forecast",
                desc: "Understand lifecycle stages (Emerging, Rising, Peak, Saturated, Declining, Evergreen) and get concrete entry advice.",
                icon: TrendingUp,
                link: "/forecast"
              },
              {
                title: "Beyond the Wave",
                desc: "Discover simple service businesses, rental models, and accessible opportunities hiding behind major macro trends.",
                icon: Compass,
                link: "/beyond-the-wave"
              },
              {
                title: "WAVE Innovate",
                desc: "Practical innovation categories: Product improvement, Service convenience, Bundling, and Niche specialization.",
                icon: Lightbulb,
                link: "/innovate"
              },
              {
                title: "WAVE Opportunity",
                desc: "Detailed 5-pillar feasibility scoring: Demand momentum, growth potential, competition gap, profitability, entry barrier.",
                icon: Target,
                link: "/opportunity"
              },
              {
                title: "WAVE Builder",
                desc: "Complete business plan studio: Persona, financial modeling (COGS, margins, break-even), and operations.",
                icon: Hammer,
                link: "/builder"
              },
              {
                title: "Business Launch",
                desc: "12-stage milestone roadmap turning plans into executable daily and weekly operational tasks.",
                icon: Rocket,
                link: "/business-launch"
              },
              {
                title: "My Business Canvas",
                desc: "Persistent workspace to save trends, organize multiple projects, and track business creation progress.",
                icon: BookOpen,
                link: "/canvas"
              },
              {
                title: "Contextual AI Engine",
                desc: "Server-side generative intelligence that reasons on realistic Indonesian operational costs and consumer behaviors.",
                icon: Sparkles,
                link: "/dashboard"
              }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <Link
                  key={i}
                  href={f.link}
                  className="card-wave p-6 hover:shadow-card hover:-translate-y-1 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E2E9D8] text-[#485344] flex items-center justify-center mb-4 group-hover:bg-[#B8C8A7] transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-[#485344] group-hover:text-[#384235] flex items-center justify-between">
                      <span>{f.title}</span>
                      <ArrowUpRight size={16} className="text-[#8C9886] group-hover:text-[#485344]" />
                    </h3>
                    <p className="text-xs text-[#6B7A65] mt-2 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E5E6DC] text-[11px] font-bold text-[#A77F69]">
                    Open Module →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A77F69]">Transparent Plans</span>
          <h2 className="text-3xl font-extrabold text-[#485344] mt-1">Start Free, Scale When Ready</h2>
          <p className="text-sm text-[#6B7A65] mt-2">Fair pricing designed for aspiring founders, UMKM owners, and established businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 flex flex-col justify-between relative transition-all ${
                plan.highlighted
                  ? "bg-white border-2 border-[#B8C8A7] shadow-card scale-102"
                  : "bg-white/80 border border-[#E5E6DC]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8C8A7] text-[#485344] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#485344]">{plan.name}</h3>
                  <span className="text-xs text-[#8C9886] font-medium">{plan.tagline}</span>
                </div>

                <div className="my-4">
                  <span className="text-3xl font-extrabold text-[#485344]">
                    {plan.price_idr === 0 ? "Free" : `Rp${plan.price_idr.toLocaleString("id-ID")}`}
                  </span>
                  {plan.price_idr > 0 && <span className="text-xs text-[#8C9886]"> / month</span>}
                </div>

                <div className="border-t border-[#E5E6DC] pt-4 mb-6 space-y-2.5">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#6B7A65]">
                      <Check size={14} className="text-[#7CA982] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/dashboard"
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center transition-all ${
                  plan.highlighted
                    ? "bg-[#485344] text-white hover:bg-[#384235] shadow-xs"
                    : "bg-[#E2E9D8] text-[#485344] hover:bg-[#B8C8A7]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#F3F1E9]/60 border-t border-[#E5E6DC]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A77F69]">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#485344] mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What makes WAVE different from Google Trends or generic AI tools?",
                a: "Google Trends shows you search volume, but not what business opportunity exists behind that volume. Generic AI tools offer broad suggestions without feasibility constraints. WAVE maps trends specifically to practical product, service, and hybrid business models with realistic capital requirements and unit economics for Indonesia."
              },
              {
                q: "Do I need a large budget to start the businesses WAVE suggests?",
                a: "No! WAVE prioritizes accessible, simple, and low-complexity opportunities—such as service subscriptions, rental bundles, and localized packaging—that can often be started with under Rp5,000,000 without heavy technology or expensive equipment."
              },
              {
                q: "Will my saved data on My Business Canvas be deleted if my subscription lapses?",
                a: "Never. WAVE strictly preserves user project data and read-access regardless of subscription status. You will never lose your business plans or saved insights."
              },
              {
                q: "Is the data verified or simulated?",
                a: "WAVE clearly labels every piece of information: Verified Data, Estimated Data, AI Hypothesis, or Demo Data. We prioritize transparent market evidence over guesswork."
              }
            ].map((item, idx) => (
              <div key={idx} className="card-wave overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-sm font-bold text-[#485344]"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform text-[#8C9886] ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-[#6B7A65] leading-relaxed border-t border-[#E5E6DC]/60 pt-2">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E6DC] bg-[#FAF8F2] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#485344] flex items-center justify-center text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2 19 C 6 8, 9 15, 13 9 C 17 3, 20 14, 22 7"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-bold text-[#485344] text-sm">WAVE Intelligence</span>
          </div>

          <p className="text-xs text-[#8C9886] text-center md:text-left">
            "Ride the Wave. Build at the Right Time." — Indonesian Market Business Innovation Platform.
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold text-[#6B7A65]">
            <Link href="/dashboard" className="hover:text-[#485344]">Dashboard</Link>
            <Link href="/radar" className="hover:text-[#485344]">Radar</Link>
            <Link href="/canvas" className="hover:text-[#485344]">Canvas</Link>
            <Link href="/subscription" className="hover:text-[#485344]">Pricing</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
