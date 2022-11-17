import {
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

interface BodyTypetprops {
  addOptionHandler: () => void;
  onChange: (e: SelectChangeEvent) => void;
}
export default function CartoonType({
  addOptionHandler,
  onChange,
}: BodyTypetprops) {
  return (
    <Grid paddingBottom={"10px"} alignItems={"center"} container>
      <Grid item xs={4}>
        Cartoon Body-type
      </Grid>
      <Grid item xs={4}>
        <Select onChange={onChange} style={{ right: "73px" }} fullWidth>
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
