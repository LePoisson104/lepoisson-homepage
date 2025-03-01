"use client";
import { Box, Typography } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";

const Zoo = () => {
  return (
    <ArticleLayout title={"Zoo"}>
      <Box sx={{ mt: 5 }}>
        <ProjectTitle title={"Zoo"} time={"2024"} />
      </Box>
    </ArticleLayout>
  );
};

export default Zoo;
