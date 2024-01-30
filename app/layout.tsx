import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ROBBYL.CO | Rob Lam | Full-Stack Developer | JavaScript, React, MongoDB, AWS',
  description: 'Portfolio website & coding playground',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
