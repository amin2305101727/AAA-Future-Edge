import ScopeOfWorks from "@/components/Scope of works/ScopeOfWorks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Scope of Works",
  "Review the scope of works for AAA Future Edge services.",
  "/scope-of-works",
);

export default function ScopeOfWorksPage() {
  return <ScopeOfWorks />;
}
