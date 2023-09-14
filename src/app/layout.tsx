import Script from "next/script";
import Header from "@/views/header";

import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {process.env.NODE_ENV !== "development" && (
        <>
          <Script
            strategy="afterInteractive"
            id="gtag"
            src="https://www.googletagmanager.com/gtag/js?id=G-N9SNZMKLSF"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N9SNZMKLSF');
            `}
          </Script>
          <Script
            strategy="afterInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2149528894778035"
            crossOrigin="anonymous"
          />
        </>
      )}
      <body className="p-4">
        <div className="max-w-3xl mx-auto">
          <Header />
        </div>
        {children}
        <footer className="text-center max-w-3xl mx-auto mt-32">
          <h2 className="text-2xl font-bold">Is it Meant to Be?</h2>
          <p className="my-4">
            If you&apos;re liking what I&apos;m putting down and think that I could help you, don&apos;t hesitate. Reach
            out today and let&apos;s get started working together.
          </p>
          <Button asChild>
            <Link href="#services">Get Started</Link>
          </Button>
        </footer>
      </body>
    </html>
  );
}
