import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Resume from "../pages/Resume";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Resume />
    </motion.div>
  );
}
