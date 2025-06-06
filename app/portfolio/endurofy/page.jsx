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
    "/images/endurofy/EndurofyDashboard.png",
    "/images/endurofy/EndurofyWorkoutlog.png",
    "/images/endurofy/weightlog1.png",
    "/images/endurofy/weightlog2.png",
    "/images/endurofy/workoutprogram.png",
    "/images/endurofy/mobile-dashboard.png",
    "/images/endurofy/mobile-workoutlog.png",
    "/images/endurofy/mobile-weightlog1.png",
    "/images/endurofy/mobile-weightlog2.png",
    "/images/endurofy/mobile-workoutprogram.png",
  ];

  return (
    <ArticleLayout title={"Endurofy"}>
      <Box sx={{ mt: 5, mb: 15 }}>
        <ProjectTitle title={"Endurofy"} time={"Mar 2025 -"} />
        <Typography
          component={"p"}
          sx={{ textIndent: "1em" }}
          mt={1}
          fontSize={15}
        >
          Endurofy is a comprehensive fitness tracking platform that allows
          users to create personalized workout programs. For each day, Endurofy
          automatically generates a tailored workout based on the user&apos;s
          selected program. In addition to workout planning, users can track
          their daily weight and calorie intake, providing a complete picture of
          their fitness journey.
        </Typography>
        <Section>
          <Box mt={3}>
            <List>
              <ListItem>
                <ProjectDescription title={"FRONT-END SOURCE CODE"}>
                  <CustomLink
                    href={"https://github.com/LePoisson104/endurofy"}
                  />
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"BACK-END SOURCE CODE"}>
                  <CustomLink
                    href={"https://github.com/LePoisson104/Endurofy_api"}
                  />
                </ProjectDescription>
              </ListItem>
              <ListItem>
                <ProjectDescription title={"STACK"}>
                  <Typography component={"p"} variant="h6">
                    Next.js, Express.js, Redux, RTK Query, MySQL, Shadcn UI,
                    Tailwind CSS, Docker, AWS:RDS/S3
                  </Typography>
                </ProjectDescription>
              </ListItem>
            </List>
          </Box>
        </Section>
        <ImageSlider delay={0.1} images={images} />
      </Box>
    </ArticleLayout>
  );
};

export default Endurofy;
