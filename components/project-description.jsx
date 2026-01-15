import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const ProjectDescription = ({ title, children }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      <Typography
        fontWeight={700}
        fontSize={12}
        sx={{
          color: theme.palette.mode === "dark" ? "#c6f6d5" : "#22543d",
          bgcolor: theme.palette.mode === "dark" ? "#22543d" : "#c6f6d5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: 2,
          px: 0.5,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default ProjectDescription;
