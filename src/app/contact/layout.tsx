import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Eduard Bruch",
  description:
    "Get in touch with Eduard Bruch for freelance work, collaborations, or general inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
