import CanvasProjectClient from "./CanvasProjectClient";

export function generateStaticParams() {
  return [
    { id: "proj-1" },
    { id: "proj-2" },
    { id: "proj-3" },
    { id: "proj-4" },
  ];
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <CanvasProjectClient initialId={resolvedParams.id} />;
}
