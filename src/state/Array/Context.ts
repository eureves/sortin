import { createContext, useContext } from "react";

export type ArrayContextValue = {
  array: number[];
  generateNewArray: () => void;
};

export const ArrayContext = createContext<ArrayContextValue>({
  array: [],
  generateNewArray() {},
});
export const useArray = () => useContext(ArrayContext);
