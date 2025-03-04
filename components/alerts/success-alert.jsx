import { Box, Alert } from "@mui/material";
import { useRef } from "react";
import { slideDownUpFade } from "./slide-down-up-fase";

const SuccessAlert = ({ message, duration }) => {
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
        animation: `${slideDownUpFade} ${duration}ms ease-in-out`, // Play the entire animation within the duration
        animationFillMode: "forwards", // Keeps the element in its final state
      }}
    >
      <Alert severity="success">{message}</Alert>
    </Box>
  );
};

export default SuccessAlert;
