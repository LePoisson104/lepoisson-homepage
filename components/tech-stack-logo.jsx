import { Box } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const TechStackLogo = ({ src, alt, bgcolor, duration, delay }) => {
  const logoVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state (invisible and below)
    visible: { opacity: 1, y: 0 }, // Final state (fully visible and at normal position)
  };

  return (
    <motion.div
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: duration, delay: delay }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: 60,
          borderRadius: 1,
          bgcolor: bgcolor,
          backdropFilter: "blur(10px)", // Apply blur effect
        }}
      >
        <Image src={src} alt={alt} width={35} height={35} />
      </Box>
    </motion.div>
  );
};

export default TechStackLogo;
