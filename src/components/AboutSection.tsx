import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          <div>
            <span className="inline-block text-sm font-display font-medium text-accent tracking-wider uppercase mb-4">{profile.about.heading}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-8">
              {profile.about.subheading.split("\n")[0]}
              <br />
              <span className="text-gradient">{profile.about.subheading.split("\n")[1]}</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              {profile.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.about.cards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-6 text-center hover-glow"
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {card.title}
                </p>
                <p className="text-sm text-muted-foreground">{card.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
