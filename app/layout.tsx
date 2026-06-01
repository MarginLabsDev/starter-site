import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TODO: site title',
  description: 'TODO: site description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* TODO: Add analytics snippet here */}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
