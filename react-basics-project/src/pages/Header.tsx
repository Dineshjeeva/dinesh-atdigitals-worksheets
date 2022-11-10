import { Box, Button, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export default function Header() {
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
        <Button startIcon={<AddIcon />} variant="contained">
          ADD CARTOON
        </Button>
      </Box>
    </Box>
  );
}
