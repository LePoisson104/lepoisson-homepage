"use client";
import { Box, Typography, List, ListItem } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";
import CustomLink from "@/components/custom-link";
import ProjectDescription from "@/components/project-description";
import Section from "@/components/section";
import ImageSlider from "@/components/image-slider";

const PDWorld = () => {
  const images = ["/images/ML/3agents.png"];

  return (
    <ArticleLayout title={"ML"}>
      <Box sx={{ mt: 5 }}>
        <ProjectTitle title={"3 Agents RL"} time={"2024"} />
        <Typography
          component={"p"}
          sx={{ textIndent: "1em" }}
          mt={1}
          fontSize={15}
        >
          A PD World environment was developed where agents take turns picking
          up and dropping off blocks. SARSA and Q-Learning algorithms, utilizing
          a Q-table and various action policies, were implemented to help agents
          learn the optimal path. This approach resulted in a 65% improvement in
          task completion efficiency compared to random movements.
        </Typography>
        <Section>
          <Box mt={3}>
            <List>
              <ListItem>
                <ProjectDescription title={"SOURCE CODE"}>
                  <CustomLink
                    href={"https://github.com/LePoisson104/3agents"}
                  />
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"REPORT"}>
                  <CustomLink
                    href={
                      "https://docs.google.com/document/d/1NJ0-DTmALoW4j2eSz4hVUE-Q6WLt3CZmtE0GTuWnMa4/edit?usp=sharing"
                    }
                  />
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"STACK"}>
                  <Typography component={"p"} variant="h6">
                    Python
                  </Typography>
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"LIBRARIES"}>
                  <Typography component={"p"} variant="h6">
                    numpy, mathplotlib, cv2
                  </Typography>
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"DESCRIPTION"}>
                  <Typography component={"p"} variant="h6">
                    3 agents: red, blue, black | pickup blocks: green | dropoff
                    blocks: brown
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

export default PDWorld;
