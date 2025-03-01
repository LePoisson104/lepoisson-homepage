"use client";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Link,
  List,
  ListItem,
  Badge,
} from "@mui/material";
import NextLink from "next/link";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";
import { Typed } from "react-typed";
import { useEffect, useRef } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArticleLayout from "@/components/article";
import SectionTitle from "@/components/section-title";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Section from "@/components/section";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: 15,
    height: 15,
    borderRadius: "50%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Hi, I'm Viet, a full-stack developer!"],
      typeSpeed: 20,
      backSpeed: 30,
      showCursor: false,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);

  return (
    <ArticleLayout>
      <Box>
        <Box
          sx={{
            textAlign: "center",
            bgcolor: "lightblue",
            minHeight: 53,
            px: 1,
            py: 2,
            borderRadius: 2,
            mt: 5,
            mb: 5,
            bgcolor:
              theme.palette.mode === "light" ? "#ffffff40" : colors.grey[500],
            backdropFilter: "blur(10px)",
          }}
        >
          <span ref={typedRef} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h2" fontWeight={600}>
              Viet Pham
            </Typography>
            <Typography variant="body1" fontWeight={200}>
              Software Engineer (#AvailableForWork)
            </Typography>

            <Typography ariant="body1" fontWeight={200} mt={1}>
              <LocationOnOutlinedIcon
                fontSize="small"
                sx={{ color: colors.greenAccent[500] }}
              />
              Houston, Texas
            </Typography>
          </Box>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                sx={{
                  width: 110,
                  height: 110,
                }}
                src="/images/AvatarPic.jpg"
                alt="profile image"
              />
            </StyledBadge>
          </Box>
        </Box>

        <Section mt={5} delay={0.1}>
          <SectionTitle title={"About"} width={60} />
          <Typography
            component={"p"}
            sx={{
              textIndent: "1em",
              textAlign: "justify",
              hyphens: "auto",
              mt: 1,
            }}
          >
            Viet is a full-stack developer based in Texas, recently graduated
            with a Bachelor of Science in Computer Science with a minor in
            Mathematics. He is currently looking for a full-time position while
            working on{" "}
            <Link
              component={NextLink}
              href={"/portfolio/endurofy"}
              underline="none"
              sx={{
                color: colors.purpleAccent[300],
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Endurofy
            </Link>
            , a fitness app designed to help users track their food intake,
            workouts, and overall health goals. Viet is passionate about
            building digital solutions that enhance everyday life, from
            designing and developing applications to solving real-world problems
            with code. When not coding, he enjoys working out, exploring new
            technologies, and refining his craft.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              component={NextLink}
              href="/portfolio"
              endIcon={<ChevronRightIcon />}
              sx={{
                color: "white",
                bgcolor: colors.purpleAccent[400],
                textTransform: "none",
                fontSize: 14,
                fontWeight: "bold",
                py: 1,
                px: 2,
                "&:hover": {
                  bgcolor: colors.purpleAccent[300],
                },
              }}
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section mt={3} delay={0.2}>
          <SectionTitle title={"Bio"} width={30} />

          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.3,
              },
            }}
            // position="alternate"
          >
            {/* birth place */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body1"
                color="text.primary"
              >
                2002
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ bgcolor: "#FF7F32" }}>
                  <CakeOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography component={"p"} color="text.secondary">
                  Born in{" "}
                  <Link
                    component={NextLink}
                    href={
                      "https://www.google.com/search?q=quang+nam&rlz=1C5MACD_enUS1018US1018&oq=quang+n&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIJCAEQRRg7GIAEMgYIAhBFGDkyDQgDEC4YkQIYgAQYigUyDQgEEC4YkQIYgAQYigUyDQgFEC4YkQIYgAQYigUyDQgGEC4YkQIYgAQYigUyBggHEEUYPdIBCDIyMjRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
                    }
                    underline="none"
                    target="_blank"
                    sx={{
                      color: colors.purpleAccent[300],
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Quảng Nam
                  </Link>
                  , Việt Nam.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            {/* Lone Star College */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body1"
                color="text.primary"
              >
                2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ bgcolor: "#1E4BB8" }}>
                  <SchoolOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography component={"p"} color="text.secondary">
                  Graduated from Lone Star College, The Woodlands, TX with an
                  Associate of Science in Computer Science (GPA: 4.0).
                </Typography>
              </TimelineContent>
            </TimelineItem>
            {/* University */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body1"
                color="text.primary"
              >
                2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ bgcolor: colors.redAccent[500] }}>
                  <SchoolOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography component={"p"} color="text.secondary">
                  Completed my Bachelor of Science in Computer Science with a
                  minor in Mathematics from the University of Houston, Houston,
                  TX (GPA: 3.35).
                </Typography>
              </TimelineContent>
            </TimelineItem>
            {/* Present */}
            <TimelineItem>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  align: "right",
                  hyphens: "auto",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
                variant="body1"
                color="text.primary"
              >
                2024 to present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ bgcolor: "#00B200" }}>
                  <TerminalOutlinedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  component={"p"}
                  color="text.secondary"
                  sx={{
                    hyphens: "auto",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                  }}
                >
                  Working on my startup{" "}
                  <Link
                    component={NextLink}
                    href={"/portfolio/endurofy"}
                    underline="none"
                    sx={{
                      color: colors.purpleAccent[300],
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Endurofy
                  </Link>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Section>

        <Section delay={0.3} mt={3}>
          <SectionTitle title={"I ♥"} width={30} />
          <Typography
            component={"p"}
            sx={{ textAlign: "justify", textIndent: "1em" }}
          >
            Web development, Weight lifting, Sports, Video games
          </Typography>
        </Section>

        <Section delay={0.3} mt={3}>
          <SectionTitle title={"On the web"} width={113} />
          <List>
            <ListItem>
              {/* Adds a bottom margin */}
              <Link
                href="https://www.linkedin.com/in/viet-pham-112087214/"
                target="_blank"
              >
                <Button
                  startIcon={<LinkedInIcon />}
                  sx={{
                    textTransform: "none",
                    color: "white",
                    bgcolor: colors.purpleAccent[400],
                    "&:hover": {
                      bgcolor: colors.purpleAccent[200],
                    },
                    px: 2,
                  }}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://github.com/LePoisson104?tab=overview&from=2025-02-01&to=2025-02-24"
                target="_blank"
              >
                <Button
                  startIcon={<GitHubIcon />}
                  sx={{
                    textTransform: "none",
                    color: "white",
                    bgcolor: colors.purpleAccent[400],
                    "&:hover": {
                      bgcolor: colors.purpleAccent[200],
                    },
                    px: 2,
                  }}
                >
                  @lepoisson104
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.instagram.com/vp_ghoan?igsh=Y2J3ZDI5cHRveTFq&utm_source=qr"
                target="_blank"
              >
                <Button
                  startIcon={<InstagramIcon />}
                  sx={{
                    textTransform: "none",
                    color: "white",
                    bgcolor: colors.purpleAccent[400],
                    "&:hover": {
                      bgcolor: colors.purpleAccent[200],
                    },
                    px: 2,
                  }}
                >
                  @vp_ghoan
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Box>
    </ArticleLayout>
  );
}
