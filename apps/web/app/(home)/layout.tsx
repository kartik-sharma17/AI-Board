import type { Metadata } from "next";
import { Poppins, Anton } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Thinkspace — Talk it through. Watch it get drawn.",
  description:
    "Thinkspace puts your call and your canvas in the same room. Talk through an idea and the AI sketches it live — flows, diagrams, wireframes — so the meeting ends with something built, not just notes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${anton.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
