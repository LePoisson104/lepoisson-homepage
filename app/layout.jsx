import { M_PLUS_Rounded_1c } from "next/font/google";
import Navbar from "../components/navbar";
import Providers from "@/lib/providers";
import { Box } from "@mui/material";
import Footer from "../components/footer";
import PWAInstall from "../components/pwa-install";

const mPlus1 = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Viet Pham - Homepage",
  description:
    "Personal homepage and portfolio of Viet Pham - Software Developer",
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Viet Pham",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Viet Pham - Homepage",
    title: "Viet Pham - Homepage",
    description:
      "Personal homepage and portfolio of Viet Pham - Software Developer",
  },
  twitter: {
    card: "summary",
    title: "Viet Pham - Homepage",
    description:
      "Personal homepage and portfolio of Viet Pham - Software Developer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="Viet Pham" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Viet Pham" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/icon-192x192.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/icon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={mPlus1.className}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Providers>
          <Navbar />
          <Box
            sx={{
              mt: 7,
              width: "100%",
              maxWidth: "650px",
              px: { md: 0, sm: 4, xs: 4 },
            }}
          >
            {children}
          </Box>
          <Footer />
          <PWAInstall />
        </Providers>
      </body>
    </html>
  );
}
