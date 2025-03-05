"use client";
import React from "react";
import {
  Typography,
  Box,
  Divider,
  Paper,
  Grid2,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Link,
  Button,
} from "@mui/material";
import {
  Email,
  Phone,
  LinkedIn,
  GitHub,
  LocationOn,
  School,
  Work,
  Code,
  ArrowRight,
  Language,
} from "@mui/icons-material";
import Section from "@/components/section";
import SectionTitle from "@/components/section-title";
import ArticleLayout from "@/components/article";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import NextLink from "next/link";

const Resume = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ArticleLayout delay={0.1} title={"Resume"}>
      <Box sx={{ py: 4 }}>
        <SectionTitle title={"Resume"} width={72} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Button
            href={"/Resume.pdf"}
            download="Viet_Pham_Resume.pdf"
            endIcon={<DescriptionOutlinedIcon />}
            sx={{
              textTransform: "none",
              bgcolor: colors.purpleAccent[400],
              color: colors.primary[400],
              fontWeight: "bold",
              fontSize: 14,
              "&:hover": { bgcolor: colors.purpleAccent[300] },
              px: 2,
              py: 1,
              mt: 2,
            }}
          >
            Download Resume
          </Button>
        </Box>
        <Section>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              mt: 2,
              bgcolor:
                theme.palette.mode === "dark" ? colors.primary[500] : "white",
            }}
          >
            {/* Header Section */}
            <Box
              sx={{
                mb: 4,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  fontWeight={600}
                >
                  Viet H. Pham
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOn fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body1">Houston, TX</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Phone fontSize="small" sx={{ mr: 0.5 }} />
                  <Typography variant="body1">(936)-442-1832</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email fontSize="small" sx={{ mr: 0.5 }} />
                  <Link
                    href="mailto:vietpham0624@gmail.com"
                    underline="hover"
                    sx={{ color: colors.primary[1000] }}
                  >
                    vietpham0624@gmail.com
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LinkedIn fontSize="small" sx={{ mr: 0.5 }} />
                  <Link
                    href="https://www.linkedin.com/in/viet-pham-112087214/"
                    target={"_blank"}
                    underline="hover"
                    sx={{ color: colors.primary[1000] }}
                  >
                    LinkedIn
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <GitHub fontSize="small" sx={{ mr: 0.5 }} />
                  <Link
                    href="https://github.com/LePoisson104"
                    target={"_blank"}
                    underline="hover"
                    sx={{ color: colors.primary[1000] }}
                  >
                    Github
                  </Link>
                </Box>
              </Box>
            </Box>

            {/* Education Section */}
            <SectionHeader
              title="Education"
              icon={<School />}
              color={colors.primary[1000]}
            />
            <Box sx={{ mb: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography variant="body1">
                  <span style={{ fontWeight: "bold" }}>
                    University of Houston
                  </span>{" "}
                  | Houston, TX
                </Typography>
                <Typography variant="subtitle1">May 2024</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom fontStyle={"italic"}>
                B.S. in Computer Science, with a minor in Mathematics
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong
                  style={{ fontStyle: "italic", textDecoration: "underline" }}
                >
                  Awards:
                </strong>{" "}
                Natural Science and Mathematics (NSM) Scholarship, Transfer
                Excellence Scholarship
              </Typography>
              <Typography variant="body2">
                <strong
                  style={{ fontStyle: "italic", textDecoration: "underline" }}
                >
                  Relevant Coursework:
                </strong>{" "}
                Algorithms and Data Structures, Database Systems, Fundamentals
                of Software Engineering, Software Design, Programming Languages
                and Paradigms, Operating Systems, Fundamentals of Artificial
                Intelligence, Discrete Mathematics, Data Science and Statistical
                Learning, Statistic for Sciences
              </Typography>
            </Box>

            {/* Technical Skills Section */}
            <SectionHeader
              title="Technical Skills"
              icon={<Code />}
              color={colors.primary[1000]}
            />
            <Box sx={{ mb: 4 }}>
              <Grid2 container spacing={2}>
                <SkillCategory
                  title="Programming Languages"
                  skills={[
                    "JavaScript/TypeScript (Node.js)",
                    "C++",
                    "Python",
                    "HTML5",
                    "CSS",
                    "SQL",
                  ]}
                />
                <SkillCategory
                  title="Technologies and Tools"
                  skills={[
                    "Supabase",
                    "Git",
                    "npm",
                    "Postman",
                    "AWS",
                    "MySQL",
                    "PostgreSQL",
                  ]}
                />
                <SkillCategory
                  title="Frameworks/Libraries"
                  skills={[
                    "Next.js",
                    "Express.js",
                    "Tailwind CSS",
                    "React",
                    "Redux",
                    "RTK Query",
                    "Material UI",
                    "Chakra UI",
                  ]}
                />
              </Grid2>
            </Box>

            {/* Experience Section */}
            <SectionHeader
              title="Experience"
              icon={<Work />}
              color={colors.primary[1000]}
            />
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography variant="h6" component="h3">
                  IT Help Desk | Lone Star College
                </Typography>
                <Typography variant="subtitle1">
                  September 2021 - December 2021
                </Typography>
              </Box>
              <Typography variant="subtitle2" gutterBottom>
                The Woodlands, TX
              </Typography>
              <List dense>
                <BulletPoint text="Assisted users with VPN setup, email troubleshooting, account management, and password resets via phone and chat." />
                <BulletPoint text="Diagnosed and resolved Windows, macOS, and mobile device technical issues, escalating complex cases as needed." />
                <BulletPoint text="Provided user education and guidance on Microsoft Office, remote access tools, and security best practices." />
                <BulletPoint text="Maintained customer satisfaction scores above 90% by providing timely and effective support." />
              </List>
            </Box>

            {/* Technical Projects Section */}
            <SectionHeader
              title="Technical Projects"
              icon={<Code />}
              color={colors.primary[1000]}
            />
            <Box sx={{ mb: 4 }}>
              {/* Project 1 */}
              <ProjectItem
                title="Endurofy"
                date="June 2024 - Present"
                links={[
                  { label: "Demo", url: "/portfolio/endurofy" },
                  {
                    label: "Source Code",
                    url: "https://github.com/LePoisson104/Endurofy",
                  },
                ]}
                technologies={["React", "Express.js", "Material UI", "MySQL"]}
                description={[
                  "Developed a comprehensive fitness tracking platform with features for food intakes, weight monitoring, and workout logging.",
                  "Integrated USDA Food Data Central API to provide nutritional information for 300,000+ food items.",
                  "Implemented secure JWT authentication with token rotation and advanced session management.",
                  "Created interactive data visualization to track user fitness and weight progress.",
                  "Integrated seamless third-party fitness app connectivity, allowing users to sync data from platforms like Apple health, myfitnesspal, and more to Endurofy for comprehensive health and fitness tracking.",
                  "Designed adaptive user interfaces using Material UI and React, automatically displaying a mobile-optimized version on smaller screens and desktop layout on larger screens, ensuring smooth experience across devices.",
                ]}
                color={colors.primary[1000]}
              />

              {/* Project 2 */}
              <ProjectItem
                title="Online Python Code Editor"
                date="April - May 2024"
                links={[
                  {
                    label: "Website",
                    url: "https://pythoncodeeditor-1.onrender.com/",
                  },
                  {
                    label: "Source Code",
                    url: "https://github.com/LePoisson104/PythonCodeEditor",
                  },
                ]}
                technologies={["C++", "React", "Express.js", "ChakraUI"]}
                description={[
                  "Engineer an interactive web-based Python interpreter written from scratch in C++, enabling real-time code execution.",
                  "Developed a RESTful API that processes source code sent from the frontend, interprets it using an interpreter written in C++, and returns the output along with execution time.",
                  "Implemented seamless frontend-backend communication, allowing direct performance comparison of execution speeds between the custom C++ interpreter and native Python, with results showing ~20 - 25% execution time difference.",
                ]}
                color={colors.primary[1000]}
              />

              {/* Project 3 */}
              <ProjectItem
                title="Zoo Webapp"
                date="August 2024 - December 2024"
                links={[
                  { label: "Demo", url: "/portfolio/zoo-webapp" },
                  {
                    label: "Source Code",
                    url: "https://github.com/LePoisson104/zoo_web_app",
                  },
                ]}
                technologies={["HTML", "CSS", "JavaScript", "MySQL"]}
                description={[
                  "Developed a full-stack web app to streamline zoo operations and improve visitor experience.",
                  "Implemented a RESTful API for seamless front-end and back-end communication, enabling efficient data retrieval and manipulation with near real-time response (<10ms).",
                  "Integrated AWS API for secure and scalable cloud storage solutions, enhancing data accessibility and reliability.",
                ]}
                color={colors.primary[1000]}
              />

              {/* Project 4 */}
              <ProjectItem
                title="3 Agents Reinforcement Learning Model"
                date="April 2024"
                links={[
                  { label: "Demo", url: "/portfolio/pdworld" },
                  {
                    label: "Source Code",
                    url: "https://github.com/LePoisson104/3agents",
                  },
                ]}
                technologies={["Python"]}
                description={[
                  "Developed a PD World environment where agents take turns to pick up and drop off blocks.",
                  "Implemented SARSA/Q-Learning algorithms with a Q-table and various action policies to aid the agents in learning the optimal path within the environment, improving task completion efficiency by 65% by comparing to random movements.",
                ]}
                color={colors.primary[1000]}
              />
            </Box>

            {/* Interests Section */}
            <SectionHeader
              title="Additional Information & Interests"
              icon={<Language />}
              color={colors.primary[1000]}
            />
            <Box>
              <Typography variant="body1" gutterBottom>
                <strong>Spoken languages:</strong> Fluent in English and
                Vietnamese
              </Typography>
              <Typography variant="body1">
                <strong>Interests:</strong> Full Stack Web Development, Data
                Science, Machine Learning and Artificial Intelligence
              </Typography>
            </Box>
          </Paper>
        </Section>
      </Box>
    </ArticleLayout>
  );
};

// Helper Components
const SectionHeader = ({ title, icon, color }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
    <Box sx={{ mr: 1 }}>{icon}</Box>
    <Typography
      variant="h5"
      component="h2"
      sx={{
        borderBottom: `2px solid ${color}`,
        fontWeight: "bold",
      }}
    >
      {title}
    </Typography>
    <Divider sx={{ flex: 1, ml: 2 }} />
  </Box>
);

const SkillCategory = ({ title, skills }) => (
  <Grid2 xs={12} md={4}>
    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
      {title}:
    </Typography>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {skills.map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          variant="outlined"
          size="small"
          sx={{ margin: 0.5 }}
        />
      ))}
    </Box>
  </Grid2>
);

const BulletPoint = ({ text, color }) => (
  <ListItem alignItems="flex-start" sx={{ py: 0 }}>
    <ListItemIcon sx={{ minWidth: 28 }}>
      <ArrowRight fontSize="small" sx={{ color: color }} />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const ProjectItem = ({
  title,
  date,
  links,
  technologies,
  description,
  color,
}) => (
  <Box sx={{ mb: 3 }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
    </Box>

    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
      {links.map((link, index) => (
        <Link
          component={NextLink}
          href={link.url}
          key={index}
          target={link.label === "Demo" ? "" : "_blank"}
          underline="hover"
          sx={{ display: "flex", alignItems: "center", mr: 2, color: color }}
        >
          {link.label === "Website" || link.label === "Demo" ? (
            <Language fontSize="small" sx={{ mr: 0.5 }} />
          ) : (
            <GitHub fontSize="small" sx={{ mr: 0.5 }} />
          )}
          {link.label}
        </Link>
      ))}

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {technologies.map((tech, index) => (
          <Chip
            key={index}
            label={tech}
            size="small"
            color="secondary"
            variant="outlined"
          />
        ))}
      </Box>
    </Box>

    <List dense>
      {description.map((item, index) => (
        <BulletPoint key={index} text={item} color={color} />
      ))}
    </List>
  </Box>
);

export default Resume;
