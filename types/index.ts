export type UserTier = "free" | "premium" | "pro";
export type Lifecycle = "emerging" | "rising" | "peak" | "saturated" | "declining" | "evergreen";
export type BusinessType = "product" | "service" | "hybrid";
export type DemandMomentum = "surging" | "rising" | "stable" | "declining" | "volatile";
export type CompetitionLevel = "low" | "moderate" | "high" | "intense";
export type CapitalCategory = "low" | "medium" | "high";
export type SectionStatus = "draft" | "in_progress" | "completed" | "needs_revision";
export type ProjectStage = "idea" | "research" | "planning" | "building" | "launched";
export type DataType = "verified" | "estimated" | "ai_generated" | "demo" | "hypothesis";

export interface Industry {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
}

export interface Trend {
  id: string;
  name: string;
  slug: string;
  industry: Industry;
  description: string;
  lifecycle: Lifecycle;
  opportunity_score: number;
  competition_level: CompetitionLevel;
  demand_momentum: DemandMomentum;
  is_featured: boolean;
  data_type: DataType;
  source?: string;
  last_updated: string;
  sparkline_data?: number[];
  related_opportunities?: BusinessOpportunity[];
}

export interface BusinessOpportunity {
  id: string;
  trend_id?: string;
  name: string;
  business_type: BusinessType;
  customer_problem: string;
  target_customer: string;
  demand_evidence: string;
  competition: CompetitionLevel;
  differentiation: string;
  capital_category: CapitalCategory;
  operational_complexity: "low" | "moderate" | "high";
  revenue_model: string;
  feasibility_score: number;
  opportunity_score: number;
  risks: string[];
  data_type: DataType;
}

export interface InnovationSuggestion {
  id: string;
  name: string;
  category: string;
  business_type: BusinessType;
  customer_problem: string;
  proposed_solution: string;
  why_customers_want_it: string;
  differentiation: string;
  feasibility_level: "quick_win" | "strategic" | "long_term";
  capital_category: CapitalCategory;
  operational_complexity: "low" | "moderate" | "high";
}

export interface BusinessProject {
  id: string;
  user_id: string;
  name: string;
  business_type: BusinessType;
  stage: ProjectStage;
  progress: number;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface CanvasSection {
  id: string;
  project_id: string;
  section_type: string;
  content: Record<string, unknown>;
  status: SectionStatus;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  full_name: string;
  avatar_url?: string;
  onboarding_completed: boolean;
  onboarding_data?: {
    goal: "new_business" | "grow_existing";
    industries: string[];
    business_type: BusinessType;
    capital_range: string;
    channel_preference: "online" | "offline" | "hybrid";
    business_goal: "side_hustle" | "long_term";
  };
  subscription_tier: UserTier;
  created_at: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  tier: UserTier;
  price_idr: number;
  tagline: string;
  features: string[];
  limits: {
    ai_requests_per_month: number;
    saved_trends: number;
    canvas_projects: number;
    saved_reports: number;
  };
  cta: string;
  highlighted: boolean;
}
