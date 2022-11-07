import { Box, Button, TextField, Typography } from "@mui/material";

import { ChangeEvent } from "react";
import Optionshead from "./Optionshead";

interface DefaultPropsOne {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addValueHandler: () => void;
  addValues: string[];
  handleChange: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Addvalues({
  onChange,
  addValueHandler,
  handleChange,
  addValues,
}: DefaultPropsOne) {
  return (
    <Box
      width="259px"
      height="392px"
      padding={1}
      marginLeft="10px"
      border="1px solid black"
    >
      <Optionshead onChange={onChange} />
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
