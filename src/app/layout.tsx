import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { EMAIL, NUMBER } from "@/constant/contact";
import { ThemeProviders } from "@/providers/ThemeProvider";

import "./globals.css";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    template: "%s | NA Koshi ASC",
    default: "Narcotics Anonymous KOSHI Area Service Committee",
  },
  description:
    "NA KOSHI Area Service Committee (ASC) is a non-profit organization that provides services to the NA community through the use of resources and services provided by the community.",

  keywords: [
    "NA",
    "Narcotics Anonymous",
    "KOSHI",
    "NA KOSHI",
    "Narcotics Anonymous KOSHI",
    "NA KOSHI ASC",
    "Narcotics Anonymous KOSHI ASC",
    "Recovering",
    "Fellowship",
    "Recovery",
    "Nepal",
    "Say no to drugs",
    "Narcotics Anonymous KOSHI Area Service Committee",
  ],
  creator: "Tezz K",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      follow: true,
      index: true,
    },
  },
  applicationName: "NA KOSHI ASC",
  formatDetection: { telephone: true, email: true },
  classification: "Nonprofit Organization",
  appleWebApp: {
    title: "NA KOSHI ASC",
    capable: true,
    startupImage: "/apple-touch-icon.png",
    statusBarStyle: "black-translucent",
  },

  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.svg",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
        url: "/favicon.svg",
      },
    ],
  },
  openGraph: {
    countryName: "Nepal",
    emails: [EMAIL],
    phoneNumbers: [NUMBER],
    title: {
      template: "%s | NA KOSHI ASC",
      default: "Narcotics Anonymous KOSHI Area Service Committee",
    },
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Narcotics Anonymous KOSHI Area Service Committee",
    images: [
      {
        url: "/logo/na-koshi-light.jpg",
        width: 1200,
        height: 630,
        alt: "Narcotics Anonymous KOSHI Area Service Committee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | NA KOSHI ASC",
      default: "Narcotics Anonymous KOSHI Area Service Committee",
    },
    description:
      "NA KOSHI Area Service Committee (ASC) is a non-profit organization that provides services to the NA community through the use of resources and services provided by the community.",
    images: [
      {
        url: "/logo/na-koshi-light.jpg",
        width: 1200,
        height: 630,
        alt: "Narcotics Anonymous KOSHI Area Service Committee",
      },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
    },
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["nakoshi@gmail.com"],
    },
  },
};
{
  /* <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="NA KOSHI" />
<link rel="manifest" href="/site.webmanifest" /> */
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${popins.variable} ${popins.className} antialiased`}
      >
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
// ---- Single quotation marks:  ’
