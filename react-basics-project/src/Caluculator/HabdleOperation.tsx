export default function sumHandlerChanger(
  field: number | undefined,
  field2: number | undefined,
  operation: string
) {
  if (field === undefined || field2 === undefined) {
    return "";
  }

  if (isNaN(field) || isNaN(field2)) {
    return "";
  }

  switch (operation) {
    case "+":
      let Add = field + field2;
      return Add;

    case "-":
      let Minus = field - field2;
      return Minus;
    case "*":
      let Multiply = field * field2;
      return Multiply;
    case "/":
      let Divide = field / field2;
      return Divide;
    case "^":
      let Power = field ** field2;
      return Power;
  }
  return "";
}
