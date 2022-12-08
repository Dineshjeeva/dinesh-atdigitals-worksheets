import { Box, Button, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

interface ButtonProps {
  addOptionHandler: () => void;
}
export default function HeaderDesigner({ addOptionHandler }: ButtonProps) {
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
        Cartoon and Vendor Details
      </Typography>
      <Box marginRight="80px">
        <Button
          onClick={addOptionHandler}
          startIcon={<AddIcon />}
          variant="contained"
        >
          ADD CARTOON
        </Button>
      </Box>
    </Box>
  );
}
