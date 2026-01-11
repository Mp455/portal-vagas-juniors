import type { Metadata } from "next";

import "./globals.css";
import { ReactQueryProvider } from "@/providers/react-query-provider";

export const metadata: Metadata = {
  title: "Portal Vagas Juniors",
  description: "Encontre a vaga junior perfeita para você!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {" "}
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
