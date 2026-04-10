import { motion } from "framer-motion";

const skillGroups = [
  { label: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
  { label: "Backend", skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
  { label: "Tools", skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h3 className="font-display text-xl text-foreground mb-6 pb-4 border-b border-border">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
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
