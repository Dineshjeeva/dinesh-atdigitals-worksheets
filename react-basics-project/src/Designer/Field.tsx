import { Box, Grid } from "@mui/material";

import DesignerField from "./DesignerField";

export default function Field() {
  return (
    <Box marginTop={"20px"} pl={"10px"} width={"1192px"}>
      <Grid container>
        <Grid item xs={4}>
          <DesignerField name={"Full body"} />
        </Grid>
        <Grid item xs={4}>
          <DesignerField name={"Pre-made Bg"} />
        </Grid>
        <Grid item xs={4}>
          <DesignerField name={"Pet full Body"} />
        </Grid>
      </Grid>
      <Grid marginTop={"10px"} container>
        <Grid item xs={4}>
          <DesignerField name={"Shoulder up"} />
        </Grid>
        <Grid item xs={4}>
          <DesignerField name={"Custom Bg"} />
        </Grid>
        <Grid item xs={4}>
          <DesignerField name={"Pet Shoulder Up"} />
        </Grid>
      </Grid>
    </Box>
  );
}
