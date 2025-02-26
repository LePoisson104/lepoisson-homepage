"use client";
import {
  Box,
  Container,
  Stack,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import Logo from "./logo";
import GitHubIcon from "@mui/icons-material/GitHub";
import ThemeToggleBtn from "./theme-toggle-btn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { tokens } from "@/lib/theme";
import { useTheme } from "@emotion/react";
import LinkItem from "./link-item";

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (open) {
        handleClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        bgcolor: theme.palette.mode === "light" ? "#ffffff40" : "#20202380",
        backdropFilter: "blur(10px)",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
        zIndex: 2,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          py: 1,
          px: { xs: 2, md: 1 },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <LinkItem href="/portfolio">Portfolio</LinkItem>
          <LinkItem href="/resume">Resume</LinkItem>
          <LinkItem href="/blog">Blog</LinkItem>
          <LinkItem href="/contact">Contact Me</LinkItem>
          <LinkItem
            href="https://www.linkedin.com/in/viet-pham-112087214/"
            target="_blank"
            alignItems="center"
            gap={0.75}
          >
            <LinkedInIcon />
            LinkedIn
          </LinkItem>
          <LinkItem
            href="https://github.com/LePoisson104/lepoisson-homepage"
            target="_blank"
            alignItems="center"
            gap={0.75}
          >
            <GitHubIcon fontSize="small" />
            Source
          </LinkItem>
        </Stack>

        <Box sx={{ display: "flex", gap: 1 }}>
          <ThemeToggleBtn />
          <IconButton
            id="menu-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              borderRadius: "8px",
              width: 40,
              height: 40,
              border: "1px solid gray",
              display: { xs: 1, md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="links-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              sx: {
                width: "200px", // Set the desired width
                bgcolor: colors.primary[400],
                borderRadius: "10px",
                mt: 1,
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <LinkItem href="/">About</LinkItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LinkItem href="/portfolio">Portfolio</LinkItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LinkItem href="/resume">Resume</LinkItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LinkItem href="/blog">Blog</LinkItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LinkItem href="/contact">Contact Me</LinkItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LinkItem
                href="https://www.linkedin.com/in/viet-pham-112087214/"
                target="_blank"
                alignItems="center"
                gap={0.75}
              >
                <LinkedInIcon />
                LinkedIn
              </LinkItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LinkItem
                href="https://github.com/LePoisson104/lepoisson-homepage"
                target="_blank"
                alignItems="center"
                gap={0.75}
              >
                <GitHubIcon fontSize="small" />
                Source
              </LinkItem>
            </MenuItem>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
