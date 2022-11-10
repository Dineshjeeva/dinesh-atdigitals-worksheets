import { Box, Grid, TextField } from "@mui/material";

export default function CartoonName() {
  return (
    <Box marginTop={"10px"} paddingLeft={"10px"} width={"500px"}>
      <Grid
        alignItems={"center"}
        display={"flex"}
        flexDirection={"row"}
        container
      >
        <Grid item xs={3}>
          <Grid>Cartoon Name</Grid>
        </Grid>
        <Grid item xs={9}>
          <TextField />
        </Grid>
      </Grid>
    </Box>
  );
}
