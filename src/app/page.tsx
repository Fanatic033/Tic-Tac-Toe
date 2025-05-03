'use client'
import { Header } from '@/components/header'
import { GameInfo, GameTitle, GameField } from '@/components/game'
import { useState } from 'react'

export default function Home() {
	const [playersCount] = useState<number>(4)
	return (
		<div className={`bg-slate-50 min-h-screen`}>
			<Header />
			<main className={'pt-6 mx-auto max-w-[616px]'}>
				<GameTitle playersCount={playersCount} />
				<GameInfo
					playersCount={playersCount}
					className='mt-4'
				/>
				<GameField
					playersCount={playersCount}
					className='mt-6'
				/>
			</main>
		</div>
	)
}
