import { Box, Grid, InputAdornment, TextField } from "@mui/material";

import { ChangeEvent } from "react";

interface optionProps {
  value: string[];
  onChange: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
export default function OptionsField({ value, onChange }: optionProps) {
  return (
    <Box
      paddingBottom={"10px"}
      paddingLeft={"10px"}
      marginTop={"10px"}
      width={"800px"}
    >
      {value.map((item, index) => (
        <Grid paddingTop={"10px"} alignItems={"center"} container>
          <Grid item xs={3}>
            {"Option " + (index + 1)}
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={item}
              onChange={(e) => onChange(index, e)}
              style={{ right: "16px" }}
              fullWidth
              id="standard-basic"
            />
          </Grid>
          <Grid paddingLeft={"80px"} item xs={3}>
            Value/count
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={item}
              onChange={(i) => onChange(index, i)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              id="standard-basic"
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
