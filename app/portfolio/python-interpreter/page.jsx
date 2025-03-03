"use client";
import { Box, Typography, List, ListItem } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";
import ProjectDescription from "@/components/project-description";
import CustomLink from "@/components/custom-link";
import ImageSlider from "@/components/image-slider";
import Section from "@/components/section";

const PythonInterpreter = () => {
  const images = ["/images/python/PythonInterpreter.png"];

  return (
    <ArticleLayout title={"Python Interpreter"}>
      <Box sx={{ mt: 5, mb: 10 }}>
        <ProjectTitle title={"Python Interpreter"} time={"2024"} />
        <Typography
          component={"p"}
          sx={{ textIndent: "1em" }}
          mt={1}
          fontSize={15}
          color="text.secondary"
        >
          A web-based Python interpreter built with a custom C++ backend,
          enabling real-time code execution and performance comparison. The
          platform processes code through a RESTful API, interprets it using a
          C++ engine, and returns execution results, allowing direct
          benchmarking against native Python.
        </Typography>
        <Section>
          <Box mt={3}>
            <List>
              <ListItem>
                <ProjectDescription title={"WEBSITE"}>
                  <CustomLink
                    href={" https://pythoncodeeditor-1.onrender.com/"}
                  />
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"SOURCE CODE"}>
                  <CustomLink
                    href={"https://github.com/LePoisson104/PythonCodeEditor"}
                  />
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"STACK"}>
                  <Typography component={"p"} variant="h6">
                    C++, ReactJS, Express.js, ChakraUI
                  </Typography>
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"PS"}>
                  <Typography component={"p"} variant="h6">
                    Due to free hosting, it might take a minute for the cold
                    start.
                  </Typography>
                </ProjectDescription>
              </ListItem>
            </List>
          </Box>
        </Section>
        <ImageSlider delay={0.1} images={images}></ImageSlider>
      </Box>
    </ArticleLayout>
  );
};

export default PythonInterpreter;
