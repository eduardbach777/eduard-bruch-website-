import type { Metadata } from "next";
import EntityGraph from "@/components/EntityGraph";

export const metadata: Metadata = {
  title: "About — Eduard Bruch (Angel Company)",
  description:
    "Eduard Bruch — an independent software developer in Hamburg. One person building native iOS & macOS apps end to end, under the name Angel Company.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EntityGraph />
      {children}
    </>
  );
}
