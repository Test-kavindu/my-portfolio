import { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["About", "Projects", "Skills", "Contact"];

const Header = () => {
  const [active, setActive] = useState("");

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-xl tracking-wide text-foreground">
          KT
        </button>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-medium tracking-wider uppercase transition-colors hover:text-foreground ${
                active === item ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
