import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development — Eduard Bruch",
  description:
    "iOS and macOS applications by Eduard Bruch — productivity tools, utility apps, and more across multiple categories.",
};

export default function CreativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
