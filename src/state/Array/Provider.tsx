import { FunctionComponent, useState } from "react";
import { ArrayContext } from "./Context";

export const INITIAL_ARRAY = () => {
  return [...new Set(new Array(21).fill(0).map(() => Math.floor(Math.random() * 80) + 10))];
};

type Props = {
  children: React.ReactNode;
};

export const ArrayContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [array, setArray] = useState(INITIAL_ARRAY());

  const generateNewArray = () => {
    setArray(INITIAL_ARRAY());
  };

  return (
    <ArrayContext.Provider value={{ array, generateNewArray }}>{children}</ArrayContext.Provider>
  );
};
