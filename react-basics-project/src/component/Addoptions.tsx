import { ChangeEvent, Dispatch, SetStateAction } from "react";

import AddoptioinsButton from "./AddoptionsButton";
import Addvalues from "./Addvalues";
import { Box } from "@mui/material";

interface defaultProps {
  addOptionHandler: () => void;
  addOptions: { Name: string; Option: string[] }[];
  addValueHandler: (i: number) => void;
  setAddOptions: Dispatch<SetStateAction<{ Name: string; Option: string[] }[]>>;

  handleChange: (
    i: number,
    item: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  handleOption: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function Addoptions({
  addOptionHandler,
  addOptions,
  handleOption,
  addValueHandler,
  handleChange,
  setAddOptions,
}: defaultProps) {
  return (
    <Box paddingTop="10px" display="flex">
      {addOptions.map((element, index) => (
        <Addvalues
          onChange={(e) => handleOption(index, e)}
          addValueHandler={() => addValueHandler(index)}
          addValues={addOptions[index]["Option"]}
          handleChange={(i, e) => handleChange(index, i, e)}
          addOptions={[]}
          setAddOptions={setAddOptions}
        />
      ))}
      <Box marginLeft="10px" border="1px solid black">
        <AddoptioinsButton onChange={addOptionHandler} />
      </Box>
    </Box>
  );
}
