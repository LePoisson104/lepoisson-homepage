"use client";
import { Box, Button, Typography, Link } from "@mui/material";
import ArticleLayout from "@/components/article";
import SectionTitle from "@/components/section-title";
import Section from "@/components/section";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";
import DownloadIcon from "@mui/icons-material/Download";

const Resume = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const resumeUrl = "/resume.pdf"; // Resume stored in the public folder

  return (
    <ArticleLayout title={"Resume"}>
      <SectionTitle title={"Resume"} width={70} />

      <Section></Section>
    </ArticleLayout>
  );
};

export default Resume;
