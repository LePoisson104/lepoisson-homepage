import { Box, Typography } from "@mui/material";

const BioSection = ({ year, children, ...props }) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }} {...props}>
      <Typography variant="h7" fontWeight={"bold"}>
        {year}
      </Typography>
      {children}
    </Box>
  );
};

export default BioSection;
