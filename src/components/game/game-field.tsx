'use client'
import clsx from 'clsx'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { UiButton } from '@/components/ui'
import { ClassName, GameSymbolType } from '@/types/types'
import { GameSymbol, useGameState } from '@/components/game'

interface PropsCell {
	children: ReactNode
	onClick: VoidFunction
}

interface MoveProps extends PropsWithChildren {
	currentMove: GameSymbolType
	nextMove: GameSymbolType
}

interface GameProps {
	className?: string
	playersCount: number
}

export const GameField: FC<GameProps> = ({ className, playersCount }) => {
	const { cells, currentMove, nextMove, handleCellClick } =
		useGameState(playersCount)
	return (
		<GameFieldLayout className={className}>
			<GameMoveInfo
				currentMove={currentMove}
				nextMove={nextMove}
			>
				<UiButton
					size='md'
					variant='primary'
				>
					Ничья
				</UiButton>
				<UiButton
					size='md'
					variant='outline'
				>
					Сдаться
				</UiButton>
			</GameMoveInfo>
			<GameGrid>
				{cells.map((symbol, index) => (
					<GameCell
						onClick={() => {
							handleCellClick(index)
						}}
						key={index}
					>
						{symbol && (
							<GameSymbol
								symbol={symbol}
								className='w-5 h-5'
							/>
						)}
					</GameCell>
				))}
			</GameGrid>
		</GameFieldLayout>
	)
}

// _________________________________________________________________________________________________________________________________

export const GameCell: FC<PropsCell> = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='border border-slate-200  flex items-center justify-center'
		>
			{children}
		</button>
	)
}

export const GameFieldLayout: FC<PropsWithChildren<ClassName>> = ({
	children,
	className
}) => {
	return (
		<div
			className={clsx(
				className,
				'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 '
			)}
		>
			{children}
		</div>
	)
}

export const GameMoveInfo: FC<MoveProps> = ({
	children,
	currentMove,
	nextMove
}) => {
	return (
		<div className='flex gap-3 items-center'>
			<div className='mr-auto'>
				<div className='flex  items-center gap-1 text-xl  leading-tight '>
					Ход:{' '}
					<GameSymbol
						symbol={currentMove}
						className='w-5 h-5'
					/>
				</div>
				<div className='flex  items-center gap-1 leading-tight  text-xs  text-slate-400 font-semibold'>
					Следующий:{' '}
					<GameSymbol
						symbol={nextMove}
						className='w-3 h-3'
					/>
				</div>
			</div>
			{children}
		</div>
	)
}

export const GameGrid: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3'>
			{children}
		</div>
	)
}
