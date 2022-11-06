import { Box, Button } from "@mui/material";

interface AddoptionButtonProps {
  onChange: () => void;
}

export default function AddoptioinsButton({ onChange }: AddoptionButtonProps) {
  return (
    <Box padding="60px">
      <Button onChange={onChange} onClick={onChange} variant="contained">
        Add Option
      </Button>
    </Box>
  );
}
