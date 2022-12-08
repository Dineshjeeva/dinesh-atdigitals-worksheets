import { Box, Grid } from "@mui/material";

import { CarttoonFieldProps } from "./TotalDesigner";
import { ChangeEvent } from "react";
import DesignerField from "./DesignerField";

interface FeildProps {
  handleChange: (e:ChangeEvent<HTMLInputElement>) => void;
  fieldProps: CarttoonFieldProps;
}

export default function Field({ handleChange, fieldProps }: FeildProps) {
  const TextField = [
    { name: "Fullbody", value: "Fullbody", solution: fieldProps.Fullbody },
    { name: "Premadebg", value: "Premadebg", solution: fieldProps.Premadebg },
    {
      name: "Petfullbody",
      value: "Petfullbody",
      solution: fieldProps.Petfullbody,
    },
    {
      name: "ShoulderUp",
      value: "ShoulderUp",
      solution: fieldProps.ShoulderUp,
    },
    { name: "CustomBg", value: "CustomBg", solution: fieldProps.CustomBg },
    {
      name: "PetshoulderUp",
      value: "PetshoulderUp",
      solution: fieldProps.PetshoulderUp,
    },
  ];
  return (
    <Box marginTop="20px" pl="10px" width="1192px">
      <Grid paddingTop="10px" container>
        {TextField.map((index) => (
          <Grid paddingBottom="10px" item xs={4}>
            <DesignerField
              onChange={handleChange}
              name={index.value}
              values={index.solution}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
