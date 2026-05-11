import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Toby Math Academy',
  description: 'BC School Math, AMC competition preparation, video lessons, and bilingual math vocabulary by Toby.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
