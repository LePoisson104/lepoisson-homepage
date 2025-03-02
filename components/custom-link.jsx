import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";

const CustomLink = ({ href }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link
      href={href}
      target="_blank"
      underline="none"
      sx={{
        color: colors.purpleAccent[300],
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0.5,
        wordBreak: "break-word",
      }}
    >
      {href}
      <LaunchIcon fontSize="small" />
    </Link>
  );
};

export default CustomLink;
