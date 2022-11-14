import { Box, Grid } from "@mui/material";

import Dropdown from "./Dropdown";

export default function Drop() {
  return (
    <Box marginTop={"20px"} pl={"10px"} width={"1192px"}>
      <Grid container>
        <Grid item xs={6}>
          <Dropdown name={"Choose Vendor"} />
        </Grid>
        <Grid item xs={6}>
          <Dropdown name={"Choose Cartoon"} />
        </Grid>
      </Grid>
    </Box>
  );
}
