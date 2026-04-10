const Footer = () => (
  <footer className="relative py-8">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-gradient font-display font-medium">Kavindu Thareen</span>. All rights reserved.
      </p>
      <p className="text-sm text-muted-foreground">
        Designed & Built with ♥ and caffeine
      </p>
    </div>
  </footer>
);

export default Footer;
