import {
  Box,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

interface DropNameProps {
  name: string;
  onChange?: (e: SelectChangeEvent) => void;
  Drop: { name: string; value: string }[];
  value: string;
  // values: string;
}

export default function Dropdown({
  name,
  onChange,
  Drop,
  value,
}: DropNameProps) {
  return (
    <Box>
      <Grid alignItems={"center"} container>
        <Grid item xs={3}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Select value={value} onChange={onChange} name={name} fullWidth>
            {Drop.map((Drop) => (
              <MenuItem value={Drop.value}>{Drop.name}</MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
}
