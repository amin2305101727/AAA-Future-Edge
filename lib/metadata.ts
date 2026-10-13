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
      images: [
        {
          url: "/images/home-hero.png",
          width: 1905,
          height: 825,
          alt: "AAA Future Edge homepage hero image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/home-hero.png"],
    },
  };
}
