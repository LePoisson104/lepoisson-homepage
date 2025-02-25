import { motion } from "framer-motion";
import { useEffect } from "react";

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const ArticleLayout = ({ children, title }) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - Viet Pham`;
    }
  }, [title]);

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.article>
  );
};

export default ArticleLayout;
