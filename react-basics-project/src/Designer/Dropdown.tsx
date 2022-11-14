import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";

interface DropNameProps {
  name: string;
}
export default function Dropdown({ name }: DropNameProps) {
  return (
    <Box>
      <Grid alignItems={"center"} container>
        <Grid item xs={3}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Select fullWidth>
            <MenuItem>Simpsons</MenuItem>
            <MenuItem>Turned Yellow</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
}
