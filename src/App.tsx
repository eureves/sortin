import { useState, useMemo } from "react";
import ButtonsBlock from "./components/ButtonsBlock/ButtonsBlock";
import SortingView from "./components/SortingView/SortingView";

function App() {
  const [array, setArray] = useState<number[]>([7, 5, 4, 11, 2]);
  const [step, setStep] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  const bubbleSortManual = (array: number[], step: number) => {
    let i: number = 0;

    if (step + 2 >= array.length) {
      setStep(0);
      i++;
    }

    if (array[step] > array[step + 1]) return swapArray(array, step);
    return array;
  };

  const swapArray = (array: number[], index: number): number[] => {
    const tempArr = [...array];
    const temp = tempArr[index + 1];
    tempArr[index + 1] = tempArr[index];
    tempArr[index] = temp;
    return tempArr;
  };

  const handleStart = () => {
    setStart((start) => !start);
  };

  const handleStepChange = () => {
    setArray((state) => bubbleSortManual(state, step));
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
