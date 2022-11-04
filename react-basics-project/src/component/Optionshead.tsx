import { Box, TextField, Typography } from "@mui/material";

export default function Optionshead() {
  return (
    <Box>
      <Typography paddingTop="20px" marginBottom="20px">
        <TextField id="standard-basic" label="Option Name" variant="standard" />
      </Typography>
      <Typography marginBottom="20px">Options</Typography>
    </Box>
  );
}
