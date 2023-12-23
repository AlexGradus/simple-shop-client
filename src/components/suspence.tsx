
import { Box, CircularProgress } from "@mui/material";

const SuspenseComp = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "#a7d2ff",
      }}
    >
      <CircularProgress size={100} color="info" />
    </Box>
  );
};

export default SuspenseComp;