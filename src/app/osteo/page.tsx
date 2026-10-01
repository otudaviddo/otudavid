import { disciplines } from "@/config/site";
import { pageMeta } from "@/config/meta";
import BookingPage from "@/components/BookingPage";

const d = disciplines.osteo;
export const metadata = pageMeta({ title: d.metaTitle, description: d.metaDescription, path: "/osteo" });

export default function Page() {
  return <BookingPage d={d} />;
}
