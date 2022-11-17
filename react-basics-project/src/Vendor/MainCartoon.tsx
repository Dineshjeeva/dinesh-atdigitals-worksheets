import { Box, Button, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

import CatoonAddvendor from "./cartoonvendor";
import Header from "./Header";

export default function MainCartoon() {
  const [element, setElement] = useState<
    {
      cartoon: string;
      cartoondrop: string;
      Options: { name: string; value: string }[];
    }[]
  >([
    // { cartoon: "Dinesh", cartoondrop: "Dropdown12", Options: ["bluw", "32"] },
    // { cartoon: "don", cartoondrop: "Dropdown", Options: ["ff", "32"] },
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
      {element.map((e, index) => (
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
      ))}

      <Box paddingTop="10px">
        <Button onClick={submitHandler} variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
