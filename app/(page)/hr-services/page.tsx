import HRServices from "@/components/Others/Services/HR-Service/HRServices";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "HR Services",
  "Explore the HR services provided by AAA Future Edge.",
  "/hr-services",
);

export default function HRServicesPage() {
  return <HRServices />;
}
