import { motion } from "framer-motion";
import { FunctionComponent } from "react";

type Props = {
  array: number[];
};

const SortingView: FunctionComponent<Props> = ({ array }) => {
  return (
    <motion.ul animate className="flex flex-row gap-2 items-end">
      {array.map((el) => {
        return (
          <motion.li
            key={el}
            layout
            className="bg-red-400 w-5 rounded p-10"
            style={{ height: (el / array.length) * 300 }}
          >
            <p className="flex justify-center">{el}</p>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default SortingView;
