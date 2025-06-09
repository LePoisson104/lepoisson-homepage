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
                <strong>Cumulative GPA:</strong> 3.35/4.0
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
                    "Java",
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
                    "Spring Boot",
                    "Javalin",
                    "Next.js",
                    "Express.js",
                    "Tailwind CSS",
                    "React",
                    "Tanstack",
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
                <BulletPoint text="Provided phone-based tech support for Windows environments, covering user login issues, Outlook issues." />
                <BulletPoint text="Troubleshoot and resolve network issues by configuring static IPs and mapping drives." />
                <BulletPoint text="Used Task Manager, Command Prompt, to identify and fix system performances issues." />
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
                    label: "Front-end",
                    url: "https://github.com/LePoisson104/endurofy",
                  },
                  {
                    label: "Back-end",
                    url: "https://github.com/LePoisson104/Endurofy_api",
                  },
                ]}
                technologies={[
                  "TypeScript",
                  "Next.js",
                  "Express.js",
                  "Redux",
                  "MySQL",
                ]}
                description={[
                  "Developed and deployed a full-stack fitness app to enhance personal fitness tracking efficiency by 80%.",
                  "Utilized MySQL for data storage, Express.js for RESTful API backend, and Next.js with shadcn/ui for a responsive user interface.",
                  "Integrated third-party APIs (Apple Health, MyFitnessPal, Cronometer) to enhance data sync and user retention.",
                  "Improved user experience by consolidating workout logging, weight tracking, and daily calorie data syncing via third-party APIs into one app, boosting daily users by 35% and workout logging consistency by over 50%.",
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
                  "Engineer a Python interpreter written from scratch in C++.",
                  "Utilized Express.js to build a RESTful API that receives source code, runs it through a custom interpreter, and returns real-time output to the React.js frontend.",
                  "Performed benchmarks to measure execution time differences between the custom C++ interpreter and native Python, revealing a 80-85% similarity in execution speed.",
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
                  "Integrated AWS RDS for scalable cloud storage solutions, improving data accessibility and reliability.",
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
                <strong>Interests:</strong> Software Development, Machine
                Learning and Artificial Intelligence, Data Science
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
