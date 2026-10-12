import ContactUs from "@/components/Others/ContactUs/ContactUs";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Contact",
  "Contact AAA Future Edge by email, phone, or at its Dhaka office.",
  "/contact",
);

export default function ContactPage() {
  return <ContactUs />;
}
