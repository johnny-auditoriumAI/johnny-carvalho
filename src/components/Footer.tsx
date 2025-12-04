import { Mail, Linkedin, Github } from "lucide-react";
import signature from "@/assets/signature.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Johnny Campos</h3>
              <p className="text-primary-foreground/80">
                Engineering Student at the University of Toronto, passionate about 
                innovation and technical excellence.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Experience
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-4 mb-6">
                <a 
                  href="mailto:johnny.carvalho@mail.utoronto.ca"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/joao-de-campos-carvalho-32a269334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
                <a 
                  href="https://github.com/johnny-carp0s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
              </div>
              <img 
                src={signature} 
                alt="Johnny Campos signature" 
                className="h-16 w-auto brightness-0 invert opacity-70"
              />
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60">
            <p>© {currentYear} Johnny Campos. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
