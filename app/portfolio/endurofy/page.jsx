"use client";
import { Box, Typography, List, ListItem } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";
import ProjectDescription from "@/components/project-description";
import CustomLink from "@/components/custom-link";
import Section from "@/components/section";

const Endurofy = () => {
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
        <Section>
          <Box mt={3}>
            <List>
              <ListItem>
                <ProjectDescription title={"SOURCE CODE"}>
                  <CustomLink
                    href={"https://github.com/LePoisson104/Endurofy"}
                  />
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"STACK"}>
                  <Typography component={"p"} variant="h6">
                    ReactJS, Express.js, Redux, MySQL, AWS:RDS/S3, MUI
                  </Typography>
                </ProjectDescription>
              </ListItem>
            </List>
          </Box>
        </Section>
      </Box>
    </ArticleLayout>
  );
};

export default Endurofy;
