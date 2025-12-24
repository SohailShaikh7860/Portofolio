import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sohail Shaikh - Full Stack Developer",
  description: "Portfolio of Sohail Shaikh, a passionate Full Stack Developer specializing in modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
