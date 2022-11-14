import { Box, Grid, TextField } from "@mui/material";

interface optionProps {
  value: { name: string; field: string }[];
}
export default function OptionsField({ value }: optionProps) {
  return (
    <Box paddingLeft={"10px"} marginTop={"10px"} width={"800px"}>
      {value.map((item, index) => (
        <Grid paddingTop={"10px"} alignItems={"center"} container>
          <Grid item xs={3}>
            {"Option " + (index + 1)}
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ right: "16px" }}
              fullWidth
              id="standard-basic"
            />
          </Grid>
          <Grid paddingLeft={"80px"} item xs={3}>
            Value/count
          </Grid>
          <Grid item xs={3}>
            <TextField
              InputProps={{
                startAdornment: "$",
              }}
              value={item.field}
              id="standard-basic"
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
