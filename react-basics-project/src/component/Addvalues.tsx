import { Box, Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

import CloseIcon from "@mui/icons-material/Close";
import Optionshead from "./Optionshead";

interface DefaultPropsOne {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addValueHandler: () => void;
  addValues: string[];
  addOptions: { Name: string; Options: string[] }[];
  OptionName: string;

  setAddOptions: Dispatch<
    SetStateAction<{ Name: string; Options: string[] }[]>
  >;

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
  setAddOptions,
  addOptions,
  OptionName,
}: DefaultPropsOne) {
  const removeInputFields = (index: number) => {
    const rows = [...addOptions];
    rows.splice(index, 1);
    setAddOptions(rows);
  };
  console.log(addOptions);

  return (
    <Box
      width="259px"
      height="392px"
      padding={1}
      marginLeft="10px"
      border="1px solid black"
    >
      <Optionshead OptionName={OptionName} onChange={onChange} />
      {addValues.map((items, index) => (
        <Box marginBottom="20px">
          <TextField
            value={items}
            InputProps={{
              endAdornment: (
                <Button onClick={() => removeInputFields(index)}>
                  <CloseIcon color="action" />
                </Button>
              ),
            }}
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
      <Button
        style={{ background: "orange", color: "white", marginTop: "25px" }}
      >
        REMOVE
      </Button>
    </Box>
  );
}
