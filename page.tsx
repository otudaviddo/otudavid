import type { Metadata } from "next";
import { disciplines } from "@/config/site";
import BookingPage from "@/components/BookingPage";

export const metadata: Metadata = {
  title: disciplines.osteo.metaTitle,
  description: disciplines.osteo.metaDescription,
  alternates: { canonical: "/osteo" },
};

export default function Page() {
  return <BookingPage d={disciplines.osteo} />;
}
