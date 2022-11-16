import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { ChangeEvent } from "react";

interface FieldNameProps {
  name: string;
  values?: string;
  onChange: (e: ChangeEvent) => void;
}
export default function DesignerField({
  name,
  onChange,
  values,
}: FieldNameProps) {
  return (
    <Box>
      <Grid alignItems="center" container>
        <Grid item xs={4}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            value={values}
            type="number"
            name={name}
            onChange={onChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
