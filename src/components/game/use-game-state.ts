'use client'
import { useState } from 'react'
import { GameState, GameSymbolType } from '@/types/types'
import { GAME_SYMBOLS, MOVE_ORDER } from '@/constants/constants'

function getNextMove(currentMove: GameSymbolType) {
	const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1
	return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0]
}

export const useGameState = () => {
	const [{ currentMove, cells }, setGameState] = useState<GameState>(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOLS.Cross
	}))
	const nextMove = getNextMove(currentMove)

	const handleCellClick = (index: number) => {
		setGameState(prevState => {
			if (prevState.cells[index]) return prevState
			return {
				...prevState,
				currentMove: getNextMove(prevState.currentMove),
				cells: prevState.cells.map((cell, i) =>
					i === index ? prevState.currentMove : cell
				)
			}
		})
	}
	return { cells, currentMove, nextMove, handleCellClick }
}
