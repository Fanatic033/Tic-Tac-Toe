import { GAME_SYMBOLS } from '@/constants/constants'
import { StaticImageData } from 'next/image'

export interface ClassName {
	className?: string
}

export type GameSymbolType = (typeof GAME_SYMBOLS)[keyof typeof GAME_SYMBOLS]

export interface GameState {
	cells: (GameSymbolType | null)[]
	currentMove: GameSymbolType
}

export interface IPlayerInfo {
	name: string
	rating: number
	avatar: string | StaticImageData
	symbol: GameSymbolType
}
