import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

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
	description: 'game tic-tac-toe',
	icons: 'https://gamescrafters.berkeley.edu/instructions/i/tictactoe/tictactoe.svg'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={clsx(inter.className, 'antialiased text-slate-900')}>
				{children}
			</body>
		</html>
	)
}
