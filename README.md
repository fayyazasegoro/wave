# WAVE — AI-Powered Trend Intelligence & Business Innovation Platform

[![Next.js 15](https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **"Ride the Wave. Build at the Right Time."**  
> *"See the trend. Find the gap. Build the future."*

WAVE is an AI-powered SaaS platform designed to discover rising trends, uncover overlooked market opportunities, and turn promising ideas into viable businesses for the Indonesian market.

---

## 🚀 Live Demo & Deployment

### 1-Click Instant Deployment to Vercel
Deploy your own live, hosted copy of WAVE with zero configuration:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffayyazasegoro%2Fwave)

👉 **[Klik Disini untuk Deploy Live Web ke Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ffayyazasegoro%2Fwave)**

---

## 🌟 Core Product Features

### 1. 📡 WAVE Radar (`/radar`)
Discover rising consumer demand, category acceleration, and lifecycle momentum across 10 Indonesian industries (Food & Beverage, Beauty, Digital Services, Pet Care, Education, and more).

### 2. 📈 WAVE Forecast (`/forecast`)
Understand 6-stage category lifecycles (*Emerging, Rising, Peak, Saturated, Declining, Evergreen*) with multi-scenario projections (*Optimistic, Base Case, Pessimistic*) and actionable entry recommendations (*Enter Now, Enter with Caution, Wait & Observe*).

### 3. 🧭 Beyond the Wave (`/beyond-the-wave`)
Uncover accessible, high-margin opportunities hiding behind major macro trends using value relationship mapping (*Macro Trend → Unmet Need → Accessible Service/Product Idea*).

### 4. 💡 WAVE Innovate (`/innovate`)
Practical differentiation studio featuring:
- 8 Innovation Categories (Product Improvement, Service Convenience, Bundling, etc.)
- Competitor Gap Finder
- Automated **Unique Selling Proposition (USP) Studio**

### 5. 🎯 WAVE Opportunity (`/opportunity`)
Quantitative 5-pillar feasibility evaluation matrix:
- Demand Velocity (25%)
- Growth Potential (20%)
- Competition Gap (20%)
- Profitability & Unit Economics (20%)
- Entry Feasibility (15%)

### 6. 🔨 WAVE Builder (`/builder`)
Full business planning studio with real mathematical formulas for unit economics (COGS, gross margin, break-even subscribers, and monthly net profit) plus contextual AI advisory.

### 7. 🚀 Business Launch Engine (`/business-launch`)
12-stage milestone roadmap turning business plans into executable operational tasks with readiness scoring.

### 8. 📋 My Business Canvas (`/canvas`)
Central persistent workspace accessible to all tiers with non-destructive data retention guarantee across 15 canvas dimensions.

---

## 🎨 Visual Identity & Design Tokens

Built using the official **Pistachio & Apricot — Fresh Editorial Premium SaaS** palette:
- **Main Background:** Warm Ivory (`#FAF8F2`)
- **Secondary Background:** Soft Pistachio (`#E2E9D8`)
- **Primary Accent:** Pistachio Green (`#B8C8A7`)
- **Secondary Accent:** Soft Apricot (`#E9C0A8`)
- **Muted Accent:** Apricot Brown (`#A77F69`)
- **Main Typography:** Deep Sage Charcoal (`#485344`)
- **Card Surface:** Pure White (`#FFFFFF`)

---

## 🛠️ Local Development & Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Setup
```bash
# 1. Clone the repository
git clone https://github.com/fayyazasegoro/wave.git
cd wave

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Setup environment variables
cp .env.example .env.local

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Build

```bash
# Build the production bundle
npm run build

# Start the optimized production server
npm run start -p 3000
```

---

## 🔒 Security & Environment Variables

Create `.env.local` with the following variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 📄 License
MIT License © 2026 WAVE Intelligence.
