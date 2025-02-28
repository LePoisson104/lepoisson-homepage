import { Typography, Grid2 } from "@mui/material";
import Image from "next/image";

const ProjectCard = ({ src, alt, children, title }) => {
  return (
    <Grid2 size={{ md: 6, sm: 12, xs: 12 }}>
      <Image src={src} alt={alt} width={200} height={200} />
      <Typography variant="body1">{title}</Typography>
      {children}
    </Grid2>
  );
};

export default ProjectCard;
