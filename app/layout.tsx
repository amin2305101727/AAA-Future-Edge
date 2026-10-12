import "./globals.css";
import Main from "@/layouts/Main";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL("https://aaa-fe.com"),
  title: {
    default: "AAA Future Edge | HR, IT & Business Consultancy",
    template: "%s | AAA Future Edge",
  },
  description:
    "AAA Future Edge provides HR consultancy, IT strategy, business services, career counselling and professional solutions.",
  openGraph: {
    type: "website",
    siteName: "AAA Future Edge",
    title: "AAA Future Edge | HR, IT & Business Consultancy",
    description:
      "HR consultancy, IT strategy and business services from AAA Future Edge.",
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
        <Providers>
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}