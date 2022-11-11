import { FormEvent, useState } from "react";

import { Box } from "@mui/material";
import CatoonAddvendor from "./cartoonvendor";

export default function MainCartoon() {
  const [element, setElement] = useState<{ type: string; dropdown: string }[]>(
    []
  );
  const [value, setState] = useState<{ name: string; field: string }[]>([]);
  let addOptionHandler = () => {
    setState([...value, { name: "", field: "" }]);
  };
  console.log("==============");

  console.log(value);

  let addValueHandler = () => {
    setElement([...element, { type: "Type", dropdown: "" }]);
  };

  console.log(element);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(element, value);
  };
  return (
    <Box>
      <CatoonAddvendor
        submitHandler={submitHandler}
        addValueHandler={addValueHandler}
        addOptionHandler={addOptionHandler}
        element={element}
        value={value}
      />
    </Box>
  );
}
