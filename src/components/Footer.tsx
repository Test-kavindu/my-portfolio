const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kavindu Thareen. All rights reserved.
      </p>
      <p className="text-sm text-muted-foreground">
        Designed & Built with ♥
      </p>
    </div>
  </footer>
);

export default Footer;
