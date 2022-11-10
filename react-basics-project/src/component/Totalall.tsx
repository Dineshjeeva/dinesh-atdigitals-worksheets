import { ChangeEvent, FormEvent, useState } from "react";

import Addoptions from "./Addoptions";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function Totalall() {
  const [addOptions, setAddOptions] = useState<
    { Name: string; Options: string[] }[]
  >([
    { Name: "Size", Options: ["Small", "Medium"] },
    { Name: "Color", Options: ["Red", "Green", "Blue"] },
    { Name: "Style", Options: [] },
  ]);

  let handleOption = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Name"] = e.target.value;
    setAddOptions(newAddOptions);
  };

  let addOptionHandler = () => {
    setAddOptions([...addOptions, { Name: "", Options: [] }]);
  };

  let addValueHandler = (i: number) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Options"] = [...newAddOptions[i]["Options"], ""];
    setAddOptions(newAddOptions);
  };
  let handleChange = (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Options"][item] = e.target.value;
    setAddOptions(newAddOptions);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(addOptions);
  };

  const removeoptioinBox = (index: number) => {
    const Optioins = [...addOptions];
    Optioins.splice(index, 1);
    setAddOptions(Optioins);
  };

  const valueRemove = (i: number, index: number) => {
    let valuesrem = [...addOptions];
    valuesrem[i]["Options"].splice(index, 1);
    setAddOptions(valuesrem);

    console.log(i, valuesrem);
  };

  return (
    <form onSubmit={submitHandler}>
      <Box height="350px">
        <Addoptions
          addOptionHandler={addOptionHandler}
          addOptions={addOptions}
          handleOption={handleOption}
          addValueHandler={addValueHandler}
          handleChange={handleChange}
          removeAddOption={removeoptioinBox}
          valueRemove={valueRemove}
        />

        <Box padding="10px" paddingTop="25px">
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
}
