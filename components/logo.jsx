import { Typography } from "@mui/material";
import Link from "next/link";
import { tokens } from "@/lib/theme";
import { useTheme } from "@emotion/react";

const Logo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link href="/" scroll={false} style={{ textDecoration: "none" }}>
      <Typography
        fontSize={20}
        fontWeight={"bold"}
        color={colors.primary[1000]}
      >
        Viet Pham
      </Typography>
    </Link>
  );
};

export default Logo;
