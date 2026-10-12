import Blogs from "@/components/Others/Blogs/Blogs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Blogs",
  "Read the latest posts from AAA Future Edge.",
  "/blog",
);

export default function BlogPage() {
  return <Blogs />;
}
