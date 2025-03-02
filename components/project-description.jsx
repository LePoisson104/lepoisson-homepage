import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";

const ProjectDescription = ({ title, children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      <Typography
        fontWeight={600}
        sx={{
          bgcolor: colors.greenAccent[800],
          color: colors.greenAccent[200],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: 2,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default ProjectDescription;
