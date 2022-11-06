import AddoptioinsButton from "./AddoptionsButton";
import Addvalues from "./Addvalues";
import { Box } from "@mui/material";
import { ChangeEvent } from "react";

interface defaultProps {
  addOptionHandler: () => void;
  addOptions: { Name: string }[];

  handleOption: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Addoptions({
  addOptionHandler,
  addOptions,
  handleOption,
}: defaultProps) {
  return (
    <Box paddingTop="10px" display="flex">
      {addOptions.map((element, index) => (
        <Addvalues onChange={(e) => handleOption(index, e)} />
      ))}
      <Box marginLeft="10px" border="1px solid black">
        <AddoptioinsButton onChange={addOptionHandler} />
      </Box>
    </Box>
  );
}
