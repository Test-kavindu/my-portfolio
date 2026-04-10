import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-display text-foreground leading-tight">
              Passionate about building things that live on the internet
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              I'm a full-stack developer who loves turning ideas into reality through code.
              With expertise across the entire development stack, I build applications that
              are not only functional but also delightful to use.
            </p>
            <p>
              My approach combines clean architecture with intuitive design, ensuring every
              project I touch is maintainable, scalable, and beautiful. I believe great
              software is the intersection of engineering excellence and user empathy.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-4xl font-display text-foreground">3+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display text-foreground">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
