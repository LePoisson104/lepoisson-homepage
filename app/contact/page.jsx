"use client";
import { Box, Typography } from "@mui/material";
import ArticleLayout from "@/components/article";

const Contact = () => {
  return (
    <ArticleLayout title={"Contact me"}>
      <Box mt={5}>
        <Typography>Contact me</Typography>
      </Box>
    </ArticleLayout>
  );
};

export default Contact;
