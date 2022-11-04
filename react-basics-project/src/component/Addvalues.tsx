import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

import Optionshead from "./Optionshead";

interface AddvaluesButtonProps {
  Name: string;
}

export default function Addvalues() {
  const [addValues, setAddValues] = useState<AddvaluesButtonProps[]>([]);
  let addValueHandler = () => {
    setAddValues([...addValues, { Name: "" }]);
  };

  let handleChange = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddValues = [...addValues];
    newAddValues[i]["Name"] = e.target.value;
    setAddValues(newAddValues);
  };
  console.log(addValues);

  return (
    <Box
      width="259px"
      height="392px"
      padding={1}
      marginLeft="10px"
      border="1px solid black"
    >
      <Optionshead />
      {addValues.map((element, index) => (
        <Box marginBottom="20px">
          <TextField
            id="standard-basic"
            label={"value " + (index + 1)}
            variant="standard"
            onChange={(e) => handleChange(index, e)}
          />
        </Box>
      ))}

      <Typography marginBottom="20px">
        <Button variant="contained" onClick={addValueHandler}>
          ADD VALUE
        </Button>
      </Typography>
    </Box>
  );
}
