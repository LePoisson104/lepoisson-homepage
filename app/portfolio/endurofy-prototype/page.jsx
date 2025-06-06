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
    "/images/endurofy-prototype/EndurofyHomepage.png",
    "/images/endurofy-prototype/Login.png",
    "/images/endurofy-prototype/Signup.png",
    "/images/endurofy-prototype/Dashboard.png",
    "/images/endurofy-prototype/FoodIntake.png",
    "/images/endurofy-prototype/AllFood.png",
    "/images/endurofy-prototype/FavoriteFood.png",
    "/images/endurofy-prototype/CustomFood.png",
    "/images/endurofy-prototype/EditCustomFood.png",
    "/images/endurofy-prototype/FoodMacros.png",
    "/images/endurofy-prototype/WeightLog.png",
    "/images/endurofy-prototype/WorkoutLog.png",
    "/images/endurofy-prototype/Profile.png",
    "/images/endurofy-prototype/Calendar.png",
    "/images/endurofy-prototype/Settings.png",
    "/images/endurofy-prototype/Charts.png",
  ];

  return (
    <ArticleLayout title={"Endurofy Prototype"}>
      <Box sx={{ mt: 5, mb: 15 }}>
        <ProjectTitle title={"Endurofy Prototype"} time={"2024"} />
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
                    href={"https://github.com/LePoisson104/Endurofy_prototype"}
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
