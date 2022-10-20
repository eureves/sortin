import { createContext, useContext } from "react";
import { BubbleSort } from "../../algorithms/BubbleSort";
import { SortingAlgorithm } from "../../algorithms/SortingAlgorithm";

export const INITIAL_ARRAY = [
  ...new Set(new Array(50).fill(0).map(() => Math.floor(Math.random() * 80) + 10)),
];

export const DEFAULT_ALGORITHM: SortingAlgorithm = new BubbleSort(INITIAL_ARRAY);

export type AlgorithmContextValue = {
  algorithm: SortingAlgorithm;
  setAlgorithm: (name: string) => void;
};

export const AlgorithmContext = createContext<AlgorithmContextValue>({
  algorithm: new BubbleSort([]),
  setAlgorithm() {},
});
export const useAlgorithm = () => useContext(AlgorithmContext);
