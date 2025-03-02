"use client";
import { Box, Typography, List, ListItem } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";
import ProjectDescription from "@/components/project-description";
import CustomLink from "@/components/custom-link";

const Zoo = () => {
  return (
    <ArticleLayout title={"Zoo"}>
      <Box sx={{ mt: 5 }}>
        <ProjectTitle title={"Zoo"} time={"2024"} />
        <Typography
          component={"p"}
          sx={{ textIndent: "1em" }}
          mt={1}
          fontSize={15}
          color="text.secondary"
        >
          A full-stack web application designed to optimize zoo operations and
          enhance the visitor experience. The platform features a RESTful API
          for efficient front-end and back-end communication, ensuring rapid
          data retrieval and manipulation with response times under 10ms.
          Additionally, AWS API integration provides secure and scalable cloud
          storage, improving data accessibility and reliability.
        </Typography>
        <Box mt={3}>
          <List>
            <ListItem>
              <ProjectDescription title={"WEBSITE"}>
                <CustomLink href={"https://lepoisson104.github.io/"} />
              </ProjectDescription>
            </ListItem>
            <ListItem>
              <ProjectDescription title={"SOURCE CODE"}>
                <CustomLink
                  href={"https://github.com/LePoisson104/zoo_web_app"}
                />
              </ProjectDescription>
            </ListItem>
            <ListItem>
              <ProjectDescription title={"STACK"}>
                <Typography component={"p"} variant="h6">
                  HTML, CSS, JavaScript, Express.js, MySQL, AWS:RDS
                </Typography>
              </ProjectDescription>
            </ListItem>
            <ListItem>
              <ProjectDescription title={"STATUS"}>
                <Typography component={"p"} variant="h6">
                  Server Closed
                </Typography>
              </ProjectDescription>
            </ListItem>
          </List>
        </Box>
      </Box>
    </ArticleLayout>
  );
};

export default Zoo;
