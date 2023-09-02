import Script from "next/script";
import "./globals.css";

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
      <body className="p-4">{children}</body>
    </html>
  );
}
