import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/data/profile";

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const getPrimaryHref = (project: (typeof profile.projects)[number]) =>
    project.href ?? project.links?.[0]?.href;

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-16"
        >
          <div>
            <span className="inline-block text-sm font-display font-medium text-accent tracking-wider uppercase mb-4">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base sm:text-lg">
            A selection of projects that showcase my passion for building exceptional digital products.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => {
                const href = getPrimaryHref(project);
                if (!href) return;
                window.open(href, "_blank", "noopener,noreferrer");
              }}
              onKeyDown={(e) => {
                const href = getPrimaryHref(project);
                if (!href) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(href, "_blank", "noopener,noreferrer");
                }
              }}
              role={getPrimaryHref(project) ? "link" : undefined}
              tabIndex={getPrimaryHref(project) ? 0 : -1}
              aria-label={getPrimaryHref(project) ? `Open ${project.title} repository` : undefined}
              className={`group relative rounded-xl overflow-hidden glass hover-glow ${
                getPrimaryHref(project) ? "cursor-pointer" : "cursor-default"
              }`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-6 sm:p-8 md:p-10">
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
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

                  {project.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 text-xs font-medium tracking-wider rounded-md bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
                      aria-label={`Open ${project.title} ${link.label} repository`}
                    >
                      {link.label}
                    </a>
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
