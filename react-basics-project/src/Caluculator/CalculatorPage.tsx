import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import sumHandlerChanger from "./HabdleOperation";

export default function CalculatorPage() {
  let localValue = JSON.parse(`${window.localStorage.getItem("value1") || ""}`);
  console.log("&&&&&))))(((" + localValue.result);
  const [field, setField] = useState<number>(localValue.field1);
  const [field2, setField2] = useState<number>(localValue.field2);
  const [operation, setOperation] = useState<string>(localValue.operation);
  const [equal, setEqual] = useState<string | number>(localValue.result);
  const [save, setSave] = useState<string[]>(localValue.Values);
  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value1 = parseFloat(e.target.value);

    setField(value1);
  };

  const handleFieldChange2 = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value2 = parseFloat(e.target.value);
    setField2(value2);
  };

  const handleOperation = (e: SelectChangeEvent<string>) => {
    setOperation(e.target.value);

    if (field === undefined && field2 === undefined) {
      return;
    }
  };
  const sumHandlerChange = useCallback(() => {
    let values = sumHandlerChanger(field, field2, operation);
    setEqual(values);
  }, [field, field2, operation]);

  const data = {
    field1: field,
    operation: operation,
    field2: field2,
    result: equal && equal.toString(),
    Values: save,
  };

  window.localStorage.setItem("value1", JSON.stringify(data));

  const SaveHandler = () => {
    const Result = field + "" + operation + "" + field2 + "=" + equal + "";

    if (field && field2) {
      setSave([...save, Result]);
    }
  };

  useEffect(() => {
    sumHandlerChange();
  }, [sumHandlerChange]);
  return (
    <Box margin="30px" alignItems="center">
      <Box display="flex" alignItems="center+">
        <Box marginRight="30px">
          <TextField
            onChange={handleFieldChange}
            value={field}
            label="Value 1"
            type="number"
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

        <Box marginRight="30px">
          <TextField
            onChange={handleFieldChange2}
            value={field2}
            label="Value 2"
            type="number"
            variant="standard"
          />
        </Box>
        <Box display="flex" alignItems="center" marginLeft="20px">
          <Typography> = {equal}</Typography>
        </Box>

        <Box display="flex" alignItems="center" marginLeft="20px">
          <Button
            style={{ display: "flex", padding: "10px" }}
            onClick={SaveHandler}
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Box>
      <Box>
        {save.map((Result) => (
          <Typography marginLeft="10px">StorageValues: {Result}</Typography>
        ))}
      </Box>
    </Box>
  );
}
