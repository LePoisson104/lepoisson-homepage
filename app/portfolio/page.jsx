"use client";
import { Box, Grid2, Paper } from "@mui/material";
import ArticleLayout from "@/components/article";
import SectionTitle from "@/components/section-title";
import TechStackLogo from "@/components/tech-stack-logo";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

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
            alt={"jslogo"}
            bgcolor={"rgba(255, 248, 211, 0.5)"}
            duration={0.5}
            delay={0.1}
          />

          <TechStackLogo
            src={"/images/TSLogo.png"}
            alt={"jslogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.2}
          />

          <TechStackLogo
            src={"/images/ReactLogo.png"}
            alt={"jslogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.3}
          />

          <TechStackLogo
            src={"/images/Next.js.png"}
            alt={"jslogo"}
            bgcolor={"rgba(255, 255, 255, 0.5)"}
            duration={0.5}
            delay={0.4}
          />

          <TechStackLogo
            src={"/images/Express.png"}
            alt={"jslogo"}
            bgcolor={"rgba(255, 255, 255, 0.5)"}
            duration={0.5}
            delay={0.5}
          />

          <TechStackLogo
            src={"/images/MySQL.png"}
            alt={"jslogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.6}
          />

          <TechStackLogo
            src={"/images/AWS.png"}
            alt={"jslogo"}
            bgcolor={"rgba(255, 213, 140, .5)"}
            duration={0.5}
            delay={0.7}
          />

          <TechStackLogo
            src={"/images/Material UI.png"}
            alt={"jslogo"}
            bgcolor={"rgba(173, 216, 230, .5)"}
            duration={0.5}
            delay={0.8}
          />
        </Box>
        <SectionTitle title={"Works"} width={58} />
        <Box sx={{ flexGrow: 1, mt: 3 }}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ md: 6, sm: 12, xs: 12 }}>
              <Item>xs=6 md=6</Item>
            </Grid2>
            <Grid2 size={{ md: 6, sm: 12, xs: 12 }}>
              <Item>xs=6 md=6</Item>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </ArticleLayout>
  );
};

export default Portfolio;
