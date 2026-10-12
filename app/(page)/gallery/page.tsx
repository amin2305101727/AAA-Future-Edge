import GalleryData from "@/components/Others/Gallery/GalleryData";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Gallery",
  "View the AAA Future Edge gallery.",
  "/gallery",
);

export default function GalleryPage() {
  return <GalleryData />;
}
