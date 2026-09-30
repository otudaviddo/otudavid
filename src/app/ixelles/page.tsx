import type { Metadata } from "next";
import { site } from "@/config/site";
import CabinetPage from "@/components/CabinetPage";

const a = site.addresses[1];

export const metadata: Metadata = {
  title: { absolute: a.metaTitle },
  description: a.metaDescription,
  alternates: { canonical: "/ixelles" },
};

export default function Page() {
  return <CabinetPage a={a} />;
}
