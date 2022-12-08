import { Box, Button, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

import Designer from "./Designer";
import HeaderDesigner from "./HeaderDesigner";

export interface CarttoonFieldProps {
  [key: string]: string;
}

export default function TotalDesigner() {
  const [add, setSAdd] = useState<CarttoonFieldProps[]>([{}]);

  let handleChange = (
    i: number,

    e: ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    let addVendor = [...add];

    addVendor[i][e.target.name as string] = e.target.value;
    setSAdd(addVendor);
    console.log("buboi" + JSON.stringify(addVendor));
  };

  let addOptionHandler = () => {
    setSAdd([
      ...add,
      {
        ChooseVendor: "",
        ChooseCartoon: "",
        Fullbody: "",
        Premadebg: "",
        Petfullbody: "",
        ShoulderUp: "",
        CustomBg: "",
        PetshoulderUp: "",
      },
    ]);
  };
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(add);
  };

  return (
    <Box>
      <HeaderDesigner addOptionHandler={addOptionHandler} />
      {add.map((item: any, index: any) => (
        <Designer
          key={index}
          handleChange={(e) => handleChange(index, e)}
          Dropvalues={item}
          fieldvalues={item}
        />
      ))}

      <Box pl="10px" marginTop="20px">
        <Button onClick={submitHandler} variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
