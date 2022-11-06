import { ChangeEvent, useState } from "react";

import Addoptions from "./Addoptions";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function Totalall() {
  const [addOptions, setAddOptions] = useState<{ Name: string }[]>([]);

  let handleOption = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...addOptions];
    newAddOptions[i]["Name"] = e.target.value;
    setAddOptions(newAddOptions);
  };

  let addOptionHandler = () => {
    setAddOptions([...addOptions, { Name: "" }]);
  };
  const submitHandler = () => {
    //e.preventDefault();

    console.log(addOptions);
  };

  return (
    <Box height="350px">
      <Addoptions
        addOptionHandler={addOptionHandler}
        addOptions={addOptions}
        handleOption={handleOption}
      />

      <Box padding="10px" paddingTop="25px">
        <Button onClick={submitHandler} type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
