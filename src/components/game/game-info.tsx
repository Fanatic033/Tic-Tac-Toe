import clsx from 'clsx'
import { FC } from 'react'
import { Profile } from '@/components/profile'
import { GameSymbol } from '@/components/game/game-symbol'
import { IPlayerInfo } from '@/types/types'
import { GAME_SYMBOLS } from '@/constants/constants'
import avatarSrc1 from '@/public/avatar1.png'
import avatarSrc2 from '@/public/avatar2.png'
import avatarSrc3 from '@/public/avatar3.png'
import avatarSrc4 from '@/public/avatar4.png'

const players = [
	{
		id: 1,
		name: 'player1',
		rating: 1230,
		avatar: avatarSrc1,
		symbol: GAME_SYMBOLS.Cross
	},
	{
		id: 2,
		name: 'player2',
		rating: 1230,
		avatar: avatarSrc2,
		symbol: GAME_SYMBOLS.ZERO
	},
	{
		id: 3,
		name: 'player3',
		rating: 1230,
		avatar: avatarSrc3,
		symbol: GAME_SYMBOLS.TRIANGLE
	},
	{
		id: 4,
		name: 'player4',
		rating: 1230,
		avatar: avatarSrc4,
		symbol: GAME_SYMBOLS.SQUARE
	}
]

interface Props {
	className?: string
	playersCount: number
}

export const GameInfo: FC<Props> = ({ className, playersCount }) => {
	return (
		<div
			className={clsx(
				className,
				'bg-white rounded-2xl shadow-md px-8 py-4  justify-between grid grid-cols-2 gap-3 '
			)}
		>
			{players.slice(0, playersCount).map((player, index) => (
				<PlayerInfo
					playerInfo={player}
					key={player.id}
					isRight={index % 2 === 1}
				/>
			))}
		</div>
	)
}

//=------------------------------------------------------------------------------------------

interface PlayerInfoProps {
	playerInfo: IPlayerInfo
	isRight: boolean
}

export const PlayerInfo: FC<PlayerInfoProps> = ({ playerInfo, isRight }) => {
	return (
		<div className='flex gap-3 items-center '>
			<div className={clsx('relative', isRight && 'order-3')}>
				<Profile
					className='w-44'
					name={playerInfo.name}
					rating={playerInfo.rating}
					avatar={playerInfo.avatar}
				/>
				<div className='w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center'>
					<GameSymbol symbol={playerInfo.symbol} />
				</div>
			</div>
			<div className={clsx('h-6 w-px bg-slate-200', isRight && 'order-2')} />
			<div
				className={clsx(
					'text-slate-900 font-semibold text-lg',
					isRight && 'order-1'
				)}
			>
				01:08
			</div>
		</div>
	)
}
