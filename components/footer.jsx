"use client";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";
import LinkItem from "./link-item";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "grey",
        mt: 5,
        mb: 2,
        p: 2,
      }}
    >
      <Typography fontSize={13}>
        &copy; {new Date().getFullYear()} Viet Pham
      </Typography>
      <span style={{ margin: "0 8px" }}>|</span>
      <LinkItem
        href={"https://www.craftz.dog/"}
        target={"_blank"}
        color={colors.purpleAccent[300]}
        bgcolor={colors.purpleAccent[300]}
        fontSize={13}
      >
        Inspired by @craftzdog
      </LinkItem>
    </Box>
  );
};

export default Footer;
