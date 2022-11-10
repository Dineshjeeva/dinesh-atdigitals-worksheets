import { Box, Button, Grid, Select } from "@mui/material";

export default function ElementOption() {
  return (
    <Box paddingLeft={"10px"} marginTop={"10px"} width={"500px"}>
      <Grid alignItems={"center"} container>
        <Grid item xs={4}>
          Cartoon Body-type
        </Grid>
        <Grid item xs={4}>
          <Select fullWidth />
        </Grid>
        <Grid paddingLeft={"10px"} item xs={4}>
          <Button variant="contained">ADD OPTION</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
