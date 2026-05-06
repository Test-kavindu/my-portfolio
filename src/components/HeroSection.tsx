import { motion, useAnimation } from "framer-motion";
import { profile } from "@/data/profile";

const HeroSection = () => {
  const profileImageSrc = "/IMG/profile-pic.jpeg"; // Put your JPEG in public/profile.jpeg

  const fallbackImageSrc = "/software-engineer.svg";
  const imageControls = useAnimation();

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden grain">
      {/* Matte background (no image) */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

      {/* Floating orbs */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground font-medium">{profile.hero.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.95] mb-6 max-w-4xl"
            >
              {profile.hero.headlinePrefix}{" "}
              <span className="text-gradient">{profile.name.first}</span>
              <br />
              <span className="text-gradient">{profile.name.last}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="max-w-xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
            >
              {profile.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative w-full sm:w-auto px-8 py-4 rounded-lg font-display font-medium text-sm overflow-hidden transition-transform hover:scale-105"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span className="relative z-10 text-primary-foreground">Explore My Work</span>
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-display font-medium text-sm glass text-foreground hover:bg-secondary transition-all hover:scale-105"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Right-side image (desktop) */}
          <motion.div
            initial="hidden"
            animate={imageControls}
            variants={{
              hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            viewport={{ once: false, amount: 0.6 }}
            onViewportEnter={() => imageControls.start("show")}
            onViewportLeave={() => imageControls.start("hidden")}
              className="hidden lg:block relative justify-self-end w-full max-w-sm"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl rounded-[1.75rem]" />

            <div className="relative glass rounded-[1.75rem] p-2">
              <img
                src={profileImageSrc}
                alt="Portrait"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover rounded-[1.45rem]"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.dataset.fallbackApplied === "true") return;
                  img.dataset.fallbackApplied = "true";
                  img.src = fallbackImageSrc;
                }}
              />
            </div>

            {/* Dots decoration */}
            <div className="absolute -right-4 -bottom-4 glass rounded-2xl p-3 opacity-80">
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${i % 9 === 0 ? "bg-accent/70" : "bg-primary/25"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <button
            type="button"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2"
            aria-label="Scroll to About section"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-1.5 rounded-full bg-muted-foreground" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
