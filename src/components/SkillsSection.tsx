import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    icon: "🎨",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
  },
  {
    label: "Backend",
    icon: "⚡",
    skills: ["Node.js / Express", "Python / FastAPI", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    label: "DevOps & Tools",
    icon: "🛠",
    skills: ["Docker / K8s", "AWS / Vercel", "CI/CD Pipelines", "Git / GitHub", "Figma"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-display font-medium text-accent tracking-wider uppercase mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-xl p-8 hover-glow"
            >
              <div className="text-3xl mb-4">{group.icon}</div>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
