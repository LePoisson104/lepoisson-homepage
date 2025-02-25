"use client";
import { Box, Typography, Container } from "@mui/material";
import ArticleLayout from "@/components/article";

const Resume = () => {
  return (
    <ArticleLayout title={"Resume"}>
      <Container>
        <Typography>resume</Typography>
      </Container>
    </ArticleLayout>
  );
};

export default Resume;
