import { ChangeEvent } from "react";
import { useAlgorithm } from "../../state/Algorithm/Context";

const options = [
  { name: "Bubble Sort", algo: "bubbleSort" },
  { name: "Selection Sort", algo: "selectionSort" },
];

export const AlgorithmSelector = () => {
  const { setAlgorithm } = useAlgorithm();

  const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setAlgorithm(target.value);
  };

  return (
    <select onChange={handleChange}>
      {options.map((el) => {
        return (
          <option key={el.algo} value={el.algo}>
            {el.name}
          </option>
        );
      })}
    </select>
  );
};
