import { notFound } from "next/navigation";
import { soins, soinBySlug } from "@/content/soins";
import { pageMeta } from "@/config/meta";
import SoinPage from "@/components/SoinPage";

export const dynamicParams = false;
export function generateStaticParams() {
  return soins.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = soinBySlug(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/soins/${s.slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = soinBySlug(slug);
  if (!s) notFound();
  return <SoinPage s={s} />;
}
