import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import uoftLogo from "@/assets/uoft-logo.png";
import { useLanguage } from "@/components/LanguageProvider";

// Import project images
import mie243Render from "@/assets/projects/mie243-final-render.png";
import catVisionCode from "@/assets/projects/catvision-code-screenshot.png";
import aps112Device from "@/assets/projects/aps112-device.png";
import dotEnergyCard from "@/assets/projects/dot-energy-card.jpg";
import coronaKillerThumbnail from "@/assets/projects/corona-killer-thumbnail.jpg";

const Hero = () => {
  const { t, language } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const defaultName = language === "pt" ? "JOÃO\nCAMPOS" : "JOHNNY\nCAMPOS";
  const [displayText, setDisplayText] = useState(defaultName);

  const projects = [
    {
      id: "01",
      title: t("project.mie243.title"),
      course: t("project.mie243.course"),
      route: "/projects/mie243",
      image: mie243Render,
    },
    {
      id: "02",
      title: t("project.catvision.title"),
      course: t("project.catvision.course"),
      route: "/projects/cat-vision",
      image: catVisionCode,
    },
    {
      id: "03",
      title: t("project.aps112.title"),
      course: t("project.aps112.course"),
      route: "/projects/aps112",
      image: aps112Device,
    },
    {
      id: "04",
      title: t("project.dotenergy.title"),
      course: t("project.dotenergy.course"),
      route: "/projects/dot-energy",
      image: dotEnergyCard,
    },
    {
      id: "05",
      title: t("project.coronakiller.title"),
      course: t("project.coronakiller.course"),
      route: "/projects/corona-killer",
      image: coronaKillerThumbnail,
    },
  ];
  
  const handleHover = (projectTitle: string | null) => {
    setIsAnimating(true);
    setTimeout(() => {
      setDisplayText(projectTitle ? projectTitle.toUpperCase() : defaultName);
      setIsAnimating(false);
    }, 150);
    setHoveredProject(projectTitle);
  };

  // Determine font size based on text length
  const getFontSizeClass = () => {
    if (!hoveredProject) return "text-6xl sm:text-7xl md:text-8xl lg:text-9xl";
    const length = hoveredProject.length;
    if (length > 20) return "text-4xl sm:text-5xl md:text-6xl lg:text-7xl";
    if (length > 15) return "text-5xl sm:text-6xl md:text-7xl lg:text-8xl";
    return "text-6xl sm:text-7xl md:text-8xl lg:text-9xl";
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-primary flex flex-col"
    >
      {/* Main content area */}
      <div className="flex-1 container mx-auto px-4 pt-24 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 h-full">
          {/* Left side - Large name with fixed height container */}
          <div className="flex items-center overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
            <h1 
              className={`${getFontSizeClass()} font-bold text-primary-foreground leading-[0.9] tracking-tight whitespace-pre-line transition-all duration-300 transform ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}
            >
              {displayText}
            </h1>
          </div>
          
          {/* Right side - Info */}
          <div className="flex flex-col justify-center lg:items-end lg:text-right space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent uppercase tracking-widest">
                {t("hero.title")}
              </p>
              <div className="flex items-center gap-3 lg:flex-row-reverse">
                <img 
                  src={uoftLogo} 
                  alt="University of Toronto Logo" 
                  className="h-10 w-10 object-contain dark:invert"
                />
                <p className="text-primary-foreground/90 text-xl font-bold max-w-md">
                  {t("hero.university")}
                </p>
              </div>
            </div>
            
            <p className="text-primary-foreground/70 max-w-md text-base">
              {t("hero.description")}
            </p>
            
            <a href="/Joao_D_C_Carvalho-Resume.pdf" download>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm font-semibold w-fit dark:bg-[#1a365d] dark:border-[#1a365d] dark:text-accent dark:hover:bg-accent dark:hover:text-[#1a365d]"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("hero.download")}
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Project cards row */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-5 gap-4 w-full">
          {projects.map((project) => {
            const isHovered = hoveredProject === project.title;
            const hasHover = hoveredProject !== null;
            
            return (
              <Link 
                key={project.id}
                to={project.route}
                className={`group relative transition-all duration-500 ease-out ${
                  hasHover && !isHovered 
                    ? 'blur-sm scale-90 opacity-70' 
                    : 'blur-0 scale-100 opacity-100'
                }`}
                onMouseEnter={() => handleHover(project.title)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="w-full h-[20vh] overflow-hidden rounded-lg bg-muted/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={`mt-3 flex items-center justify-between transition-opacity duration-300 ${hasHover && !isHovered ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-primary-foreground/50 text-xs font-mono">[{project.id}]</span>
                    <span className="text-primary-foreground/70 text-xs truncate">{project.course}</span>
                  </div>
                  <span className="text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    {t("hero.view")} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;