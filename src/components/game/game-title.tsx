import Link from 'next/link'
import {
	ArrowLeftIcon,
	StarIcon,
	UserIcon,
	WatchIcon
} from '@/components/game/icons'
import { FC } from 'react'

interface Props{
	playersCount: number
}

export const GameTitle: FC<Props> = ({playersCount}) => {
	return (
		<div className='pl-2'>
			<Link
				href={'/src/public'}
				className='flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5'
			>
				<ArrowLeftIcon />
				На главную
			</Link>
			<h1 className='text-4xl  leading-tight'>Крестики Нолики</h1>
			<div className='flex items-center gap-3 text-xs text-slate-400 '>
				<StarIcon />
				<div className='flex items-center gap-1'>
					<UserIcon /> {playersCount}
				</div>
				<div className='flex items-center gap-1'>
					<WatchIcon />1 мин на ход
				</div>
			</div>
		</div>
	)
}
