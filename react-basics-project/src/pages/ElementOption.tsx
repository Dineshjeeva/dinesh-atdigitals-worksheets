import { Box, Button, Grid, Select } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CartoonName from "./CartoonName";
import Header from "./Header";
import OptionsField from "./OptionsField";

interface Defaultprops {
  element: { type: string; dropdown: string }[];
  value: { name: string; field: string }[];

  addOptionHandler: () => void;
  addValueHandler: () => void;
}

export default function ElementOption({
  element,
  addValueHandler,
  addOptionHandler,
  value,
}: Defaultprops) {
  console.log("element==========");
  console.log(element);
  return (
    <Box>
      <Header />
      <CartoonName />
      <Box paddingLeft={"10px"} marginTop={"10px"} width={"800px"}>
        {element.map((item, index) => (
          <Grid paddingBottom={"10px"} alignItems={"center"} container>
            <Grid item xs={4}>
              Cartoon Body-type
            </Grid>
            <Grid item xs={4}>
              <Select
                style={{ right: "73px" }}
                value={item.dropdown}
                fullWidth
              />
            </Grid>

            <Grid paddingLeft={"10px"} item xs={4}>
              <Button
                style={{ right: "63px" }}
                onClick={addOptionHandler}
                startIcon={<AddIcon />}
                variant="contained"
              >
                ADD OPTION
              </Button>
            </Grid>
            <OptionsField value={value} />
          </Grid>
        ))}
      </Box>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={addValueHandler}
      >
        ADD ELEMENT
      </Button>
    </Box>
  );
}
