"use client";
import { Box, Grid2, Typography } from "@mui/material";
import ArticleLayout from "@/components/article";
import SectionTitle from "@/components/section-title";
import TechStackLogo from "@/components/tech-stack-logo";
import ProjectCard from "@/components/project-card";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";

const Portfolio = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ArticleLayout title={"Portfolio"}>
      <Box mt={5}>
        <SectionTitle title={"Tech stack"} width={103} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            mt: 3,
            mb: 6,
            gap: 1,
          }}
        >
          {/* Animate each logo with a shorter delay */}

          <TechStackLogo
            src={"/images/JSLogo.png"}
            alt={"JSLogo"}
            bgcolor={"rgba(255, 248, 211, 0.5)"}
            duration={0.5}
            delay={0.1}
          />

          <TechStackLogo
            src={"/images/TSLogo.png"}
            alt={"TSLogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.2}
          />

          <TechStackLogo
            src={"/images/javaicon.png"}
            alt={"javaLogo"}
            bgcolor={"rgba(255, 255, 255, 0.7)"}
            duration={0.5}
            delay={0.3}
          />

          <TechStackLogo
            src={"/images/cppicon.png"}
            alt={"cppLogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.4}
          />

          <TechStackLogo
            src={"/images/pythonicon.png"}
            alt={"pythonLogo"}
            bgcolor={"rgba(255, 255, 255, 0.5)"}
            duration={0.5}
            delay={0.5}
          />

          <TechStackLogo
            src={"/images/springbooticon.png"}
            alt={"SpringbootLogo"}
            bgcolor={"rgba(3,191,100,.1)"}
            duration={0.5}
            delay={0.6}
          />

          <TechStackLogo
            src={"/images/ReactLogo.png"}
            alt={"ReactLogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.7}
          />

          <TechStackLogo
            src={"/images/Next.js.png"}
            alt={"NextLogo"}
            bgcolor={"rgba(255, 255, 255, 0.5)"}
            duration={0.5}
            delay={0.8}
          />

          <TechStackLogo
            src={"/images/Express.png"}
            alt={"ExpressLogo"}
            bgcolor={"rgba(255, 255, 255, 0.5)"}
            duration={0.5}
            delay={0.9}
          />

          <TechStackLogo
            src={"/images/MySQL.png"}
            alt={"MySQLLogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={1}
          />

          <TechStackLogo
            src={"/images/AWS.png"}
            alt={"AWSLogo"}
            bgcolor={"rgba(255, 213, 140, .5)"}
            duration={0.5}
            delay={1.1}
          />

          <TechStackLogo
            src={"/images/SupaBase.png"}
            alt={"SupabaseLogo"}
            bgcolor={"rgba(3,191,100,.1)"}
            duration={0.5}
            delay={1.2}
          />
        </Box>
        <SectionTitle title={"Works"} width={58} />
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid2 container spacing={2}>
            <ProjectCard
              title={"Endurofy"}
              delay={0.1}
              href={"/portfolio/endurofy"}
              src={"/images/endurofy/endurofylogo.png"}
              alt={"EndurofyLogo"}
              width={80}
              height={80}
              fontWeight={"bold"}
              fontSize={30}
            >
              <Typography
                component={"p"}
                sx={{ textIndent: "1em" }}
                color="text.secondary"
              >
                A fitness app that allow users to track their workouts and daily
                weights.
              </Typography>
            </ProjectCard>
            <ProjectCard
              title={"Endurofy Prototype"}
              delay={0.1}
              href={"/portfolio/endurofy-prototype"}
              content={"Endurofy"}
              color={colors.purpleAccent[400]}
              fontWeight={"bold"}
              fontSize={30}
            >
              <Typography
                component={"p"}
                sx={{ textIndent: "1em" }}
                color="text.secondary"
              >
                A fitness app that allow users to log their food, daily weights,
                and workouts all in one app.
              </Typography>
            </ProjectCard>
            <ProjectCard
              src={"/images/PythonLogo.png"}
              alt="JSLogo"
              title={"Python Interpreter"}
              delay={0.1}
              href={"/portfolio/python-interpreter"}
              width={60}
              height={60}
            >
              <Typography
                component={"p"}
                sx={{ textIndent: "1em" }}
                color="text.secondary"
              >
                An online Python interpreter written from scratch using C++.
              </Typography>
            </ProjectCard>
            <ProjectCard
              title={"Zoo web app"}
              delay={0.3}
              href={"/portfolio/zoo-webapp"}
              content={"Zoo"}
              color={colors.greenAccent[500]}
              fontWeight={"bold"}
              fontSize={30}
            >
              <Typography
                component={"p"}
                sx={{ textIndent: "1em" }}
                color="text.secondary"
              >
                Zoo web app focused on optimizing zoo operations, improving
                efficiecy and visitor experience.
              </Typography>
            </ProjectCard>
            <ProjectCard
              src={"/images/coloredBrain.png"}
              alt="JSLogo"
              title={"3 Agents Reinforcement Learning"}
              delay={0.3}
              href={"/portfolio/pdworld"}
              width={60}
              height={60}
            >
              <Typography
                component={"p"}
                sx={{ textIndent: "1em" }}
                color="text.secondary"
              >
                A reinforcement learning model that trains three agents to
                efficiently complete pickup and drop-off tasks.
              </Typography>
            </ProjectCard>
          </Grid2>
        </Box>
      </Box>
    </ArticleLayout>
  );
};

export default Portfolio;
