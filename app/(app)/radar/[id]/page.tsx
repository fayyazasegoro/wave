import { DEMO_TRENDS } from "@/lib/data/demo-data";
import TrendDetailClient from "./TrendDetailClient";

export function generateStaticParams() {
  return DEMO_TRENDS.map((t) => ({ id: t.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <TrendDetailClient initialId={resolvedParams.id} />;
}
