import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://philly.juandiazllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Philly — US field ops dashboard · Juan Diaz LLC",
    template: "%s · Philly",
  },
  description:
    "Field-first interface for ground teams — dispatch, routing, live status. The first product under Juan Diaz LLC's US arm.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="shell">
          <nav className="top">
            <Link href="/" className="brand" style={{ gap: 12, color: "var(--accent)" }}>
              <Logo size={24} />
              <span style={{ color: "var(--text)" }}>Philly · Ops</span>
            </Link>
            <div className="nav-right">
              <a href="https://juandiazllc.com" className="always">← juandiazllc.com</a>
              <Link href="/login" className="auth">◉ Login</Link>
            </div>
          </nav>
          <main>{children}</main>
          <footer>
            <div>© Juan Diaz LLC — Philly · 2026</div>
            <div>philly.juandiazllc.com · Field ops · US</div>
            <div>
              <a href="https://juandiazllc.com">juandiazllc.com</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
