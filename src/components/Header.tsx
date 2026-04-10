import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
const navItems = ["About", "Projects", "Skills", "Contact"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl font-bold text-gradient"
          >
            KT.
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                onClick={() => scrollTo(item)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              onClick={() => scrollTo("Contact")}
              className="ml-4 px-5 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Hire Me
            </motion.button>
            <ThemeToggle />
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2"
            >
              <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-foreground" />
              <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-foreground" />
              <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-foreground" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-strong flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-3xl font-display font-bold text-foreground hover:text-gradient transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
