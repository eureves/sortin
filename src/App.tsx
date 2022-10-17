import { useState, useMemo as useEffect, useCallback } from "react";
import ButtonsBlock from "./components/ButtonsBlock/ButtonsBlock";
import SortingView from "./components/SortingView/SortingView";

const INITIAL_ARRAY = [7, 5, 4, 11, 2, 1];

const swapArray = (array: number[], index: number): number[] => {
  const tempArr = [...array];
  const temp = tempArr[index + 1];
  tempArr[index + 1] = tempArr[index];
  tempArr[index] = temp;
  return tempArr;
};

const bubbleSort = (array: number[], step: number) => {
  if (array[step] > array[step + 1]) return swapArray(array, step);
  return array;
};

function App() {
  const [array, setArray] = useState<number[]>(INITIAL_ARRAY);
  const [step, setStep] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number>();

  useEffect(() => {
    console.log(step);
    if (step + 2 <= array.length) {
      setArray((state) => bubbleSort(state, step));
    } else {
      setStep(0);
    }
  }, [step]);

  // const interval = useCallback(() => {
  //   return;
  // }, []);

  useEffect(() => {
    if (start) {
      setIntervalId(setInterval(() => setStep((state) => state + 1), 1000));
    } else {
      clearInterval(intervalId);
    }
    return clearInterval(intervalId);
  }, [start]);

  const handleStart = () => {
    console.log("start");
    setStart((start) => !start);
  };

  const handleStepChange = () => {
    setStep((step) => step + 1);
  };

  return (
    <div className="w-4/5 h-screen mx-auto flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <SortingView array={array} />
        <ButtonsBlock startHandler={handleStart} nextStepHandler={handleStepChange} />
      </div>
    </div>
  );
}

export default App;
