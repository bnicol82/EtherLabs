import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EtherLabs | Parent Company",
  description:
    "EtherLabs is the parent company behind EtherMail — an Obsidian-style knowledge vault with unified email, graph, and private RAG AI — plus EtherAgents and TokenStream.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "EtherLabs",
    "EtherMail",
    "EtherAgents",
    "TokenStream",
    "knowledge vault",
    "RAG AI",
    "unified email",
  ],
  openGraph: {
    title: "EtherLabs | Parent Company",
    description:
      "Parent company for EtherMail, EtherAgents, and TokenStream.",
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
