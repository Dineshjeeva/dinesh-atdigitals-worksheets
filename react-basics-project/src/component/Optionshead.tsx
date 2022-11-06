import { Box, TextField, Typography } from "@mui/material";

import { ChangeEvent } from "react";

interface defaultProps {
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Optionshead({ onChange }: defaultProps) {
  return (
    <Box>
      <Typography paddingTop="20px" marginBottom="20px">
        <TextField
          id="standard-basic"
          label="Option Name"
          variant="standard"
          onChange={onChange}
        />
      </Typography>
      <Typography marginBottom="20px">Options</Typography>
    </Box>
  );
}
