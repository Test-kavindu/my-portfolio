import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A modern shopping experience with real-time inventory, AI recommendations, and seamless checkout.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "Task Management App",
    category: "Web Application",
    description: "Collaborative project management with drag-and-drop Kanban boards and real-time sync.",
    tech: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    color: "from-accent/20 to-primary/10",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description: "Real-time data visualization with interactive charts, custom reports, and AI insights.",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    color: "from-primary/15 to-accent/20",
  },
  {
    title: "Social Media API",
    category: "Backend",
    description: "Scalable REST & GraphQL API with auth, rate limiting, and media processing pipeline.",
    tech: ["Express", "MongoDB", "Redis", "Docker"],
    color: "from-accent/15 to-primary/15",
  },
];

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <div>
            <span className="inline-block text-sm font-display font-medium text-accent tracking-wider uppercase mb-4">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A selection of projects that showcase my passion for building exceptional digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-xl overflow-hidden glass hover-glow cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-display font-medium text-accent tracking-wider uppercase px-3 py-1 rounded-full bg-accent/10">
                    {project.category}
                  </span>
                  <motion.span
                    animate={{ rotate: hovered === i ? 45 : 0 }}
                    className="text-2xl text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    ↗
                  </motion.span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs font-medium tracking-wider rounded-md bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
