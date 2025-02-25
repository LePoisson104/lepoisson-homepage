"use client";
import {
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  Link,
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
import BioSection from "@/components/bio-section";

export default function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Hi, I'm Viet, a full-stack developer based in Texas!"],
      typeSpeed: 20,
      backSpeed: 30,
      showCursor: false,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);

  return (
    <ArticleLayout>
      <Container>
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
              Software Engineer (#OpenToWork)
            </Typography>
            <Typography variant="body1" fontWeight={200} mt={1}>
              <LocationOnOutlinedIcon fontSize="small" />
              Houston, Texas
            </Typography>
          </Box>
          <Box>
            <Avatar
              sx={{
                width: 90,
                height: 90,
              }}
              src="/images/AvatarPic.jpg"
              alt="profile image"
            />
          </Box>
        </Box>

        <Box component="section" mt={5}>
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
              href={"/"}
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
        </Box>

        <Box component={"section"} mt={3}>
          <SectionTitle title={"Bio"} width={30} />
          <BioSection year={2002} mt={1}>
            <Typography component={"p"} sx={{ textAlign: "justify" }}>
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
          </BioSection>
          <BioSection year={2022} mt={0.5}>
            <Typography component={"p"} sx={{ textAlign: "justify" }}>
              Graduated from Lone Star College, The Woodlands, TX with an
              Associate of Science in Computer Science (GPA: 4.0).
            </Typography>
          </BioSection>
          <BioSection year={2024} mt={0.5}>
            <Typography component={"p"} sx={{ textAlign: "justify" }}>
              Completed my Bachelor of Science in Computer Science with a minor
              in Mathematics from the University of Houston, Houston, TX (GPA:
              3.35).
            </Typography>
          </BioSection>
          <BioSection year={"2024 to present"} mt={0.5}>
            <Typography component={"p"} sx={{ textAlign: "justify" }}>
              Working on my startup{" "}
              <Link
                component={NextLink}
                href={"/"}
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
          </BioSection>
        </Box>

        <Box component={"section"} mt={3}>
          <SectionTitle title={"I ♥"} width={25} />
          <Typography
            component={"p"}
            sx={{ textAlign: "justify", textIndent: "1em" }}
          >
            Web development, Weight lifting, Sports, Video games
          </Typography>
        </Box>
      </Container>
    </ArticleLayout>
  );
}
