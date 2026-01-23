import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Linkedin } from "lucide-react";
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
  
  // Get the default name based on current language
  const getDefaultName = () => language === "pt" ? "JOÃO\nCAMPOS" : "JOHNNY\nCAMPOS";
  // Display text updates when not hovering a project
  const displayText = hoveredProject ? hoveredProject.toUpperCase() : getDefaultName();

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
      setIsAnimating(false);
    }, 150);
    setHoveredProject(projectTitle);
  };

  // Determine font size based on text length
  const getFontSizeClass = () => {
    if (!hoveredProject) return "text-4xl sm:text-5xl md:text-7xl lg:text-9xl";
    const length = hoveredProject.length;
    if (length > 20) return "text-2xl sm:text-3xl md:text-5xl lg:text-7xl";
    if (length > 15) return "text-3xl sm:text-4xl md:text-6xl lg:text-8xl";
    return "text-4xl sm:text-5xl md:text-7xl lg:text-9xl";
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-accent dark:bg-[hsl(214,100%,18%)] flex flex-col"
    >
      {/* Main content area */}
      <div className="flex-1 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-6 sm:pb-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 h-full">
          {/* Left side - Large name with fixed height container */}
          <div className="flex items-center justify-center lg:justify-start overflow-hidden h-[120px] sm:h-[180px] md:h-[250px] lg:h-[350px]">
            <h1 
              className={`${getFontSizeClass()} font-bold text-[hsl(214,100%,18%)] dark:text-white leading-[0.9] tracking-tight whitespace-pre-line transition-all duration-300 transform text-center lg:text-left ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}
            >
              {displayText}
            </h1>
          </div>
          
          {/* Right side - Info */}
          <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-medium text-[hsl(214,100%,18%)] dark:text-accent uppercase tracking-widest">
                {t("hero.title")}
              </p>
              <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-end lg:flex-row-reverse">
                <img 
                  src={uoftLogo} 
                  alt="University of Toronto Logo" 
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain dark:invert"
                />
                <p className="text-[hsl(214,100%,18%)]/90 dark:text-white/90 text-base sm:text-lg md:text-xl font-bold max-w-md">
                  {t("hero.university")}
                </p>
              </div>
            </div>
            
            <p className="text-[hsl(214,100%,18%)]/70 dark:text-white/70 max-w-md text-sm sm:text-base px-4 lg:px-0">
              {t("hero.description")}
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              <a href="/Joao_D_C_Carvalho-Resume.pdf" download>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-[hsl(214,100%,18%)] text-[hsl(214,100%,18%)] hover:bg-[hsl(214,100%,18%)] hover:text-accent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[hsl(214,100%,18%)] backdrop-blur-sm font-semibold text-sm sm:text-base"
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {t("hero.download")}
                </Button>
              </a>
              <a 
                href="https://www.linkedin.com/in/joao-de-campos-carvalho-32a269334/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-[hsl(214,100%,18%)] text-[hsl(214,100%,18%)] hover:bg-[hsl(214,100%,18%)] hover:text-accent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[hsl(214,100%,18%)] backdrop-blur-sm font-semibold text-sm sm:text-base"
                >
                  <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project cards row */}
      <div className="container mx-auto px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
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
                <div className="w-full h-[15vh] sm:h-[18vh] md:h-[20vh] overflow-hidden rounded-lg bg-muted/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={`mt-2 sm:mt-3 flex items-center justify-between transition-opacity duration-300 ${hasHover && !isHovered ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="flex items-center gap-1 sm:gap-2 overflow-hidden">
                    <span className="text-[hsl(214,100%,18%)]/50 dark:text-white/50 text-[10px] sm:text-xs font-mono flex-shrink-0">[{project.id}]</span>
                    <span className="text-[hsl(214,100%,18%)]/70 dark:text-white/70 text-[10px] sm:text-xs truncate">{project.course}</span>
                  </div>
                  <span className="text-[hsl(214,100%,18%)] dark:text-accent text-[10px] sm:text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity items-center gap-1 hidden sm:flex">
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