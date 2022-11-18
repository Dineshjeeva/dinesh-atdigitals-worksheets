import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export default function CalculatorPage() {
  return (
    <Box margin={"30px"} display={"flex"}>
      <Box marginRight={"30px"}>
        <TextField
          id="standard-number"
          label="Value 1"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </Box>
      <Box marginRight={"30px"}></Box>
      <Box>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Operations
          </InputLabel>
          <Select label="Operations">
            <MenuItem value={"+"}>+</MenuItem>
            <MenuItem value={"-"}>-</MenuItem>
            <MenuItem value={"*"}>*</MenuItem>
            <MenuItem value={"/"}>/</MenuItem>
            <MenuItem value={"^"}>^</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box marginRight={"30px"}>
        <TextField
          id="standard-number"
          label="Value 2"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </Box>
      <Box>
        <Typography> = </Typography>
      </Box>
    </Box>
  );
}
