import { disciplines } from "@/config/site";
import { pageMeta } from "@/config/meta";
import BookingPage from "@/components/BookingPage";

const d = disciplines.kine;
export const metadata = pageMeta({ title: d.metaTitle, description: d.metaDescription, path: "/kine" });

export default function Page() {
  return <BookingPage d={d} />;
}
