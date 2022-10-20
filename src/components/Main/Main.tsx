import { useState, useMemo as useEffect, useCallback } from "react";
import ButtonsBlock from "../../components/ButtonsBlock/ButtonsBlock";
import SortingView from "../../components/SortingView/SortingView";
import { useAlgorithm } from "../../state/Algorithm/Context";

function Main() {
  const { algorithm } = useAlgorithm();
  const [step, setStep] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);
  const [enable, setEnable] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number>();

  useEffect(() => {
    if (enable) algorithm.executeStep();
  }, [step]);

  useEffect(() => {
    if (start) {
      setIntervalId(setInterval(() => setStep((state) => state + 1), 20));
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
    <div className="w-screen h-2/3 lg:w-4/5 mx-auto flex justify-center items-center">
      <div className="w-full h-full flex flex-col gap-2 items-center">
        <SortingView array={algorithm.getArray()} selected={algorithm.getSelected()} />
        {enable ? (
          <>
            <ButtonsBlock
              start={start}
              startHandler={handleStart}
              nextStepHandler={handleStepChange}
            />
          </>
        ) : (
          <button onClick={() => setEnable((state) => !state)}>Start</button>
        )}
      </div>
    </div>
  );
}

export default Main;
