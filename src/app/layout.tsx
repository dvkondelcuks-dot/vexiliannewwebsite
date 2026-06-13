import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vexilian",
  description: "Vexilian dizaina pamata pārbaude.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="lv">
      <body>{children}</body>
    </html>
  );
}
