"use client";
import { Box, Typography } from "@mui/material";
import ArticleLayout from "@/components/article";
import SectionTitle from "@/components/section-title";

const Portfolio = () => {
  return (
    <ArticleLayout title={"Portfolio"}>
      <Box mt={5}>
        <SectionTitle title={"Works"} width={58} />
      </Box>
    </ArticleLayout>
  );
};

export default Portfolio;
