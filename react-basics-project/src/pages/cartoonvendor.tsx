import { Box, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CartoonName from "./CartoonName";
import ElementOption from "./ElementOption";
import Header from "./Header";
import { useState } from "react";

// name : input box
// type: dropdown

export default function CatoonAddvendor() {
  const [element, setElement] = useState([]);
  let addelementHandler = () => {
    setElement([...element]);
  };

  return (
    <Box paddingLeft={"10px"}>
      <Header />
      <CartoonName />

      <ElementOption />

      <Button
        onClick={addelementHandler}
        startIcon={<AddIcon />}
        variant="contained"
      >
        ADD ELEMENT
      </Button>
    </Box>
  );
}
