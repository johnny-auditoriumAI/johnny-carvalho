import { Box, Code, Wrench, Users } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const Skills = () => {
  const { language } = useLanguage();

  const skillCategories = [
    {
      icon: Box,
      title: language === "pt" ? "Engenharia & Design" : "Engineering & Design",
      skills: language === "pt" 
        ? [
            "CAD (SolidWorks, Fusion 360)",
            "Design Mecânico",
            "Prototipagem & Fabricação",
            "Desenho Técnico (GD&T)",
            "Análise de Elementos Finitos (FEA)",
            "Design para Manufatura"
          ]
        : [
            "CAD (SolidWorks, Fusion 360)",
            "Mechanical Design",
            "Prototyping & Fabrication",
            "Technical Drawing (GD&T)",
            "Finite Element Analysis (FEA)",
            "Design for Manufacturing"
          ]
    },
    {
      icon: Code,
      title: language === "pt" ? "Programação & Software" : "Programming & Software",
      skills: language === "pt" 
        ? [
            "Python (NumPy, Pandas, Matplotlib)",
            "MATLAB & Simulink",
            "C/C++",
            "JavaScript / TypeScript",
            "Controle de Versão (Git)",
            "Desenvolvimento Web Básico"
          ]
        : [
            "Python (NumPy, Pandas, Matplotlib)",
            "MATLAB & Simulink",
            "C/C++",
            "JavaScript / TypeScript",
            "Version Control (Git)",
            "Basic Web Development"
          ]
    },
    {
      icon: Wrench,
      title: language === "pt" ? "Ferramentas & Técnico" : "Tools & Technical",
      skills: language === "pt" 
        ? [
            "Arduino & Sistemas Embarcados",
            "Sensores & Aquisição de Dados",
            "Eletrônica & Design de Circuitos",
            "Impressão 3D & Manufatura Aditiva",
            "Equipamentos de Oficina",
            "Testes & Validação"
          ]
        : [
            "Arduino & Embedded Systems",
            "Sensors & Data Acquisition",
            "Electronics & Circuit Design",
            "3D Printing & Additive Manufacturing",
            "Machine Shop Equipment",
            "Testing & Validation"
          ]
    },
    {
      icon: Users,
      title: language === "pt" ? "Habilidades Profissionais" : "Professional Skills",
      skills: language === "pt" 
        ? [
            "Liderança & Gestão de Equipes",
            "Comunicação Técnica",
            "Gerenciamento de Projetos",
            "Resolução de Problemas & Pensamento Crítico",
            "Colaboração & Trabalho em Equipe",
            "Apresentação & Documentação"
          ]
        : [
            "Leadership & Team Management",
            "Technical Communication",
            "Project Management",
            "Problem Solving & Critical Thinking",
            "Collaboration & Teamwork",
            "Presentation & Documentation"
          ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          {language === "pt" ? "Habilidades & Especialidades" : "Skills & Expertise"}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {language === "pt" 
            ? "Um kit de ferramentas abrangente para inovação em engenharia e resolução de problemas"
            : "A comprehensive toolkit for engineering innovation and problem-solving"}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:border-accent/30"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center p-3 bg-secondary/50 rounded-lg hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent mr-3 group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-medium text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;