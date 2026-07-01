import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EtherLabs | Parent Company",
  description:
    "EtherLabs is the parent company behind EtherMail — AI-integrated email with privacy and security built in — plus EtherAgents and TokenStream.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "EtherLabs",
    "EtherMail",
    "EtherAgents",
    "TokenStream",
    "AI learning",
    "privacy",
    "security",
    "private RAG",
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
