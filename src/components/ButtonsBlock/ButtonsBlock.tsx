import { FunctionComponent } from "react";
import { useArray } from "../../state/Array/Context";
import { AlgorithmSelector } from "../AlgorithmSelector/AlgorithmSelector";
import BlockButton from "../BlockButton/BlockButton";

type Props = {
  start: boolean;
  startHandler: () => void;
  nextStepHandler: () => void;
};

const ButtonsBlock: FunctionComponent<Props> = ({ start, startHandler, nextStepHandler }) => {
  const { generateNewArray } = useArray();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <BlockButton label={start ? "Stop" : "Auto"} callback={startHandler} />
        <BlockButton label="Next Step" callback={nextStepHandler} />
      </div>
      <div className="flex justify-between">
        <AlgorithmSelector />
        <BlockButton label="Generate" callback={generateNewArray} />
      </div>
    </div>
  );
};

export default ButtonsBlock;
