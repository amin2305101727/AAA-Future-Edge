import JobDetailPage from "@/components/Others/Career/JobDetails";
import { createPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return [{ id: "1" }];
}

export const metadata = createPageMetadata(
  "Job opportunity",
  "Review the job details and application information for AAA Future Edge.",
  "/job/1",
);

export default async function JobPage({
  params,
}: PageProps<"/job/[id]">) {
  const { id } = await params;
  return <JobDetailPage id={id} />;
}
