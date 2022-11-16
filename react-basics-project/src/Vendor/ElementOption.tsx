import { Box, Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CartoonName from "./CartoonName";
import CartoonType from "./Cartoon-type";
import { ChangeEvent } from "react";
import OptionsField from "./OptionsField";

interface Defaultprops {
  element: { type: string; Options: string[] }[];

  addOptionHandler: (i: number) => void;
  addValueHandler: () => void;
  handleChange: (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function ElementOption({
  element,
  handleChange,
  addValueHandler,
  addOptionHandler,
}: Defaultprops) {
  console.log("element==========");
  console.log(element);
  return (
    <Box>
      <CartoonName />
      <Box paddingLeft={"10px"} marginTop={"10px"} width={"800px"}>
        {element.map((item, index) => (
          <Box>
            <CartoonType addOptionHandler={() => addOptionHandler(index)} />
            <OptionsField
              value={element[index]["Options"]}
              onChange={(i, e) => handleChange(i, index, e)}
            />
          </Box>
        ))}
      </Box>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={addValueHandler}
      >
        ADD ELEMENT
      </Button>
    </Box>
  );
}
