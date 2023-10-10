import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX Studio Contact App",
};

const glysa = localFont({
  src: [{ path: "../../public/fonts/Glysa.otf" }],
  variable: "--font-glysa",
});

const lexendDeca = localFont({
  src: [{ path: "../../public/fonts/LexendDeca.ttf" }],
  variable: "--font-lexendDeca",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`font-sans ${glysa.variable} ${lexendDeca.variable}`}>
      <body className="bg-black-100 text-white-100">{children}</body>
    </html>
  );
}
