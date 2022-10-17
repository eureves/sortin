import { useState, useMemo as useEffect, useCallback } from "react";
import BubbleSort from "./algorithms/BubbleSort";
import ButtonsBlock from "./components/ButtonsBlock/ButtonsBlock";
import SortingView from "./components/SortingView/SortingView";

const INITIAL_ARRAY = new Array(75).fill(0).map(() => Math.floor(Math.random() * 200));

function App() {
  const [algo, setAlgo] = useState<BubbleSort>(new BubbleSort(INITIAL_ARRAY));
  const [step, setStep] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [enable, setEnable] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number>();

  useEffect(() => {
    if (enable) algo.executeStep();
  }, [step]);

  useEffect(() => {
    if (start) {
      setIntervalId(setInterval(() => setStep((state) => state + 1), 5));
    } else {
      clearInterval(intervalId);
    }
    return clearInterval(intervalId);
  }, [start]);

  const handleStart = () => {
    setStart((start) => !start);
  };

  const handleStepChange = () => {
    setStep((step) => step + 1);
  };

  return (
    <div className="w-4/5 h-screen mx-auto flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <SortingView array={algo.getArray()} />
        {enable ? (
          <ButtonsBlock startHandler={handleStart} nextStepHandler={handleStepChange} />
        ) : (
          <button onClick={() => setEnable((state) => !state)}>Start</button>
        )}
      </div>
    </div>
  );
}

export default App;
