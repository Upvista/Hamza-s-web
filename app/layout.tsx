import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hamza Hafeez | Software Engineer | Researcher | Founder",
  description: "Software Engineer, Full-Stack Architect, Researcher, and Founder of Upvista Digital. Building scalable systems and exploring AGI research.",
  keywords: ["Hamza Hafeez", "Software Engineer", "Full-Stack Developer", "AGI Research", "Upvista Digital", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
