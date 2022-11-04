import Addoptions from "./Addoptions";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function Totalall() {
  const SubmitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const Data = {};
    console.log(Data);
  };

  // const [addoptions, setAddOptions] = useState<{ Name: string }[]>([]);

  // const [values, setValues] = useState("");

  return (
    <form onSubmit={SubmitHandler}>
      <Box height="350px">
        <Addoptions />

        <Box padding="10px" paddingTop="25px">
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </form>
  );
}
