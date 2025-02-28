"use client";
import { Box, Grid2, Typography } from "@mui/material";
import ArticleLayout from "@/components/article";
import SectionTitle from "@/components/section-title";
import TechStackLogo from "@/components/tech-stack-logo";
import ProjectCard from "@/components/project-card";

const Portfolio = () => {
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
            mb: 3,
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
            src={"/images/ReactLogo.png"}
            alt={"ReactLogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.3}
          />

          <TechStackLogo
            src={"/images/Next.js.png"}
            alt={"NextLogo"}
            bgcolor={"rgba(255, 255, 255, 0.5)"}
            duration={0.5}
            delay={0.4}
          />

          <TechStackLogo
            src={"/images/Express.png"}
            alt={"ExpressLogo"}
            bgcolor={"rgba(255, 255, 255, 0.5)"}
            duration={0.5}
            delay={0.5}
          />

          <TechStackLogo
            src={"/images/MySQL.png"}
            alt={"MySQLLogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.6}
          />

          <TechStackLogo
            src={"/images/AWS.png"}
            alt={"AWSLogo"}
            bgcolor={"rgba(255, 213, 140, .5)"}
            duration={0.5}
            delay={0.7}
          />

          <TechStackLogo
            src={"/images/Material UI.png"}
            alt={"MUILogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.8}
          />
        </Box>
        <SectionTitle title={"Works"} width={58} />
        <Box sx={{ flexGrow: 1, mt: 3 }}>
          <Grid2 container spacing={2}>
            <ProjectCard
              src={"/images/AWS.png"}
              alt="JSLogo"
              title={"Endurofy"}
            />
            <Typography component={"p"}>
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support. The life-time revenue is more than
              $300k.
            </Typography>
          </Grid2>
        </Box>
      </Box>
    </ArticleLayout>
  );
};

export default Portfolio;
