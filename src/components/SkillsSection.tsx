import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const SkillsSection = () => {
  const cardGradients = [
    "from-primary/15 to-accent/10",
    "from-accent/15 to-primary/10",
    "from-primary/10 to-accent/15",
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-sm font-display font-medium text-accent tracking-wider uppercase mb-4">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden glass rounded-xl p-6 sm:p-8 md:p-9 hover-glow hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  cardGradients[i % cardGradients.length]
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl text-foreground/90 group-hover:text-foreground transition-colors">
                    {group.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {group.label}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium tracking-wider rounded-md bg-secondary text-secondary-foreground">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
