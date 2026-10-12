import HRStrategy from "@/components/Others/Solutions/HR/HRStrategy";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "HR Strategy",
  "Explore HR strategy services from AAA Future Edge.",
  "/hr-strategy",
);

export default function HRStrategyPage() {
  return <HRStrategy />;
}
