import { motion } from "framer-motion";
import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => (
  <motion.main
    id="main-content"
    className="flex-1 outline-none"
    tabIndex={-1}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.main>
);
