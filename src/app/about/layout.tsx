import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Eduard Bruch",
  description:
    "Eduard Bruch — actor and software developer based in Hamburg, Germany. Born 2003, fluent in German, English, and Russian.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
