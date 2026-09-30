import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InteriorPage } from "@/components/InteriorPage";
import { pages, pagesBySlug } from "./content";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pagesBySlug[slug];
  if (!page) return {};
  return {
    title: `${page.title} | Reliance Mobility Solutions`,
    description: page.description,
  };
}

export default async function InformationPage({ params }: RouteProps) {
  const { slug } = await params;
  const page = pagesBySlug[slug];
  if (!page) notFound();
  return <InteriorPage page={page} />;
}