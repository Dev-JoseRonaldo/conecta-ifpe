import { Metadata } from "next"
import "styles/tailwind.css"

export const metadata: Metadata = {
  title: "Conecta IFPE",
  icons: "/favicon.ico",

  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "localhost:3000",
    images: [
      {
        width: 404,
        height: 316,
        url: "https://mir-s3-cdn-cf.behance.net/projects/404/a7563b49251985.Y3JvcCw3MzIsNTczLDEzNyww.png",
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
