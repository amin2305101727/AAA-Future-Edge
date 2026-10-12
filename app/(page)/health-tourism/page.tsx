import HealthTourism from "@/components/Others/Services/Health-Tourism/Health-Tourism";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Health Tourism",
  "Find information about health tourism services from AAA Future Edge.",
  "/health-tourism",
);

export default function HealthTourismPage() {
  return <HealthTourism />;
}
