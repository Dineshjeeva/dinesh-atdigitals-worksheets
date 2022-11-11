import { Box, Grid, TextField } from "@mui/material";

export default function CartoonName() {
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
          <TextField style={{ right: "73px" }} />
        </Grid>
      </Grid>
    </Box>
  );
}
