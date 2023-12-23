import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      data-testid="loader"
      sx={{
        display: "flex",
        width: "100px",
        margin: "auto",
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export default Loader;
