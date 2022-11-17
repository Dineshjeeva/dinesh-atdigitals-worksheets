import { Box, Button, SelectChangeEvent } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CartoonName from "./CartoonName";
import CartoonType from "./Cartoon-type";
import { ChangeEvent } from "react";
import OptionsField from "./OptionsField";

interface Defaultprops {
  element: { cartoon: string; Options: { name: string; value: string }[] }[];

  addOptionHandler: (i: number) => void;
  addValueHandler: () => void;
  cartoonname?: string;
  handleChange: (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleDrop: (i: number, e: SelectChangeEvent) => void;

  handleChange2: (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleNameOption: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  index: number;
}

export default function ElementOption({
  element,
  handleChange,
  addValueHandler,
  addOptionHandler,
  handleNameOption,
  cartoonname,
  handleChange2,
  index,
  handleDrop,
}: Defaultprops) {
  console.log("element==========");
  console.log(element);
  return (
    <Box>
      <CartoonName
        onChange={(e) => handleNameOption(index, e)}
        cartoonname={cartoonname}
      />
      <Box paddingLeft={"10px"} marginTop={"10px"} width={"800px"}>
        {element.map((item, index) => (
          <Box>
            <CartoonType
              addOptionHandler={() => addOptionHandler(index)}
              onChange={(e) => handleDrop(index, e)}
            />
            <OptionsField
              value={element[index]["Options"]}
              onChange={(i, e) => handleChange(i, index, e)}
              onChange1={(i, e) => handleChange2(i, index, e)}
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
