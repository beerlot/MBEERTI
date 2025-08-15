import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "내가 맥주라면?",
  description: "나는 어떤 맥주일까!",
  openGraph: {
    title: "내가 맥주라면?",
    description: "나는 어떤 맥주일까!",
    url: "https://mbeerti.vercel.app/",
    siteName: "MBEERTI",
    images: [
      {
        url: "/images/intro/beerlot-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "MBEERTI - 내가 맥주라면?",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "내가 맥주라면?",
    description: "나는 어떤 맥주일까!",
    images: ["/images/intro/beerlot-thumbnail.jpg"],
  },
  metadataBase: new URL("https://mbeerti.vercel.app"),
};

// MBEERTI - Beer Personality Test App
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
