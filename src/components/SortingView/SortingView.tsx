import { motion } from "framer-motion";
import { FunctionComponent } from "react";

type Props = {
  array: number[];
};

const SortingView: FunctionComponent<Props> = ({ array }) => {
  return (
    <motion.ul animate className="flex flex-row gap-1 items-end">
      {array.map((el) => {
        return (
          <motion.li
            layout
            transition={{
              duration: 0.1,
            }}
            className="bg-red-400 w-5 rounded p-2"
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
