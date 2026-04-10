import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together.
          </p>
          <a
            href="mailto:kavindu@example.com"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm transition-transform hover:scale-105"
          >
            Say Hello
          </a>
          <div className="flex justify-center gap-8 mt-16">
            {["GitHub", "LinkedIn", "Twitter"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
