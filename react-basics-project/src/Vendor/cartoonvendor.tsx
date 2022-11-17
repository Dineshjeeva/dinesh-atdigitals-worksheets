import { Box, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, FormEvent } from "react";

import ElementOption from "./ElementOption";

// name : input box
// type: dropdown

interface MainProps {
  submitHandler: (e: FormEvent) => void;

  addValueHandler: () => void;
  addOptionHandler: (i: number) => void;
  element: {
    cartoon: string;
    cartoondrop: string;
    Options: { name: string; value: string }[];
  }[];

  handleChange: (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleChange2: (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleChangeName: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleDrop: (i: number, e: SelectChangeEvent) => void;
}

export default function CatoonAddvendor({
  submitHandler,
  addValueHandler,
  addOptionHandler,
  element,
  handleChangeName,
  handleChange2,
  handleDrop,
  handleChange,
}: MainProps) {
  return (
    <Box>
      <ElementOption
        addValueHandler={addValueHandler}
        addOptionHandler={addOptionHandler}
        element={element}
        handleChange={handleChange}
        handleNameOption={handleChangeName}
        handleChange2={handleChange2}
        index={0}
        handleDrop={handleDrop}
      />
    </Box>
  );
}
