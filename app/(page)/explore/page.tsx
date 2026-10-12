import ExploreUs from "@/components/Others/ExploreUs/ExploreUs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Explore",
  "Explore AAA Future Edge’s background, mission, and values.",
  "/explore",
);

export default function ExplorePage() {
  return <ExploreUs />;
}
