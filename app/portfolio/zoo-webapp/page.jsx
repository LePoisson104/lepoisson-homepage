"use client";
import { Box, Typography, List, ListItem } from "@mui/material";
import ArticleLayout from "@/components/article";
import ProjectTitle from "@/components/project-title";
import ProjectDescription from "@/components/project-description";
import CustomLink from "@/components/custom-link";
import ImageSlider from "@/components/image-slider";
import Section from "@/components/section";

const Zoo = () => {
  const images = [
    "/images/zoo/Homepage.png",
    "/images/zoo/Login.png",
    "/images/zoo/Signup.png",
    "/images/zoo/Animals.png",
    "/images/zoo/Exhibits.png",
    "/images/zoo/Shop.png",
    "/images/zoo/Subscription.png",
    "/images/zoo/Ticket.png",
    "/images/zoo/Checkout.png",
    "/images/zoo/History.png",
    "/images/zoo/AnimalManagement1.png",
    "/images/zoo/AnimalManagement2.png",
    "/images/zoo/EnclosureReport.png",
    "/images/zoo/Enclosures.png",
    "/images/zoo/Attractions.png",
    "/images/zoo/Revenue.png",
    "/images/zoo/Inventory.png",
    "/images/zoo/Notification.png",
  ];
  return (
    <ArticleLayout title={"Zoo"}>
      <Box sx={{ mt: 5, mb: 7 }}>
        <ProjectTitle title={"Zoo"} time={"2024"} />
        <Typography
          component={"p"}
          sx={{ textIndent: "1em" }}
          mt={1}
          fontSize={15}
        >
          A full-stack web application designed to optimize zoo operations and
          enhance the visitor experience. The platform features a RESTful API
          for efficient front-end and back-end communication, ensuring rapid
          data retrieval and manipulation with response times under 10ms.
          Additionally, AWS API integration provides secure and scalable cloud
          storage, improving data accessibility and reliability.
        </Typography>
        <Section>
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
        </Section>
        <ImageSlider delay={0.1} images={images}></ImageSlider>
      </Box>
    </ArticleLayout>
  );
};

export default Zoo;
