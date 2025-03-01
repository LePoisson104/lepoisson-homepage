"use client";
import { Box, Typography } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";

const PythonInterpreter = () => {
  return (
    <ArticleLayout title={"Python Interpreter"}>
      <Box sx={{ mt: 5 }}>
        <ProjectTitle title={"Python Interpreter"} time={"2024"} />
      </Box>
    </ArticleLayout>
  );
};

export default PythonInterpreter;
