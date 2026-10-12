import CoreServices from "@/components/Others/Services/Core Services/CoreServicesLayout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Core Services",
  "Explore the core services provided by AAA Future Edge.",
  "/core-services",
);

export default function CoreServicesPage() {
  return <CoreServices />;
}
