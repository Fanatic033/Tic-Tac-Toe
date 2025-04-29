import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin']
// })
//
// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin']
// })

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
	title: 'Tic Tae Toe',
	description: 'game tic-tac-toe'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}
