import { FunctionComponent } from "react";
import BlockButton from "../BlockButton/BlockButton";

type Props = {
  startHandler: () => void;
  nextStepHandler: () => void;
};

const ButtonsBlock: FunctionComponent<Props> = ({ startHandler, nextStepHandler }) => {
  return (
    <div className="flex gap-2">
      <BlockButton label="Auto" callback={startHandler} />
      <BlockButton label="Next Step" callback={nextStepHandler} />
    </div>
  );
};

export default ButtonsBlock;
