import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ContactSection = () => {
  const [phoneOpen, setPhoneOpen] = useState(false);

  const emailSubject = encodeURIComponent("Project Inquiry - Collaboration Opportunity");
  const emailHref = profile.contact.email
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}&su=${emailSubject}`
    : "#";

  return (
    <>
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Glow background */}
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(60vw,600px)] h-[min(40vw,400px)] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-sm font-display font-medium text-accent tracking-wider uppercase mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Let's create something{" "}
            <span className="text-gradient">amazing</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-10 md:mb-12 leading-relaxed max-w-xl mx-auto">
            Got a project in mind? I'd love to hear about it. Let's turn your
            vision into reality together.
          </p>

          <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
            {profile.contact.email ? (
              <motion.a
                href={emailHref}
                target="_blank"
                rel="noreferrer noopener"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full sm:w-auto px-6 sm:px-10 py-4 rounded-lg font-display font-medium text-sm text-primary-foreground transition-all glow-primary"
                style={{ background: "var(--gradient-primary)" }}
              >
                Say Hello →
              </motion.a>
            ) : (
              <div className="inline-block w-full sm:w-auto px-6 sm:px-10 py-4 rounded-lg font-display font-medium text-sm glass text-muted-foreground">
                Add your email in profile data
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3">
              {profile.contact.phone ? (
                <motion.button
                  type="button"
                  onClick={() => setPhoneOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-4 py-2 rounded-lg font-display font-medium text-sm glass text-foreground hover:bg-secondary transition-all"
                >
                  Call Me
                </motion.button>
              ) : null}

              {profile.contact.socials.length > 0 && (
                <div className="flex items-center gap-3">
                  {profile.contact.socials.map((link) => {
                    const isExternal = /^https?:\/\//i.test(link.href);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        aria-label={link.label}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="w-10 h-10 rounded-lg glass flex items-center justify-center text-sm font-display font-medium text-muted-foreground hover:text-foreground hover-glow transition-colors"
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Dialog open={phoneOpen} onOpenChange={setPhoneOpen}>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle className="text-center">Phone Number</DialogTitle>
          <DialogDescription className="text-center">
            You can reach me here:
          </DialogDescription>
        </DialogHeader>
        <div className="text-center text-lg font-semibold text-foreground">
          {profile.contact.phone}
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default ContactSection;
