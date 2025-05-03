import { GAME_SYMBOLS } from '@/constants/constants'
import {
	CrossIcon,
	SquareIcon,
	TriangleIcon,
	ZeroIcon
} from '@/components/game/icons'
import { FC } from 'react'
import { GameSymbolType } from '@/types/types'

interface Props {
	symbol: GameSymbolType
	className?: string
}

export const GameSymbol: FC<Props> = ({ symbol, className }) => {
	const Icon =
		{
			[GAME_SYMBOLS.Cross]: CrossIcon,
			[GAME_SYMBOLS.ZERO]: ZeroIcon,
			[GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
			[GAME_SYMBOLS.SQUARE]: SquareIcon
		}[symbol] ?? CrossIcon
	return <Icon className={className} />
}
