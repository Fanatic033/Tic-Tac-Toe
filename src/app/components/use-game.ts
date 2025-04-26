import {useState} from 'react'
import {SYMBOL_O, SYMBOL_X} from "./constants";

const computeWinner = (cells) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (
            cells[a] &&
            cells[a] === cells[b] &&
            cells[a] === cells[c]
        ) {
            return [a, b, c]
        }
    }
}

export function useGameState() {
    const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null]);
    const [currentStep, setCurrentStep] = useState(SYMBOL_O);
    const [winner, setWinner] = useState()

    const winnerSymbol = winner ? cells[winner[0]] : undefined
    const isDraw = !winner && cells.filter(value => value).length === 9;
    const getWinnerCell = (index) => winner?.includes(index)

    const toggleCell = (index) => {
        if (cells[index] || winner) {
            return;
        }
        const cellsCopy = cells.slice()
        cellsCopy[index] = currentStep
        const win = computeWinner(cellsCopy)
        setCells(cellsCopy)
        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O)
        setWinner(win)
    }
    const resetGame = () => {
        setCells((Array.from({length: 9}, () => null)))
        setCurrentStep(SYMBOL_X)
        setWinner(undefined)
    }

    return {
        cells,
        currentStep,
        winnerSymbol,
        isDraw,
        toggleCell,
        resetGame,
        getWinnerCell
    };
}