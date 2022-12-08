import { Box, Button, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

interface Addvendor {
  addkartHandler: () => void;
}
export default function Header({ addkartHandler }: Addvendor) {
  return (
    <Box
      display="flex"
      style={{
        justifyContent: "space-between",
        borderTop: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
      }}
      paddingY={"7px"}
    >
      <Typography
        fontSize="18px"
        fontWeight="500"
        paddingTop={1}
        paddingLeft={2.5}
      >
        Cartoon Details
      </Typography>
      <Box marginRight="80px">
        <Button
          onClick={addkartHandler}
          startIcon={<AddIcon />}
          variant="contained"
        >
          ADD CARTOON
        </Button>
      </Box>
    </Box>
  );
}
