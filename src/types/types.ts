import {SYMBOL_O, SYMBOL_X} from "@/components/game/constants";

export type Symbol = typeof SYMBOL_O | typeof SYMBOL_X;
export type Cell = Symbol | null;
export type Winner = [number, number, number] | undefined;
