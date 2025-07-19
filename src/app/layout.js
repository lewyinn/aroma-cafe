import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Aroma Café | Artisan Coffee & Modern Vibes in Downtown",
  description:
    "Discover Aroma Café, your go-to destination for bold, handcrafted coffee and a modern, creative ambiance. Visit us at 123 Coffee Street, Downtown for a soulful coffee experience.",
  keywords: [
    "Aroma Café",
    "artisan coffee",
    "coffee shop downtown",
    "modern café",
    "handcrafted coffee",
    "coffee experience",
    "creative ambiance",
    "specialty coffee",
    "local pastries",
    "coffee lovers",
  ],
  openGraph: {
    title: "Aroma Café | Bold Brews, Modern Vibes",
    description:
      "Experience artisan coffee crafted with passion at Aroma Café. Join us at 123 Coffee Street, Downtown for a unique coffee vibe.",
    url: "https://aromacafe.vercel.app",
    siteName: "Aroma Café",
    images: [
      {
        url: "https://aromacafe.vercel.app/assets/Cozy-Cafe.webp",
        width: 1200,
        height: 630,
        alt: "Aroma Café cozy coffee shop interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma Café | Artisan Coffee & Modern Vibes",
    description:
      "Savor bold, handcrafted coffee at Aroma Café, Downtown’s creative hub. Visit us at 123 Coffee Street!",
    images: ["https://aromacafe.vercel.app/assets/Cozy-Cafe.webp"],
    creator: "@AromaCafe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aromacafe.vercel.app",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "Aroma Café Team", url: "https://aromacafe.vercel.app" }],
  publisher: "Aroma Café",
  category: "Coffee Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}