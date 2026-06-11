import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reel — Eduard Bruch",
  description:
    "Showreel and selected video work by Eduard Bruch — short films and theatre productions.",
};

export default function ReelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
