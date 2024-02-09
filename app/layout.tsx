import "./globals.css";
import type { Metadata } from "next";
import { Arapey } from "next/font/google";
import localFont from "next/font/local";

const beautiful = localFont({
  src: "../fonts/beautiful.woff2",
  display: "swap",
  variable: "--font-beautiful",
});

const arapey = Arapey({
  subsets: ["latin"],
  // style :['normal'],
  variable: "--font-arapey",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Cyrielle Thomas - Développeuse web freelance ",
    template: "%s | Cyrielle Thomas - Développeur web freelance",
  },
  description: "Création de site web sur-mesure",
  openGraph: {
    images: "https://ibb.co/PDw9xyC",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${beautiful.variable} ${arapey.className} bg-background text-xl`}
      >
        {children}
      </body>
    </html>
  );
}
