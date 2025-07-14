import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { getFollowersCount } from "@/services/twitch/twitch.api";
import { DataProvider } from "@/app/components/data-provider/data-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taazy | Social hub",
  description: "Wszystkie informacje o mnie w jednym miejscu",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const followersCount = await getFollowersCount();

  return (
    <html lang="pl">
      <body className={montserrat.className}>
        <DataProvider value={{ followersCount }}>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
