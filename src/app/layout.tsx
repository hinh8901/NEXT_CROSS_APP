import { inter } from "./fonts";
import "./globals.css"
import { Providers } from "./providers"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
