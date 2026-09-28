import type { Metadata } from "next";
import { disciplines } from "@/config/site";
import BookingPage from "@/components/BookingPage";

export const metadata: Metadata = { title: "Kinésithérapie — OTU DAVID", robots: { index: false } };
export default function Page() { return <BookingPage d={disciplines.kine} />; }
