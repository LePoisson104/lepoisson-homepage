import { Typography, Grid2, Box } from "@mui/material";
import Image from "next/image";
import Section from "./section";
import Link from "next/link";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";

const ProjectCard = ({ src, alt, children, title, delay, href }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Grid2 size={{ md: 6, sm: 12, xs: 12 }} mt={4}>
      <Section delay={delay}>
        <Link
          href={href}
          style={{ textDecoration: "none", color: colors.primary[1000] }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)", // Slightly enlarge on hover
              },
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={280}
              height={200}
              style={{ borderRadius: 10, width: "100%", minWidth: 280 }}
            />
            <Typography variant="h5" mt={1} mb={1} fontWeight={500}>
              {title}
            </Typography>
            {children}
          </Box>
        </Link>
      </Section>
    </Grid2>
  );
};

export default ProjectCard;
