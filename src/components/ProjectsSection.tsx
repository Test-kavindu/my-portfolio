import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A modern shopping experience with real-time inventory and seamless checkout.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Task Management App",
    category: "Web Application",
    description: "Collaborative project management tool with drag-and-drop Kanban boards.",
    tech: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description: "Real-time data visualization with interactive charts and custom reports.",
    tech: ["React", "D3.js", "Python"],
  },
  {
    title: "Social Media API",
    category: "Backend",
    description: "Scalable REST API with authentication, rate limiting, and media processing.",
    tech: ["Express", "MongoDB", "Redis"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group p-8 border border-border bg-background hover:border-foreground/30 transition-all duration-500 cursor-pointer"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{project.category}</p>
              <h3 className="text-2xl font-display text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs tracking-wider uppercase bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
