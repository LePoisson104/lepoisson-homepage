"use client";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useContext } from "react";
import { tokens } from "@/lib/theme";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "@/lib/theme";

const ThemeToggleBtn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      sx={{
        width: 40,
        height: 40,
        color: colors.grey[1000],
        bgcolor:
          theme.palette.mode === "dark"
            ? colors.redAccent[1200]
            : colors.purpleAccent[400],
        borderRadius: "8px",
        "&:hover": {
          bgcolor:
            theme.palette.mode === "dark"
              ? colors.redAccent[1300]
              : colors.purpleAccent[700],
        },
      }}
    >
      {theme.palette.mode === "light" ? (
        <NightlightIcon fontSize="small" />
      ) : (
        <LightModeIcon fontSize="small" />
      )}
    </IconButton>
  );
};

export default ThemeToggleBtn;
