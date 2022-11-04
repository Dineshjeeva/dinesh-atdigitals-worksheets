import { Box, Button } from "@mui/material";

import { MouseEventHandler } from "react";

interface AddoptionButtonProps {
  addOptionButton: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function AddoptioinsButton({
  addOptionButton,
}: AddoptionButtonProps) {
  return (
    <Box padding="60px">
      <Button onClick={addOptionButton} variant="contained">
        Add Option
      </Button>
    </Box>
  );
}
