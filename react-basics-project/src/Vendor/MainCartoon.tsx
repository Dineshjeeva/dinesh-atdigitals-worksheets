import { ChangeEvent, FormEvent, useState } from "react";

import { Box } from "@mui/material";
import CatoonAddvendor from "./cartoonvendor";
import Header from "./Header";

// export interface CarttoonFieldProps {
//   [key: string]: string;
//   cartoonName: string;
// }

export default function MainCartoon() {
  const [element, setElement] = useState<{ type: string; Options: string[] }[]>(
    []
  );

  let addOptionHandler = (i: number) => {
    let newAddOptions = [...element];
    newAddOptions[i]["Options"] = [...newAddOptions[i]["Options"], ""];
    setElement(newAddOptions);
  };
  console.log("==============");
  let addValueHandler = () => {
    setElement([...element, { type: "", Options: [] }]);
  };

  console.log(element);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(element);
  };

  let handleChange = (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("+++++++++++");

    console.log(item, i);
    let newAddOptions = [...element];
    newAddOptions[i]["Options"][item] = e.target.value;
    setElement(newAddOptions);
    console.log("++++++=====");
    console.log(newAddOptions);
  };
  return (
    <Box>
      <Header />

      <CatoonAddvendor
        submitHandler={submitHandler}
        addValueHandler={addValueHandler}
        addOptionHandler={addOptionHandler}
        element={element}
        handleChange={handleChange}
      />
    </Box>
  );
}
