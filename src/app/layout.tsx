import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EtherLabs | Parent Company",
  description:
    "EtherLabs is the parent company behind EtherMail, EtherAgents, and TokenStream — building unified communication, AI agents, and real-time token intelligence.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "EtherLabs",
    "EtherMail",
    "EtherAgents",
    "TokenStream",
    "AI agents",
    "knowledge vault",
  ],
  openGraph: {
    title: "EtherLabs | Parent Company",
    description:
      "The parent company powering EtherMail, EtherAgents, and TokenStream.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="glass" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
