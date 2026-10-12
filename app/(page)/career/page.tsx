import CareerMain from "@/components/Others/Career/CareerMain";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Career",
  "Explore current career openings at AAA Future Edge.",
  "/career",
);

export default function CareerPage() {
  return <CareerMain />;
}
