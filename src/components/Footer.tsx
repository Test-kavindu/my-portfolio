import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="relative py-8"
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-display font-medium">Kavindu Thareen</span>. All rights reserved.
      </p>
    </div>
  </motion.footer>
);

export default Footer;
