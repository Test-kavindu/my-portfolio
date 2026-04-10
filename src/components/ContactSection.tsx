import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-sm font-display font-medium text-accent tracking-wider uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Let's create something{" "}
            <span className="text-gradient">amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 leading-relaxed max-w-xl mx-auto">
            Got a project in mind? I'd love to hear about it. Let's turn your
            vision into reality together.
          </p>
          
          <motion.a
            href="mailto:kavindu@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 rounded-lg font-display font-medium text-sm text-primary-foreground transition-all glow-primary"
            style={{ background: "var(--gradient-primary)" }}
          >
            Say Hello →
          </motion.a>

          <div className="flex justify-center gap-6 mt-16">
            {[
              { name: "GitHub", icon: "GH" },
              { name: "LinkedIn", icon: "LI" },
              { name: "Twitter", icon: "TW" },
            ].map((link) => (
              <motion.a
                key={link.name}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-lg glass flex items-center justify-center text-sm font-display font-medium text-muted-foreground hover:text-foreground hover-glow transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
