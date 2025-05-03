import { GameSymbolType } from '@/types/types'

export const GAME_SYMBOLS = {
	ZERO: 'zero',
	Cross: 'cross',
	TRIANGLE: 'triangle',
	SQUARE: 'square'
} as const

export const MOVE_ORDER: GameSymbolType[] = [
	GAME_SYMBOLS.Cross,
	GAME_SYMBOLS.ZERO,
	GAME_SYMBOLS.TRIANGLE,
	GAME_SYMBOLS.SQUARE
]
