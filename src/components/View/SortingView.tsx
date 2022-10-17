import React from "react";
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
            className="bg-red-400 w-5"
            style={{ height: (el / array.length) * 100 }}
          >
            {el}
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default SortingView;
