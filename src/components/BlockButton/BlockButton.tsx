import { FunctionComponent } from "react";

type Props = { label: string; callback: () => void };

const BlockButton: FunctionComponent<Props> = ({ label, callback }) => {
  return (
    <button className="rounded-lg p-2 bg-main border border-dark" onClick={callback}>
      {label}
    </button>
  );
};

export default BlockButton;
