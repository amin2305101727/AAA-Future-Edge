import ITStrategy from "@/components/Others/Solutions/IT/ITStrategy";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "IT Strategy",
  "Explore the IT strategy services offered by AAA Future Edge.",
  "/it-strategy",
);

export default function ITStrategyPage() {
  return <ITStrategy />;
}
