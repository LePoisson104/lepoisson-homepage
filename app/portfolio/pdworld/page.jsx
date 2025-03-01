"use client";
import { Box, Typography } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";

const PDWorld = () => {
  return (
    <ArticleLayout title={"ML"}>
      <Box sx={{ mt: 5 }}>
        <ProjectTitle title={"3 Agents RL"} time={"2024"} />
      </Box>
    </ArticleLayout>
  );
};

export default PDWorld;
