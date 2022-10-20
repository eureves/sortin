import { FunctionComponent, useEffect, useState, ReactNode } from "react";
import { BubbleSort } from "../../algorithms/BubbleSort";
import { SelectionSort } from "../../algorithms/SelectionSort";
import { SortingAlgorithm } from "../../algorithms/SortingAlgorithm";
import { useArray } from "../Array/Context";
import { AlgorithmContext } from "./Context";

type Props = {
  children: React.ReactNode;
};

export const algorithms: Record<string, (array: number[]) => SortingAlgorithm> = {
  bubbleSort: (array) => new BubbleSort(array),
  selectionSort: (array) => new SelectionSort(array),
};

export const AlgorithmContextProvider: FunctionComponent<Props> = ({ children }) => {
  const { array } = useArray();
  const [algorithm, algorithmChange] = useState<SortingAlgorithm>(new BubbleSort(array));
  const [currentAlgo, setCurrentAlgo] = useState<string>("bubbleSort");

  const setAlgorithm = (name: string) => {
    setCurrentAlgo(name);
    algorithmChange(algorithms[currentAlgo](array));
  };

  useEffect(() => {
    setAlgorithm(currentAlgo);
  }, [array]);

  return (
    <AlgorithmContext.Provider value={{ algorithm, setAlgorithm }}>
      {children}
    </AlgorithmContext.Provider>
  );
};
