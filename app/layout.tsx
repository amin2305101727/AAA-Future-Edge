import "./globals.css";
import Main from "@/layouts/Main";
import type { Metadata } from "next";
import Providers from "./providers";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AAA Future Edge",
  url: "https://aaa-fe.com",
  logo: "https://aaa-fe.com/AAA_Logo.png",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aaa-fe.com"),
  title: {
    default: "AAA Future Edge | HR, IT & Business Consultancy",
    template: "%s | AAA Future Edge",
  },
  icons: {
    icon: "/flogo.png",
    shortcut: "/flogo.png",
    apple: "/flogo.png",
  },
  description:
    "AAA Future Edge provides HR consultancy, IT strategy, business services, career counselling and professional solutions.",
  openGraph: {
    type: "website",
    siteName: "AAA Future Edge",
    title: "AAA Future Edge | HR, IT & Business Consultancy",
    description:
      "HR consultancy, IT strategy and business services from AAA Future Edge.",
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
      "HR consultancy, IT strategy and business services from AAA Future Edge.",
    images: ["/images/home-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Providers>
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}