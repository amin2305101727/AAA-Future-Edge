import ITService from "@/components/Others/Services/IT-Service/ITService";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "IT Services",
  "Explore the IT services provided by AAA Future Edge.",
  "/it-services",
);

export default function ITServicesPage() {
  return <ITService />;
}
