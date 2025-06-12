import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Arif Kurniawan",
  description: "Arif Kurniawan's personal website, showcasing his portfolio and skills as a fullstack web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <main className="flex justify-center"> */}
          {children}
          {/* </main> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
