import { Briefcase, GraduationCap, Award, Bot } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Experience = () => {
  const { language } = useLanguage();

  const experiences = [
    {
      type: "education",
      title: language === "pt" ? "BASc, Engenharia Mecânica + PEY Co-op" : "BASc, Mechanical Engineering + PEY Co-op",
      organization: language === "pt" ? "Universidade de Toronto" : "University of Toronto",
      period: language === "pt" ? "Set. 2024 – Mai. 2028" : "Sep. 2024 – May 2028",
      description: language === "pt" ? "Dupla Menor em Negócios e Robótica & Mecatrônica" : "Double Minor in Business and Robotics & Mechatronics",
      highlights: language === "pt" 
        ? [
            "Mantendo média 3.48",
            "Foco em design mecânico, robótica e desenvolvimento de produtos",
            "Participante ativo em equipes de design de engenharia e competições"
          ]
        : [
            "Maintaining 3.48 GPA",
            "Focus on mechanical design, robotics, and product development",
            "Active participant in engineering design teams and competitions"
          ]
    },
    {
      type: "work",
      title: language === "pt" ? "Diretor de Divulgação" : "Director of Outreach",
      organization: "UTESCA, Toronto",
      period: language === "pt" ? "Setembro 2025 – Presente" : "September 2025 – Present",
      description: language === "pt" 
        ? "Liderando desenvolvimento de parcerias para a associação de consultoria de Engenharia da U of T"
        : "Leading partnership development for U of T Engineering's consulting association",
      highlights: language === "pt" 
        ? [
            "Pesquisei e identifiquei potenciais parceiros em prestigiosas consultorias com taxa de conversão de 80%",
            "Desenvolvi pipeline de automação para otimizar divulgação de parceiros, resultando em 20+ parceiros registrados"
          ]
        : [
            "Researched and identified potential partners in prestigious consulting firms with 80% conversion rate",
            "Developed automation pipeline to optimize partner outreach, resulting in 20+ partners registered"
          ]
    },
    {
      type: "research",
      title: language === "pt" ? "Co-Autor, Pesquisa em Ciência dos Materiais" : "Co-Author, Materials Science Research",
      organization: language === "pt" ? "Departamento de Ciência dos Materiais, U of T" : "Department of Materials Science, U of T",
      period: language === "pt" ? "Mai. – Jul. 2025" : "May – Jul. 2025",
      description: language === "pt" 
        ? "Pesquisa publicada sobre impressão 4D e materiais inteligentes para armazenamento de energia"
        : "Published research on 4D printing and smart materials for energy storage",
      highlights: language === "pt" 
        ? [
            "Artigo publicado com 20+ aplicações de impressão 4D para baterias de Li-Ion e supercapacitores",
            "Conduzi análise de estratégia de negócios e Avaliação de Ciclo de Vida de 350+ fontes",
            "Premiado com People's Choice Award no U of T Undergraduate Engineering Research Day"
          ]
        : [
            "Published paper with 20+ applications of 4D printing for Li-Ion batteries and supercapacitors",
            "Conducted business strategy analysis and Life Cycle Assessment from 350+ sources",
            "Awarded People's Choice Award at U of T Undergraduate Engineering Research Day"
          ]
    },
    {
      type: "work",
      title: language === "pt" ? "Estagiário" : "Intern",
      organization: "Cacau Show, São Paulo, Brazil",
      period: language === "pt" ? "Dez. 2021 – Jan. 2022" : "Dec. 2021 – Jan. 2022",
      description: language === "pt" 
        ? "Análise de dados e automação para a maior franquia de chocolate do Brasil"
        : "Data analysis and automation for Brazil's largest chocolate franchise",
      highlights: language === "pt" 
        ? [
            "Participei de análise de dados de publicidade e conversão, alcançando 10.000+ clientes",
            "Desenvolvi ferramenta Python para automatizar organização de dados, alcançando 98% de aumento de eficiência"
          ]
        : [
            "Participated in advertising and conversion data analysis, reaching 10,000+ customers",
            "Developed Python tool to automate data organization, achieving 98% efficiency increase"
          ]
    },
    {
      type: "extracurricular",
      title: language === "pt" ? "Líder de Equipe / Engenheiro Chefe" : "Team Leader / Chief Engineer",
      organization: language === "pt" ? "Olimpíada Brasileira de Robótica" : "Brazilian Robotics Olympics",
      period: "2021 – 2023",
      description: language === "pt" 
        ? "Liderei equipe de competição de robótica em categorias de simulação e prática"
        : "Led robotics competition team in both simulation and practical categories",
      highlights: language === "pt" 
        ? [
            "Projetei e programei código C# para categoria de simulação, alcançando posição final top 5",
            "Manufaturei PCB personalizado, circuitos e sistema de resgate de vítimas com visão computacional",
            "Responsável por detecção de obstáculos e seguimento de caminho para categoria prática"
          ]
        : [
            "Designed and programmed C# code for simulation category, achieving top 5 final position",
            "Manufactured custom PCB, circuitry, and victim rescue system with computer vision",
            "Responsible for obstacle detection and path-following for practical category"
          ]
    },
    {
      type: "education",
      title: language === "pt" ? "Programa de Verão Eduexplora" : "Eduexplora Summer Program",
      organization: "UC Berkeley",
      period: language === "pt" ? "Jul. 2022" : "Jul. 2022",
      description: language === "pt" 
        ? "Programa intensivo em Python, design thinking e STEM aplicado"
        : "Intensive program in Python, design thinking, and applied STEM",
      highlights: language === "pt" 
        ? [
            "Apliquei conceitos STEM a aplicações de neurociência",
            "Desenvolvi habilidades de liderança e design thinking"
          ]
        : [
            "Applied STEM concepts to neuroscience applications",
            "Developed leadership and design thinking skills"
          ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          {language === "pt" ? "Experiência" : "Experience"}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {language === "pt" 
            ? "Jornada acadêmica e desenvolvimento profissional"
            : "Academic journey and professional development"}
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp, index }: { exp: { type: string; title: string; organization: string; period: string; description: string; highlights: string[] }; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative pl-0 md:pl-20 transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className={`absolute left-6 top-6 w-4 h-4 rounded-full bg-accent border-4 border-background hidden md:block transition-all duration-500 ${
        isVisible ? 'scale-100' : 'scale-0'
      }`} style={{ transitionDelay: `${index * 100 + 200}ms` }} />
      
      <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:border-accent/30">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
            exp.type === 'education' ? 'bg-accent/10' : 
            exp.type === 'research' ? 'bg-green-500/10' :
            exp.type === 'extracurricular' ? 'bg-purple-500/10' : 'bg-primary/10'
          }`}>
            {exp.type === 'education' ? (
              <GraduationCap className="w-6 h-6 text-accent" />
            ) : exp.type === 'research' ? (
              <Award className="w-6 h-6 text-green-600" />
            ) : exp.type === 'extracurricular' ? (
              <Bot className="w-6 h-6 text-purple-600" />
            ) : (
              <Briefcase className="w-6 h-6 text-primary" />
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
              {exp.title}
            </h3>
            <p className="text-base md:text-lg font-semibold text-accent mb-2">
              {exp.organization}
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              {exp.period}
            </p>
            <p className="text-foreground mb-4">
              {exp.description}
            </p>
          </div>
        </div>
        
        <ul className="space-y-2 ml-0 md:ml-16">
          {exp.highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start text-sm text-muted-foreground">
              <span className="text-accent mr-2 mt-1 flex-shrink-0">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;