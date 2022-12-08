import { Box, Grid, TextField } from "@mui/material";

import { ChangeEvent } from "react";

interface CartoonNameProps {
  // Cname: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  cartoonname?: string;
}

export default function CartoonName({
  onChange,
  cartoonname,
}: CartoonNameProps) {
  return (
    <Box marginTop={"10px"} paddingLeft={"10px"} width={"800px"}>
      <Grid
        alignItems={"center"}
        display={"flex"}
        flexDirection={"row"}
        container
      >
        <Grid item xs={4}>
          <Grid>Cartoon Name</Grid>
        </Grid>
        <Grid item xs={8}>
          <TextField
            value={cartoonname}
            onChange={onChange}
            style={{ right: "73px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
