import CareerCounciling from "@/components/Others/Services/Career-Counciling/CareerCounciling";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Career Counselling",
  "Explore career counselling services from AAA Future Edge.",
  "/career-counselling",
);

export default function CareerCounsellingPage() {
  return <CareerCounciling />;
}
