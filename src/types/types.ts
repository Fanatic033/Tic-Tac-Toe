import { GAME_SYMBOLS } from '@/constants/constants'

export interface ClassName {
	className?: string
}

export type GameSymbolType = (typeof GAME_SYMBOLS)[keyof typeof GAME_SYMBOLS]

export interface GameState {
	cells: (GameSymbolType | null)[];
	currentMove: GameSymbolType;
}
