import { ChangeEvent, FormEvent, useState } from "react";

import Addoptions from "./Addoptions";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

// interface AddvaluesButtonProps {
//   Name: string;
// }

// type Item = [];
// type Statealign = {
//   Name: string;
//   options: Item[];
// };

export default function Totalall() {
  const [addOptions, setAddOptions] = useState<
    { Name: string; Option: string[] }[]
  >([]);

  let handleOption = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Name"] = e.target.value;
    setAddOptions(newAddOptions);
  };

  let addOptionHandler = () => {
    setAddOptions([...addOptions, { Name: "", Option: [] }]);
  };

  let addValueHandler = (i: number) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Option"] = [...newAddOptions[i]["Option"], ""];
    setAddOptions(newAddOptions);
  };
  let handleChange = (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Option"][item] = e.target.value;
    setAddOptions(newAddOptions);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(addOptions);
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
