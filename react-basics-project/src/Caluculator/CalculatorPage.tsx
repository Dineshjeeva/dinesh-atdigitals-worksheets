import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function CalculatorPage() {
  const [field, setField] = useState<number>();
  const [field2, setField2] = useState<number>();
  const [operation, setOperation] = useState<string>("");
  const [equal, setEqual] = useState<string | number>("");

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value1 = e.target.value;

    setField(parseFloat(value1));
  };

  const handleFieldChange2 = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value2 = e.target.value;

    setField2(parseFloat(value2));
  };
  const handleOperation = (e: SelectChangeEvent<string>) => {
    setOperation(e.target.value);
    const operations = e.target.value;

    if (field === undefined) {
      return field;
    }
    if (field2 === undefined) {
      return field2;
    }
    switch (operations) {
      case "+":
        let Add = field + field2;
        setEqual(Add);
        break;

      case "-":
        let Minus = field - field2;
        setEqual(Minus);
        break;
      case "*":
        let Multiply = field * field2;
        setEqual(Multiply);
        break;
      case "/":
        let Divide = field / field2;
        setEqual(Divide);
        break;
      case "^":
        let Power = field ** field2;
        setEqual(Power);
        break;
    }
  };
  const sumHandlerChange = () => {
    if (field === undefined) {
      return field;
    }
    if (field2 === undefined) {
      return field2;
    }

    if (isNaN(field)) {
      setEqual("");
      return;
    }
    if (isNaN(field2)) {
      setEqual("");
      return;
    }
    let operators = operation;

    switch (operators) {
      case "+":
        let Add = field + field2;
        setEqual(Add);
        break;

      case "-":
        let Minus = field - field2;
        setEqual(Minus);
        break;
      case "*":
        let Multiply = field * field2;
        setEqual(Multiply);
        break;
      case "/":
        let Divide = field / field2;
        setEqual(Divide);
        break;
      case "^":
        let Power = field ** field2;
        setEqual(Power);
        break;
    }

    setOperation(operation);
  };
  console.log("+++++" + equal);

  return (
    <Box margin={"30px"} display={"flex"}>
      <Box marginRight={"30px"}>
        <TextField
          onKeyUp={sumHandlerChange}
          onChange={handleFieldChange}
          value={field}
          label="Value 1"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </Box>
      <Box marginRight={"30px"}>
        {" "}
        <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Operations
          </InputLabel>
          <Select
            onKeyUp={sumHandlerChange}
            value={operation}
            onChange={handleOperation}
            label="Operations"
          >
            <MenuItem value={"+"}>+</MenuItem>
            <MenuItem value={"-"}>-</MenuItem>
            <MenuItem value={"*"}>*</MenuItem>
            <MenuItem value={"/"}>/</MenuItem>
            <MenuItem value={"^"}>^</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box marginRight={"30px"}>
        <TextField
          onKeyUp={sumHandlerChange}
          onChange={handleFieldChange2}
          value={field2}
          id="standard-number"
          label="Value 2"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </Box>
      <Box>
        <Typography> = {equal}</Typography>
      </Box>
    </Box>
  );
}
