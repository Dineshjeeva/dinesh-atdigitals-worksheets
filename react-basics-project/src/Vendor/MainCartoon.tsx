import { Box, Button, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

import CatoonAddvendor from "./cartoonvendor";
import Header from "./Header";

// interface cartoonnameProps {
//   cartoon: string;
// }

// interface elementsProps {
//   element: {
//     cartoondrop: string;
//     Options: { name: string; value: string }[];
//   };
// }

export default function MainCartoon() {
  const [element, setElement] = useState<
    {
      cartoon: string;
      cartoondrop: string;
      Options: { name: string; value: string }[];
    }[]
  >([
    // {
    //   cartoon: "dinesh",
    //   cartoondrop: "Dropdown",
    //   Options: [
    //     { name: "Full Body", value: "12" },
    //     { name: "Shoulder up", value: "23" },
    //   ],
    // },
  ]);

  console.log("==============");

  let addValueHandler = () => {
    setElement([
      ...element,
      { cartoon: "", cartoondrop: "", Options: [{ name: "", value: "" }] },
    ]);
  };
  let addkartHandler = () => {
    setElement([
      ...element,
      { cartoon: "", cartoondrop: "", Options: [{ name: "", value: "" }] },
    ]);
  };

  console.log(element);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(element);
  };

  let addOptionHandler = (i: number) => {
    let newAddOptions = [...element];
    newAddOptions[i]["Options"] = [
      ...newAddOptions[i]["Options"],
      { name: "", value: "" },
    ];
    setElement(newAddOptions);
    console.log("Newaa" + newAddOptions);
  };
  let handleChange2 = (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...element];
    newAddOptions[i]["Options"][item]["name"] = e.target.value;
    setElement(newAddOptions);
    console.log("New" + newAddOptions);
  };
  let handleChange = (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...element];
    newAddOptions[i]["Options"][item]["value"] = e.target.value;
    setElement(newAddOptions);
    console.log("New" + newAddOptions);
  };

  const handleChangeName = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let cartooname = [...element];
    cartooname[i]["cartoon"] = e.target.value;
    setElement(cartooname);
    console.log(cartooname);
  };
  const handleDrop = (i: number, e: SelectChangeEvent) => {
    let cartooname = [...element];
    cartooname[i]["cartoondrop"] = e.target.value;
    setElement(cartooname);
    console.log(cartooname);
  };
  return (
    <Box paddingLeft="10px">
      <Header addkartHandler={addkartHandler} />
      <CatoonAddvendor
        submitHandler={submitHandler}
        addValueHandler={addValueHandler}
        addOptionHandler={addOptionHandler}
        element={element}
        handleChange={handleChange}
        handleChangeName={handleChangeName}
        handleChange2={handleChange2}
        handleDrop={handleDrop}
      />

      <Box paddingTop="10px">
        <Button onClick={submitHandler} variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
