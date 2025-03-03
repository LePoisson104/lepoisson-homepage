import { useState } from "react";
import { Box, IconButton, Modal, Fade } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "@/lib/theme";
import { useSwipeable } from "react-swipeable";
import Section from "./section";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

const ImageSlider = ({ delay, images }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const IconBtnStyle = {
    color: colors.purpleAccent[400],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Swipe Handlers for Mobile
  const handlers = useSwipeable({
    onSwipedLeft: nextImage, // Swipe left → Next image
    onSwipedRight: prevImage, // Swipe right → Previous image
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enables swipe with mouse
  });

  return (
    <Section delay={delay} mt={3}>
      <Box {...handlers} position="relative" width="100%" overflow="hidden">
        {/* Image */}
        <Box
          component="img"
          src={images[currentIndex]} // Dynamically change the image
          sx={{
            width: "100%",
            borderRadius: 3,
            transition: "opacity 0.5s ease-in-out", // Smooth transition
            cursor: "pointer",
            // height: { md: 300, xs: 200, sm: 300 },
          }}
          onClick={() => setIsFullscreen(true)} // Open full-screen modal on click
        />

        {/* Buttons Container - Positioned on top of the image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 10px",
            zIndex: 2,
          }}
        >
          <IconButton onClick={prevImage} sx={{ ...IconBtnStyle }}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton onClick={nextImage} sx={{ ...IconBtnStyle }}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>

        {/* Fullscreen Toggle Button */}
        <IconButton
          onClick={() => setIsFullscreen(true)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 3,
            color: colors.purpleAccent[400],
          }}
        >
          <FullscreenIcon />
        </IconButton>

        {/* Dot Indicators */}
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 1 }}>
          {images.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                bgcolor:
                  index === currentIndex ? colors.purpleAccent[400] : "white",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Fullscreen Modal with Backdrop */}
      <Modal open={isFullscreen} onClose={() => setIsFullscreen(false)}>
        <Fade in={isFullscreen}>
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: 1,
              padding: 2,
              outline: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "80vw",
              height: "80vh",
              bgcolor: "rgba(255,255,255,.03",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={() => setIsFullscreen(false)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  zIndex: 3,
                }}
              >
                <CloseIcon
                  fontSize="large"
                  sx={{ color: colors.primary[1000] }}
                />
              </IconButton>

              {/* Navigation Button */}
              <IconButton
                onClick={prevImage}
                sx={{ color: colors.primary[1000], mr: 2 }}
              >
                <KeyboardArrowLeftIcon fontSize="large" />
              </IconButton>

              {/* Fullscreen Image */}
              <Box
                component="img"
                src={images[currentIndex]}
                sx={{
                  // width: "90vw", // Increase width
                  maxWidth: "100%", // Use 90% of viewport width
                  // height: "80vh", // Increase height
                  maxHeight: "65vh", // Use 90% of viewport height
                  objectFit: "contain", // Ensure the image scales correctly
                  borderRadius: 3,
                }}
              />

              {/* Navigation Button */}
              <IconButton
                onClick={nextImage}
                sx={{ color: colors.primary[1000], ml: 2 }}
              >
                <KeyboardArrowRightIcon fontSize="large" />
              </IconButton>
            </Box>
            {/* Dot Indicators for the Fullscreen Modal */}
            <Box
              sx={{ display: "flex", gap: 1, justifyContent: "center", mt: 2 }}
            >
              {images.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor:
                      index === currentIndex
                        ? colors.purpleAccent[400]
                        : "white",
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Section>
  );
};

export default ImageSlider;
