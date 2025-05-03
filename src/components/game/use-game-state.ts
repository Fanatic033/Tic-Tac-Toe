'use client'
import { useState } from 'react'
import { GameState, GameSymbolType } from '@/types/types'
import { GAME_SYMBOLS, MOVE_ORDER } from '@/constants/constants'

function getNextMove(currentMove: GameSymbolType, playersCount: number) {
	const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount)
	const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1
	return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0]
}

export const useGameState = (playersCount: number) => {
	const [{ currentMove, cells }, setGameState] = useState<GameState>(() => ({
		cells: new Array(19 * 19).fill(null),
		currentMove: GAME_SYMBOLS.Cross
	}))
	const nextMove = getNextMove(currentMove, playersCount)

	const handleCellClick = (index: number) => {
		setGameState(prevState => {
			if (prevState.cells[index]) return prevState
			return {
				...prevState,
				currentMove: getNextMove(prevState.currentMove,playersCount),
				cells: prevState.cells.map((cell, i) =>
					i === index ? prevState.currentMove : cell
				)
			}
		})
	}
	return { cells, currentMove, nextMove, handleCellClick }
}
