import { Box, Button, TextField, Typography } from "@mui/material";

import { ChangeEvent } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Optionshead from "./Optionshead";

interface DefaultPropsOne {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addValueHandler: () => void;
  addValues: string[];
  OptionName: string;

  valueRemove: (i: number) => void;

  removeAddOption: () => void;

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

  OptionName,
  valueRemove,
  removeAddOption,
}: DefaultPropsOne) {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      width="259px"
      minHeight="392px"
      padding={1}
      marginLeft="10px"
      border="1px solid black"
    >
      <Optionshead OptionName={OptionName} onChange={onChange} />
      {addValues.map((items, index) => (
        <Box marginBottom="20px">
          <TextField
            value={items}
            id="standard-basic"
            label={"value " + (index + 1)}
            variant="standard"
            onChange={(e) => handleChange(index, e)}
          />

          <Button
            style={{ marginTop: "15px" }}
            onClick={() => valueRemove(index)}
          >
            <CloseIcon color="action" />
          </Button>
        </Box>
      ))}

      <Typography marginBottom="20px">
        <Button variant="contained" onClick={addValueHandler}>
          ADD VALUE
        </Button>
        <Box marginTop="20%">
          <Button
            onClick={removeAddOption}
            style={{ background: "orange", color: "white" }}
          >
            REMOVE
          </Button>
        </Box>
      </Typography>
    </Box>
  );
}
