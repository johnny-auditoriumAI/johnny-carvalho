import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Cat, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/LanguageProvider";

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      icon: Camera,
      title: t("project.mie243.title"),
      course: t("project.mie243.course"),
      description: language === "pt" 
        ? "Braço robótico de câmera multi-eixo para cinematografia esportiva dinâmica"
        : "Multi-axis robotic camera arm for dynamic sports cinematography",
      details: language === "pt" 
        ? [
            "Projetei braço robótico de longo alcance para movimento suave e repetível",
            "Design de caixa de engrenagens planetárias personalizada para requisitos específicos de juntas",
            "Análise de torque e movimento para desempenho ideal",
            "Integração de base hexápode com juntas acionadas por motor de passo"
          ]
        : [
            "Designed long-reach robotic arm for smooth, repeatable motion",
            "Custom planetary gearbox design for joint-specific requirements",
            "Torque and motion analysis for optimal performance",
            "Hexapod base integration with stepper-motor-driven joints"
          ],
      technologies: ["SolidWorks", language === "pt" ? "Controle de Movimento" : "Motion Control", language === "pt" ? "Sistemas de Engrenagem" : "Gear Systems", language === "pt" ? "Design Mecânico" : "Mechanical Design"],
      impact: language === "pt" ? "Fluxo de trabalho de engenharia focado em robótica" : "Robotics-focused engineering workflow",
      route: "/projects/mie243",
      bgColor: "bg-primary/10 hover:bg-primary/15",
      accentColor: "bg-primary/20",
      borderColor: "border-primary/20 hover:border-primary/40"
    },
    {
      icon: Cat,
      title: t("project.catvision.title"),
      course: t("project.catvision.course"),
      description: language === "pt" 
        ? "Sistema de visão computacional para monitoramento e rastreamento de comportamento de animais"
        : "Computer vision system for pet monitoring and behavior tracking",
      details: language === "pt" 
        ? [
            "Detecção de animais em tempo real usando algoritmos de visão computacional",
            "Integração hardware-software para implantação prática",
            "Abordagem de design centrado no usuário para donos de animais",
            "Projeto independente do conceito à apresentação pública"
          ]
        : [
            "Real-time pet detection using computer vision algorithms",
            "Hardware-software integration for practical deployment",
            "User-centered design approach for pet owners",
            "Independent project from concept to public presentation"
          ],
      technologies: ["Python", "PyTorch", "OpenCV", language === "pt" ? "Visão Computacional" : "Computer Vision"],
      impact: language === "pt" ? "Desenvolvimento de produto empreendedor" : "Entrepreneurial product development",
      route: "/projects/cat-vision",
      bgColor: "bg-accent/10 hover:bg-accent/15",
      accentColor: "bg-accent/20",
      borderColor: "border-accent/20 hover:border-accent/40"
    },
    {
      icon: Activity,
      title: language === "pt" ? "Dispositivo Inteligente de Monitoramento de Sono" : "Smart Sleep Monitoring Device",
      course: t("project.aps112.course"),
      description: language === "pt" 
        ? "Sistema de monitoramento de sono para adultos aposentados"
        : "Healthcare sleep monitoring system for retired adults",
      details: language === "pt" 
        ? [
            "Parceria com University Health Network (UHN)",
            "Requisitos funcionais e análise de stakeholders",
            "Conceito de monitoramento vestível e integrado a tapete",
            "Design centrado no usuário para acessibilidade e facilidade de uso"
          ]
        : [
            "Partnership with University Health Network (UHN)",
            "Functional requirements and stakeholder analysis",
            "Wearable and mat-integrated monitoring concept",
            "User-centered design for accessibility and ease of use"
          ],
      technologies: ["Arduino", language === "pt" ? "Sensores" : "Sensors", language === "pt" ? "Análise de Dados" : "Data Analysis", language === "pt" ? "Tecnologia de Saúde" : "Healthcare Tech"],
      impact: language === "pt" ? "Experiência real de design de saúde" : "Real-world healthcare design experience",
      route: "/projects/aps112",
      bgColor: "bg-muted/50 hover:bg-muted/70",
      accentColor: "bg-muted-foreground/10",
      borderColor: "border-muted-foreground/20 hover:border-muted-foreground/40"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          {language === "pt" ? "Projetos" : "Projects"}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {language === "pt" 
            ? "Uma seleção de projetos de engenharia demonstrando design, análise e inovação"
            : "A selection of engineering projects showcasing design, analysis, and innovation"}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Link to={project.route} key={index} className="block">
              <Card 
                className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer ${project.bgColor} ${project.borderColor}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${project.accentColor} flex items-center justify-center mb-4 transition-colors`}>
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs mb-2">{project.course}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2 mt-1">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs font-semibold text-primary mb-2">
                      {language === "pt" ? "Tecnologias:" : "Technologies:"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-sm font-medium text-accent">
                      ✓ {project.impact}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      {language === "pt" ? "Saiba Mais" : "Learn More"}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;