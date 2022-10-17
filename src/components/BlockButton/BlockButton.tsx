import { FunctionComponent } from "react";

type Props = { label: string; callback: () => void };

const BlockButton: FunctionComponent<Props> = ({ label, callback }) => {
  return (
    <button className="rounded-xl p-2 bg-slate-300" onClick={callback}>
      {label}
    </button>
  );
};

export default BlockButton;
