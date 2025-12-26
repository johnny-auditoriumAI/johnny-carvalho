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
    "hero.title": "Engineering Student",
    "hero.university": "University of Toronto",
    "hero.description": "Focused on engineering design, technology innovation, and data-driven problem solving",
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
    "about.p1": "I'm a third-year Engineering Science student at the University of Toronto, specializing in Robotics. My academic journey has equipped me with a strong foundation in mathematics, physics, and computational thinking.",
    "about.p2": "I'm passionate about building things—whether it's robotics systems, software applications, or innovative product concepts. I thrive at the intersection of engineering and business, where technical solutions meet real-world market needs.",
    "about.p3": "My goal is to pursue a career in product development, venture capital, or management consulting, where I can leverage my technical background to drive innovation and create value.",
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
    
    // Experience items
    "exp.uoft.title": "Engineering Science",
    "exp.uoft.org": "University of Toronto",
    "exp.uoft.period": "2022 - Present",
    "exp.uoft.desc": "Pursuing a degree in Engineering Science with a specialization in Robotics Engineering. Focused on advanced mathematics, physics, and computational methods.",
    "exp.uoft.h1": "GPA: 3.5/4.0",
    "exp.uoft.h2": "Dean's List Scholar",
    "exp.uoft.h3": "Robotics Specialization",
    
    "exp.research.title": "Research Assistant",
    "exp.research.org": "University of Toronto",
    "exp.research.period": "Summer 2024",
    "exp.research.desc": "Contributed to research in robotics and automation, focusing on computer vision applications and machine learning algorithms.",
    "exp.research.h1": "Computer Vision Research",
    "exp.research.h2": "Machine Learning Applications",
    "exp.research.h3": "Published Research Paper",
    
    "exp.intern.title": "Engineering Intern",
    "exp.intern.org": "Tech Company",
    "exp.intern.period": "Summer 2023",
    "exp.intern.desc": "Worked on product development and prototyping, gaining hands-on experience in the engineering design process.",
    "exp.intern.h1": "Product Development",
    "exp.intern.h2": "CAD Design & Prototyping",
    "exp.intern.h3": "Cross-functional Team Collaboration",
    
    "exp.club.title": "Engineering Club Lead",
    "exp.club.org": "University of Toronto",
    "exp.club.period": "2023 - Present",
    "exp.club.desc": "Leading a team of engineering students in various technical projects and competitions, fostering innovation and teamwork.",
    "exp.club.h1": "Team Leadership",
    "exp.club.h2": "Project Management",
    "exp.club.h3": "Competition Participation",
    
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
    "hero.title": "Estudante de Engenharia",
    "hero.university": "Universidade de Toronto",
    "hero.description": "Focado em design de engenharia, inovação tecnológica e resolução de problemas orientada por dados",
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
    "about.p1": "Sou estudante do terceiro ano de Ciências da Engenharia na Universidade de Toronto, com especialização em Robótica. Minha jornada acadêmica me proporcionou uma base sólida em matemática, física e pensamento computacional.",
    "about.p2": "Sou apaixonado por construir coisas—seja sistemas robóticos, aplicações de software ou conceitos inovadores de produtos. Prospero na interseção entre engenharia e negócios, onde soluções técnicas encontram necessidades reais do mercado.",
    "about.p3": "Meu objetivo é seguir uma carreira em desenvolvimento de produtos, capital de risco ou consultoria de gestão, onde posso aproveitar minha formação técnica para impulsionar a inovação e criar valor.",
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
    
    // Experience items
    "exp.uoft.title": "Ciências da Engenharia",
    "exp.uoft.org": "Universidade de Toronto",
    "exp.uoft.period": "2022 - Presente",
    "exp.uoft.desc": "Cursando graduação em Ciências da Engenharia com especialização em Engenharia Robótica. Focado em matemática avançada, física e métodos computacionais.",
    "exp.uoft.h1": "Média: 3.5/4.0",
    "exp.uoft.h2": "Lista do Reitor",
    "exp.uoft.h3": "Especialização em Robótica",
    
    "exp.research.title": "Assistente de Pesquisa",
    "exp.research.org": "Universidade de Toronto",
    "exp.research.period": "Verão 2024",
    "exp.research.desc": "Contribuí para pesquisas em robótica e automação, focando em aplicações de visão computacional e algoritmos de aprendizado de máquina.",
    "exp.research.h1": "Pesquisa em Visão Computacional",
    "exp.research.h2": "Aplicações de Machine Learning",
    "exp.research.h3": "Artigo de Pesquisa Publicado",
    
    "exp.intern.title": "Estagiário de Engenharia",
    "exp.intern.org": "Empresa de Tecnologia",
    "exp.intern.period": "Verão 2023",
    "exp.intern.desc": "Trabalhei em desenvolvimento de produtos e prototipagem, ganhando experiência prática no processo de design de engenharia.",
    "exp.intern.h1": "Desenvolvimento de Produtos",
    "exp.intern.h2": "Design CAD & Prototipagem",
    "exp.intern.h3": "Colaboração em Equipe Multifuncional",
    
    "exp.club.title": "Líder de Clube de Engenharia",
    "exp.club.org": "Universidade de Toronto",
    "exp.club.period": "2023 - Presente",
    "exp.club.desc": "Liderando uma equipe de estudantes de engenharia em vários projetos técnicos e competições, fomentando inovação e trabalho em equipe.",
    "exp.club.h1": "Liderança de Equipe",
    "exp.club.h2": "Gerenciamento de Projetos",
    "exp.club.h3": "Participação em Competições",
    
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
