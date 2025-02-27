"use client";
import { Box, Typography, Container } from "@mui/material";
import ArticleLayout from "@/components/article";

const Resume = () => {
  return (
    <ArticleLayout title={"Resume"}>
      <Box mt={5}>
        <Typography>Resume</Typography>
      </Box>
    </ArticleLayout>
  );
};

export default Resume;
