import { Box, Grid, TextField, Typography } from "@mui/material";

interface FieldNameProps {
  name: string;
}
export default function DesignerField({ name }: FieldNameProps) {
  return (
    <Box>
      <Grid alignItems={"center"} container>
        <Grid item xs={4}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            InputProps={{
              startAdornment: "$",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
