import { redirect } from "next/navigation";

export const metadata = {
  title: "Imprint — Muslim Quran: Ramadan 2026",
  description: "Legal notice (Imprint) for the Muslim Quran: Ramadan 2026 app by Eduard Bruch.",
};

export default function QuranStudyImprint() {
  redirect("/impressum");
}
