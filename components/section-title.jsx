import { Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";

const SectionTitle = ({ title, width }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Typography variant="h4" fontWeight={"bold"}>
        {title}
      </Typography>
      <Box
        sx={{
          width: width,
          borderBottom: `3px solid ${
            theme.palette.mode === "light" ? colors.grey[600] : colors.grey[500]
          }`,
        }}
      />
    </>
  );
};

export default SectionTitle;
