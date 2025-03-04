"use client";
import { Box, Typography, List, ListItem } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";
import ProjectDescription from "@/components/project-description";
import CustomLink from "@/components/custom-link";
import Section from "@/components/section";
import ImageSlider from "@/components/image-slider";

const Endurofy = () => {
  // Array of images
  const images = [
    "/images/endurofy/EndurofyHomepage.png",
    "/images/endurofy/Login.png",
    "/images/endurofy/Signup.png",
    "/images/endurofy/Dashboard.png",
    "/images/endurofy/FoodIntake.png",
    "/images/endurofy/AllFood.png",
    "/images/endurofy/FavoriteFood.png",
    "/images/endurofy/CustomFood.png",
    "/images/endurofy/EditCustomFood.png",
    "/images/endurofy/FoodMacros.png",
    "/images/endurofy/WeightLog.png",
    "/images/endurofy/WorkoutLog.png",
    "/images/endurofy/Profile.png",
    "/images/endurofy/Calendar.png",
    "/images/endurofy/Settings.png",
    "/images/endurofy/Charts.png",
  ];

  return (
    <ArticleLayout title={"Endurofy"}>
      <Box sx={{ mt: 5, mb: 15 }}>
        <ProjectTitle title={"Endurofy"} time={"2024 -"} />
        <Typography
          component={"p"}
          sx={{ textIndent: "1em" }}
          mt={1}
          fontSize={15}
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
        <ImageSlider delay={0.1} images={images}></ImageSlider>
      </Box>
    </ArticleLayout>
  );
};

export default Endurofy;
