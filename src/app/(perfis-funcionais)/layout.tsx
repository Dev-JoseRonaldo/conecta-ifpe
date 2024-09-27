"use client"
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen">
        <div className="flex-1">
          <main className="p-4">{children}</main>
        </div>
      </body>
    </html>
  )
}
