import type { Metadata } from "next";
import Root from "@/components/Home/Root";

export const metadata: Metadata = {
  title: {
    absolute: "AAA Future Edge | HR, IT & Business Consultancy",
  },
  description:
    "AAA Future Edge provides HR consultancy, IT strategy, business services, career counselling and professional solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "AAA Future Edge | HR, IT & Business Consultancy",
    description:
      "HR consultancy, IT strategy and business services from AAA Future Edge.",
    url: "/",
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
    title: "AAA Future Edge | HR, IT & Business Consultancy",
    description:
      "AAA Future Edge provides HR consultancy, IT strategy, business services, career counselling and professional solutions.",
    images: ["/images/home-hero.png"],
  },
};

export default function HomePage() {
  return <Root />;
}
