import { Button, Grid, MenuItem, Select } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

interface BodyTypetprops {
  addOptionHandler: () => void;
}
export default function CartoonType({ addOptionHandler }: BodyTypetprops) {
  return (
    <Grid paddingBottom={"10px"} alignItems={"center"} container>
      <Grid item xs={4}>
        Cartoon Body-type
      </Grid>
      <Grid item xs={4}>
        <Select style={{ right: "73px" }} fullWidth>
          <MenuItem value={"Dropdown"}>Dropdounn</MenuItem>
          <MenuItem value={"Dropdown12"}>Dropdounn12</MenuItem>
        </Select>
      </Grid>
      <Button
        style={{ right: "63px" }}
        onClick={addOptionHandler}
        startIcon={<AddIcon />}
        variant="contained"
      >
        ADD OPTION
      </Button>
    </Grid>
  );
}
