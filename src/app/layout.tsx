import type { Metadata } from "next";

import "./globals.css";
import "./retro-globals.css";
import Header from "@/components/header";
import { ActiveThemeProvider } from "@/components/active-theme";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { NuqsAdapter } from "nuqs/adapters/react";

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
      <body className="antialiased">
        <ReactQueryProvider>
          <NuqsAdapter>
            <ActiveThemeProvider>
              <Header />
              {children}
            </ActiveThemeProvider>
          </NuqsAdapter>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
