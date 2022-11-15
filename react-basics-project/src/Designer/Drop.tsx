import { Box, Grid } from "@mui/material";

import { CarttoonFieldProps } from "./TotalDesigner";
import Dropdown from "./Dropdown";

interface DropProps {
  handleChange: (e: any) => void;
  Dropvalues: CarttoonFieldProps;
}

export default function Drop({ handleChange, Dropvalues }: DropProps) {
  let Drop1 = [
    { name: "Turned yellow", value: "Turnedyellow" },
    { name: "One", value: "One" },
  ];
  let Drop2 = [
    { name: "Simpsons", value: "Simpsons" },
    { name: "Two", value: "Two" },
  ];

  return (
    <Box marginTop="20px" pl="10px" width="1192px">
      <Grid container>
        <Grid item xs={6}>
          <Dropdown
            value={Dropvalues.ChooseVendor}
            onChange={handleChange}
            name={"ChooseVendor"}
            Drop={Drop1}
          />
        </Grid>
        <Grid item xs={6}>
          <Dropdown
            value={Dropvalues.ChooseCartoon}
            onChange={handleChange}
            name={"ChooseCartoon"}
            Drop={Drop2}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
