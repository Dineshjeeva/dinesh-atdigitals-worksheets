import CalculatorPage from "./CalculatorPage";
import { useState } from "react";

interface OperationProps {
  value1: number;
  value2: number;
  operators: number;
}

export default function Calculator() {
  const [calculate, setCalculate] = useState<OperationProps>();

  return <CalculatorPage />;
}
