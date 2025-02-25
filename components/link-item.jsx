import { tokens } from "@/lib/theme";
import { useTheme } from "@emotion/react";
import NextLink from "next/link";
import { Link, Box } from "@mui/material";

const LinkItem = ({ href, children, target, bgcolor, ...props }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link
      component={NextLink}
      href={href}
      target={target}
      underline="none"
      sx={{
        position: "relative",
        color: colors.primary[1000],
        "&::after": {
          content: '""',
          position: "absolute",
          width: "0%",
          height: "1px",
          bottom: "-1px",
          left: 0,
          bgcolor: bgcolor ? bgcolor : colors.primary[1000],
          transition: "width 0.3s ease-in-out",
        },
        "&:hover::after": {
          width: "100%",
        },
      }}
    >
      <Box display="flex" color={colors.primary[1000]} {...props}>
        {children}
      </Box>
    </Link>
  );
};

export default LinkItem;
