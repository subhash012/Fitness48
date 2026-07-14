import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function buildMetadata(input: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const title = input.title;
  const description = input.description ?? siteConfig.description;
  const url = input.path ? `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}${input.path}` : undefined;

  return {
    title,
    description,
    keywords: input.keywords,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}