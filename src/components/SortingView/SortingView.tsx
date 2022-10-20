import { motion } from "framer-motion";
import { FunctionComponent } from "react";

type Props = {
  array: number[];
  selected: number[];
};

const SortingView: FunctionComponent<Props> = ({ array, selected }) => {
  return (
    <motion.ul
      animate
      className="w-full h-2/3 flex flex-row items-end justify-center p-2 bg-main border border-dark rounded"
    >
      {array.map((el, index) => {
        return (
          <motion.li
            layout
            key={el}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className={"grow rounded border border-dark lg:mx-2".concat(
              selected.includes(index) ? " bg-red" : " bg-yellow"
            )}
            style={{ height: (el / array.length) * 70 }}
          >
            <p className="hidden lg:flex justify-center ">{el}</p>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default SortingView;
