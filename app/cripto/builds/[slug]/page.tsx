import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contributions } from "../../_data";
import BuildDetail from "./BuildDetail";

export function generateStaticParams() {
  return contributions.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const build = contributions.find((c) => c.slug === params.slug);
  return {
    title: build ? `${build.title} — Louzoshi` : "Louzoshi — Onchain",
  };
}

export default function BuildPage({ params }: { params: { slug: string } }) {
  const build = contributions.find((c) => c.slug === params.slug);
  if (!build) notFound();
  return <BuildDetail slug={build.slug} />;
}
