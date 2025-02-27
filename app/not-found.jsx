"use client";
import NextLink from "next/link";
import { Box, Typography, Container, Divider, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";

const PageNotFound = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Container
      sx={{
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography variant="h2" fontWeight={"bold"}>
          Not found
        </Typography>
        <Typography variant="h5" color="text.secondary" mt={1} mb={3}>
          The page you&apos;re looking for was not found.
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <Button
            component={NextLink}
            href="/"
            sx={{
              textTransform: "none",
              color: "white",
              bgcolor: colors.purpleAccent[400],
              "&:hover": {
                bgcolor: colors.purpleAccent[200],
              },
              px: 2,
              py: 1,
              mt: 2,
              fontWeight: "bold",
            }}
          >
            Return to home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PageNotFound;
