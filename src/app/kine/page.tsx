import type { Metadata } from "next";
import { disciplines } from "@/config/site";
import BookingPage from "@/components/BookingPage";

export const metadata: Metadata = {
  title: disciplines.kine.metaTitle,
  description: disciplines.kine.metaDescription,
  alternates: { canonical: "/kine" },
};

export default function Page() {
  return <BookingPage d={disciplines.kine} />;
}
