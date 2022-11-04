import AddoptioinsButton from "./AddoptionsButton";
import Addvalues from "./Addvalues";
import { Box } from "@mui/material";
import { useState } from "react";

interface AddvalueProps {
  Name: string;
}

export default function Addoptions() {
  const [addoptions, setAddOptions] = useState<AddvalueProps[]>([]);
  // const [values, setValues] = useState("");

  let addOptionsHandler = () => {
    setAddOptions([...addoptions, { Name: "" }]);
  };
  console.log(addoptions);
  // const SubmitHandlers=()=>{
  //   setAddOptions([...addoptions, { Name: "" }])
  // }
  return (
    <Box paddingTop="10px" display="flex">
      {addoptions.map((element, index) => (
        <Addvalues />
      ))}
      <Box marginLeft="10px" border="1px solid black">
        <AddoptioinsButton addOptionButton={addOptionsHandler} />
      </Box>
    </Box>
  );
}
