import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Bluebird",
  description: "Blubird created with NextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-[100%] w-[100%]">
      <body className="h-[100%]">{children}</body>
    </html>
  );
}
