import { Box, Button } from "@mui/material";

import ElementOption from "./ElementOption";
import { FormEvent } from "react";

// name : input box
// type: dropdown

interface MainProps {
  submitHandler: (e: FormEvent) => void;
  addValueHandler: () => void;
  addOptionHandler: () => void;
  element: { type: string; dropdown: string }[];
  value: { name: string; field: string }[];
}

export default function CatoonAddvendor({
  submitHandler,
  addValueHandler,
  addOptionHandler,
  element,
  value,
}: MainProps) {
  return (
    <Box paddingLeft="10px">
      <ElementOption
        element={element}
        addValueHandler={addValueHandler}
        addOptionHandler={addOptionHandler}
        value={value}
      />
      <Box paddingTop="10px">
        <Button onClick={submitHandler} variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
