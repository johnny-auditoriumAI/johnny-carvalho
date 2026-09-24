import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    
    // Hero
    "hero.name": "JOHNNY\nCAMPOS",
    "hero.title": "Mechanical Engineering — Seeking PEY Co-op 2027",
    "hero.university": "University of Toronto",
    "hero.description": "I build products and robots. U of T mechanical engineering (Robotics & Mechatronics + Engineering Business minors), targeting a 12–16 month PEY co-op in startup product/ops or robotics",
    "hero.download": "Download Resume",
    "hero.view": "View",
    
    // Projects in Hero
    "project.mie243.title": "High-Speed Camera Robot",
    "project.mie243.course": "MIE243 Design Project",
    "project.catvision.title": "Cat Vision",
    "project.catvision.course": "Personal Project",
    "project.aps112.title": "Smart Sleep Monitor",
    "project.aps112.course": "APS112 • UHN Partnership",
    "project.dotenergy.title": "DOT Energy Analysis",
    "project.dotenergy.course": "JRE410 • Industry Analysis",
    "project.coronakiller.title": "Corona Killer",
    "project.coronakiller.course": "Personal Project • Arduino",
    
    // About
    "about.title": "About Me",
    "about.featured": "Featured Projects:",
    "about.project1": "MIE243 Hexapod Robot - High-speed camera positioning system",
    "about.project2": "APS112 Smart Sleep Monitor - Healthcare IoT device for UHN",
    "about.project3": "Cat Vision - Computer vision for pet monitoring",
    
    // Projects Section
    "projects.title": "Featured Projects",
    "projects.description": "A selection of my engineering and technical projects, showcasing problem-solving and innovation.",
    "projects.learnMore": "Learn More",
    
    // Experience
    "experience.title": "Experience & Education",
    "experience.description": "My academic journey and professional experiences that have shaped my engineering perspective.",
    
    
    
    
    
    // Skills
    "skills.title": "Skills & Expertise",
    "skills.description": "Technical competencies and tools I've developed through academic projects and professional experiences.",
    "skills.programming": "Programming",
    "skills.engineering": "Engineering",
    "skills.tools": "Tools & Software",
    "skills.soft": "Soft Skills",
    
    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "I'm always open to discussing new opportunities, collaborations, or just having a chat about engineering and technology.",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.resume": "Resume",
    "contact.downloadResume": "Download Resume",
    "contact.sendMessage": "Send a Message",
    "contact.name": "Name",
    "contact.emailLabel": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    
    // Footer
    "footer.description": "Engineering Student at the University of Toronto, passionate about innovation and technical excellence.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.copyright": "© 2025 Joao De Campos Carvalho. All rights reserved.",
    
    // Common project page elements
    "common.backToProjects": "Back to Projects",
    "common.projectOverview": "Project Overview",
    "common.designProcess": "Design Process",
    "common.keyContributions": "Key Contributions",
    "common.technologiesTools": "Technologies & Tools",
    "common.reflection": "Reflection",
    "common.downloadPdf": "Download PDF",
    "common.viewOnGithub": "View on GitHub",
    "common.viewRepository": "View Repository",
    "common.exploreCode": "Explore the Code",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    
    // Hero
    "hero.name": "JOÃO\nCAMPOS",
    "hero.title": "Engenharia Mecânica — Buscando estágio PEY 2027",
    "hero.university": "Universidade de Toronto",
    "hero.description": "Construo produtos e robôs. Engenharia mecânica na U of T (ênfases em Robótica & Mecatrônica e Negócios em Engenharia), buscando um co-op PEY de 12–16 meses em produto/operações de startup ou robótica",
    "hero.download": "Baixar Currículo",
    "hero.view": "Ver",
    
    // Projects in Hero
    "project.mie243.title": "Robô de Câmera de Alta Velocidade",
    "project.mie243.course": "Projeto de Design MIE243",
    "project.catvision.title": "Cat Vision",
    "project.catvision.course": "Projeto Pessoal",
    "project.aps112.title": "Monitor de Sono Inteligente",
    "project.aps112.course": "APS112 • Parceria UHN",
    "project.dotenergy.title": "Análise DOT Energy",
    "project.dotenergy.course": "JRE410 • Análise de Indústria",
    "project.coronakiller.title": "Corona Killer",
    "project.coronakiller.course": "Projeto Pessoal • Arduino",
    
    // About
    "about.title": "Sobre Mim",
    "about.featured": "Projetos em Destaque:",
    "about.project1": "Robô Hexápode MIE243 - Sistema de posicionamento de câmera de alta velocidade",
    "about.project2": "Monitor de Sono Inteligente APS112 - Dispositivo IoT para saúde do UHN",
    "about.project3": "Cat Vision - Visão computacional para monitoramento de animais",
    
    // Projects Section
    "projects.title": "Projetos em Destaque",
    "projects.description": "Uma seleção dos meus projetos de engenharia e técnicos, demonstrando resolução de problemas e inovação.",
    "projects.learnMore": "Saiba Mais",
    
    // Experience
    "experience.title": "Experiência & Educação",
    "experience.description": "Minha jornada acadêmica e experiências profissionais que moldaram minha perspectiva de engenharia.",
    
    
    
    
    
    // Skills
    "skills.title": "Habilidades & Especialidades",
    "skills.description": "Competências técnicas e ferramentas que desenvolvi através de projetos acadêmicos e experiências profissionais.",
    "skills.programming": "Programação",
    "skills.engineering": "Engenharia",
    "skills.tools": "Ferramentas & Software",
    "skills.soft": "Soft Skills",
    
    // Contact
    "contact.title": "Entre em Contato",
    "contact.description": "Estou sempre aberto a discutir novas oportunidades, colaborações ou simplesmente conversar sobre engenharia e tecnologia.",
    "contact.info": "Informações de Contato",
    "contact.email": "E-mail",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.resume": "Currículo",
    "contact.downloadResume": "Baixar Currículo",
    "contact.sendMessage": "Enviar uma Mensagem",
    "contact.name": "Nome",
    "contact.emailLabel": "E-mail",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    
    // Footer
    "footer.description": "Estudante de Engenharia na Universidade de Toronto, apaixonado por inovação e excelência técnica.",
    "footer.quickLinks": "Links Rápidos",
    "footer.connect": "Conecte-se",
    "footer.copyright": "© 2025 Joao De Campos Carvalho. Todos os direitos reservados.",
    
    // Common project page elements
    "common.backToProjects": "Voltar aos Projetos",
    "common.projectOverview": "Visão Geral do Projeto",
    "common.designProcess": "Processo de Design",
    "common.keyContributions": "Principais Contribuições",
    "common.technologiesTools": "Tecnologias & Ferramentas",
    "common.reflection": "Reflexão",
    "common.downloadPdf": "Baixar PDF",
    "common.viewOnGithub": "Ver no GitHub",
    "common.viewRepository": "Ver Repositório",
    "common.exploreCode": "Explorar o Código",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
