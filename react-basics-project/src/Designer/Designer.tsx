import { Box } from "@mui/material";
import { CarttoonFieldProps } from "./TotalDesigner";
import Drop from "./Drop";
import Field from "./Field";

interface StateProps {
  handleChange: (e: any) => void;
  Dropvalues: CarttoonFieldProps;
  fieldvalues: CarttoonFieldProps;
}

export default function Designer({
  handleChange,
  Dropvalues,
  fieldvalues,
}: StateProps) {
  return (
    <Box>
      <Drop handleChange={handleChange} Dropvalues={Dropvalues} />
      <Field handleChange={handleChange} fieldProps={fieldvalues} />
    </Box>
  );
}
