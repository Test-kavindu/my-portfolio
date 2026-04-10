import { motion } from "framer-motion";
import heroImg from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">Available for work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.95] mb-6 max-w-4xl"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Kavindu</span>
          <br />
          <span className="text-gradient">Thareen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
        >
          Full-stack developer crafting high-performance digital experiences
          with clean code, modern design, and relentless attention to detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 rounded-lg font-display font-medium text-sm overflow-hidden transition-transform hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            <span className="relative z-10 text-primary-foreground">Explore My Work</span>
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-lg font-display font-medium text-sm glass text-foreground hover:bg-secondary transition-all hover:scale-105"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
