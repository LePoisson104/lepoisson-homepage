"use client";
import { Box, Typography, List, ListItem } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";
import CustomLink from "@/components/custom-link";
import ProjectDescription from "@/components/project-description";

const PDWorld = () => {
  return (
    <ArticleLayout title={"ML"}>
      <Box sx={{ mt: 5 }}>
        <ProjectTitle title={"3 Agents RL"} time={"2024"} />
        <Typography
          component={"p"}
          sx={{ textIndent: "1em" }}
          mt={1}
          fontSize={15}
          color="text.secondary"
        >
          A PD World environment was developed where agents take turns picking
          up and dropping off blocks. SARSA and Q-Learning algorithms, utilizing
          a Q-table and various action policies, were implemented to help agents
          learn the optimal path. This approach resulted in a 65% improvement in
          task completion efficiency compared to random movements.
        </Typography>
        <Box mt={3}>
          <List>
            <ListItem>
              <ProjectDescription title={"SOURCE CODE"}>
                <CustomLink href={"https://github.com/LePoisson104/3agents"} />
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
          </List>
        </Box>
      </Box>
    </ArticleLayout>
  );
};

export default PDWorld;
