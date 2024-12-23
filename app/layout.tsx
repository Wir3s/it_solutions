import type { Metadata } from 'next';
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import Navbar from "../components/layout/Navbar"; // Import Navbar
import Footer from "../components/layout/Footer"; // Import Footer
import "./globals.css";

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
  title: "Bessette IT Solutions",
  description: "IT and website service and support",
  openGraph: {
    title: "Bessette IT Solutions",
    description: "Professional IT services and web development",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bessette IT Solutions",
    description: "Professional IT services and web development",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar /> {/* Add Navbar here */}
          <main>{children}</main> {/* Page-specific content */}
          <Footer /> {/* Add Footer here */}
        </ThemeProvider>
      </body>
    </html>
  );
}


