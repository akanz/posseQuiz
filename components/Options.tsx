import React, { useState } from "react";
import { motion } from "framer-motion";

export interface PropsType {
  answer: any;
  item: any;
  handleAnswer: (item: any) => void;
  Select: boolean;
  setSelect: (Select: boolean) => void;
  disable: boolean;
}

const Options = ({
  answer,
  item,
  handleAnswer,
  Select,
  setSelect,
  disable,
}: PropsType) => {
  return (
    <motion.button
      disabled={disable}
      whileTap={{ scale: disable ? "" : 0.9 }}
      whileHover={{ scale: disable ? "" : 1.05 }}
      className={`${
        Select && answer.id === item.id
          ? "bg-black text-white"
          : "border-gray-400 text-black"
      }  border-2 p-2 rounded-md hover:opacity-60 cursor-pointer`}
      onClick={() => {
        handleAnswer(item);
        setSelect(!Select);
      }}
    >
      {item.name}
    </motion.button>
  );
};

export default Options;
