import type { Metadata } from "next";

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: pathname,
    },
  };
}
