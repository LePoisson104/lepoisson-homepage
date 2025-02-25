"use client";
import { Box, Typography, Button, Container, Avatar } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";
import { Typed } from "react-typed";
import { useEffect, useRef } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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
    <Container>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "lightblue",
          minHeight: 50,
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
            Software Engineer
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
        <Typography variant="h5" fontWeight={"bold"}>
          Work
        </Typography>
        <Box
          sx={{
            width: 40,
            borderBottom: `3px solid ${
              theme.palette.mode === "light"
                ? colors.grey[600]
                : colors.grey[500]
            }`,
          }}
        />
      </Box>
    </Container>
  );
}
