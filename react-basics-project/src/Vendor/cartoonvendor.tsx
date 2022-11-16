import { Box, Button } from "@mui/material";
import { ChangeEvent, FormEvent } from "react";

import ElementOption from "./ElementOption";

// name : input box
// type: dropdown

interface MainProps {
  submitHandler: (e: FormEvent) => void;
  addValueHandler: () => void;
  addOptionHandler: (i: number) => void;
  element: { type: string; Options: string[] }[];
  handleChange: (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function CatoonAddvendor({
  submitHandler,
  addValueHandler,
  addOptionHandler,
  element,
  handleChange,
}: MainProps) {
  return (
    <Box paddingLeft="10px">
      <ElementOption
        addValueHandler={addValueHandler}
        addOptionHandler={addOptionHandler}
        element={element}
        handleChange={handleChange}
      />
      <Box paddingTop="10px">
        <Button onClick={submitHandler} variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
