import { Box, Button } from "@mui/material";
import { FormEvent, useState } from "react";

import Designer from "./Designer";
import HeaderDesigner from "./HeaderDesigner";

export default function TotalDesigner() {
  const [add, setSAdd] = useState<{ name: string; field: string }[]>([]);
  let addOptionHandler = () => {
    setSAdd([...add, { name: "", field: "" }]);
  };
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(add);
  };

  console.log("==============");
  return (
    <Box>
      <HeaderDesigner addOptionHandler={addOptionHandler} />
      {add.map((item: any, index: any) => (
        <Designer key={index} />
      ))}

      <Box pl={"10px"} marginTop={"20px"}>
        <Button onClick={submitHandler} variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
