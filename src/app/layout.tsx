import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vexilian | Klientu noplūdes audits viesu namiem un pasākumu vietām",
  description:
    "Noskaidrojiet, kur viesu nama, pirts kompleksa vai pasākumu vietas klienti pazūd ceļā līdz rezervācijai. Vexilian palīdz skaidrāk redzēt pieprasījumus, turpmāko saziņu un rezervāciju ceļu.",
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
