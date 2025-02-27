"use client";
import ArticleLayout from "@/components/article";
import { Box, Typography } from "@mui/material";

const Blog = () => {
  return (
    <ArticleLayout title={"Blog"}>
      <Box mt={5}>
        <Typography>Blog</Typography>
      </Box>
    </ArticleLayout>
  );
};

export default Blog;
