import type { Metadata } from "next";
import Root from "@/components/Home/Root";

export const metadata: Metadata = {
  title: "AAA Future Edge | HR, IT & Business Consultancy",
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
  },
};

export default function HomePage() {
  return <Root />;
}
