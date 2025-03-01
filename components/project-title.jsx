import { Box, Typography, Link } from "@mui/material";
import NextLink from "next/link";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProjectTitle = ({ title, time }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Link
        component={NextLink}
        href={"/portfolio"}
        underline="none"
        sx={{
          color: colors.purpleAccent[300],
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Portfolio
      </Link>
      <ChevronRightIcon />
      <Typography variant="h5" fontWeight={600}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.mode === "dark" ? "white" : "black"}
        ml={1}
        bgcolor={
          theme.palette.mode === "dark" ? colors.grey[600] : colors.grey[1000]
        }
        px={1}
      >
        {time}
      </Typography>
    </Box>
  );
};

export default ProjectTitle;
