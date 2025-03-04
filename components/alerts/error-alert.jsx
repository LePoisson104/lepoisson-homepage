import { Box, Alert } from "@mui/material";
import { useRef } from "react";
import { slideDownUpFade } from "./slide-down-up-fase";

const ErrorAlert = ({ message, duration }) => {
  const alertRef = useRef(null); // Reference to the alert element

  return (
    <Box
      ref={alertRef}
      sx={{
        display: "flex",
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)", // Center horizontally
        zIndex: 9999,
        animation: `${slideDownUpFade} ${duration}ms ease-in-out`,
        animationFillMode: "forwards", // Keeps the element in its final state
      }}
    >
      <Alert severity="error">{message}</Alert>
    </Box>
  );
};

export default ErrorAlert;
