import type { Metadata } from "next";
import Script from "next/script";
import { CarHireDrawer } from "@/components/CarHireDrawer";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reliance Mobility Solutions | Japan to Zimbabwe",
  description:
    "Reliable vehicle imports from Japan to Zimbabwe. Transparent. Trackable. Stress-free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <CarHireDrawer />
        {children}
        <Footer />
        <Script id="tawk-to-widget" strategy="lazyOnload">
          {`var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/6abd321ee2401d3443075a97/1k3pgni93";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();`}
        </Script>
      </body>
    </html>
  );
}
