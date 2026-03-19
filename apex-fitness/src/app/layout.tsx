import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Apex Fitness | Transform Your Body",
  description:
    "Elite training programs designed for those who refuse to settle. Transform your body, elevate your mind, dominate your goals.",
  keywords: "gym, fitness, personal training, memberships, elite trainers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}