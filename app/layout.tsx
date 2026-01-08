import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layouts/theme-provider";

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
        <ThemeProvider
         attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
