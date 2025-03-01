"use client";
import { Box, Typography, List, ListItem, Badge, Link } from "@mui/material";
import ArticleLayout from "@/components/article";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";
import ProjectTitle from "@/components/project-title";
import NextLink from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";

const Endurofy = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ArticleLayout title={"Endurofy"}>
      <Box sx={{ mt: 5 }}>
        <ProjectTitle title={"Endurofy"} time={"2024 -"} />
        <Typography
          component={"p"}
          sx={{ textIndent: "1em" }}
          mt={1}
          fontSize={15}
          color="text.secondary"
        >
          Endurofy is a comprehensive fitness tracking platform featuring food
          intake logging, weight monitoring, and workout tracking. It includes
          over 300,000 food items from the USDA Central Food API and interactive
          data visualizations to track user fitness and weight progress.
        </Typography>
        <Box mt={3}></Box>
      </Box>
    </ArticleLayout>
  );
};

export default Endurofy;
