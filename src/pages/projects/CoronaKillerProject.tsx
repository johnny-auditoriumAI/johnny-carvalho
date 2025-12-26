import { ArrowLeft, Zap, Code, Shield, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

import coronaKiller1 from "@/assets/projects/corona-killer-1.png";
import coronaKiller2 from "@/assets/projects/corona-killer-2.png";
import coronaKiller3 from "@/assets/projects/corona-killer-3.png";

const CoronaKillerProject = () => {
  const { language, t } = useLanguage();

  const content = {
    en: {
      badge: "Personal Project • Arduino",
      title: '"Corona Killer" UV Disinfectant Station',
      subtitle: "A time-based controller prototype for a UV light-emitting cabinet designed for grocery disinfection during the COVID-19 pandemic.",
      period: "Jun 2021 - Aug 2021",
      overview: "During the height of the COVID-19 pandemic, I designed and built a UV disinfection station to help sanitize groceries and household items. The project combined hardware prototyping with embedded programming to create a practical solution for everyday health concerns.",
      demoVideo: "Demo Video",
      disinfectionRate: "Virus Disinfection Rate",
      buildProcess: "Build Process",
      technicalTitle: "Technical Implementation",
      technicalDesc: "The UV disinfection station uses ultraviolet-C (UVC) light to eliminate viruses and bacteria on surfaces. I designed a time-based controller system that ensures proper exposure duration for effective disinfection while maintaining user safety.",
      keyFeatures: "Key Features",
      feature1Title: "Arduino-Based Controller",
      feature1Desc: "Developed C++ code to control timing sequences and safety interlocks for the UV light system.",
      feature2Title: "Reflective Interior",
      feature2Desc: "Lined the cabinet interior with reflective material to maximize UV light distribution and coverage.",
      feature3Title: "Timed Exposure System",
      feature3Desc: "Implemented precise timing controls to ensure optimal disinfection cycles for various item sizes.",
      feature4Title: "Safety Features",
      feature4Desc: "Integrated door sensors and automatic shutoff to prevent UV exposure to users.",
      developmentTitle: "Development Process",
      developmentDesc: "The embedded software was developed in C++ for the Arduino microcontroller. The code manages the timing sequences, monitors the door sensor state, and controls the UV lamp relay system. This project strengthened my skills in embedded systems programming and hardware-software integration.",
      reflection: "This project demonstrated my ability to identify real-world problems and develop practical engineering solutions. Working through the pandemic, I was motivated to contribute something meaningful to my family's safety. The project strengthened my skills in embedded programming, electrical systems, and rapid prototyping—all while solving a genuine problem in my community.",
      caption1: "Reflective interior lining installation",
      caption2: "Electronics integration and wiring",
      caption3: "Arduino microcontroller programming",
    },
    pt: {
      badge: "Projeto Pessoal • Arduino",
      title: 'Estação de Desinfecção UV "Corona Killer"',
      subtitle: "Um protótipo de controlador baseado em tempo para um gabinete emissor de luz UV projetado para desinfecção de compras durante a pandemia de COVID-19.",
      period: "Jun 2021 - Ago 2021",
      overview: "Durante o auge da pandemia de COVID-19, projetei e construí uma estação de desinfecção UV para ajudar a higienizar compras e itens domésticos. O projeto combinou prototipagem de hardware com programação embarcada para criar uma solução prática para preocupações cotidianas de saúde.",
      demoVideo: "Vídeo de Demonstração",
      disinfectionRate: "Taxa de Desinfecção de Vírus",
      buildProcess: "Processo de Construção",
      technicalTitle: "Implementação Técnica",
      technicalDesc: "A estação de desinfecção UV usa luz ultravioleta-C (UVC) para eliminar vírus e bactérias em superfícies. Projetei um sistema controlador baseado em tempo que garante duração de exposição adequada para desinfecção eficaz enquanto mantém a segurança do usuário.",
      keyFeatures: "Principais Funcionalidades",
      feature1Title: "Controlador Baseado em Arduino",
      feature1Desc: "Desenvolvi código C++ para controlar sequências de temporização e intertravamentos de segurança para o sistema de luz UV.",
      feature2Title: "Interior Reflexivo",
      feature2Desc: "Revesti o interior do gabinete com material reflexivo para maximizar a distribuição e cobertura da luz UV.",
      feature3Title: "Sistema de Exposição Temporizada",
      feature3Desc: "Implementei controles de temporização precisos para garantir ciclos de desinfecção ideais para itens de vários tamanhos.",
      feature4Title: "Recursos de Segurança",
      feature4Desc: "Integrei sensores de porta e desligamento automático para prevenir exposição UV aos usuários.",
      developmentTitle: "Processo de Desenvolvimento",
      developmentDesc: "O software embarcado foi desenvolvido em C++ para o microcontrolador Arduino. O código gerencia as sequências de temporização, monitora o estado do sensor da porta e controla o sistema de relé da lâmpada UV. Este projeto fortaleceu minhas habilidades em programação de sistemas embarcados e integração hardware-software.",
      reflection: "Este projeto demonstrou minha capacidade de identificar problemas do mundo real e desenvolver soluções de engenharia práticas. Trabalhando durante a pandemia, fui motivado a contribuir com algo significativo para a segurança da minha família. O projeto fortaleceu minhas habilidades em programação embarcada, sistemas elétricos e prototipagem rápida—tudo isso resolvendo um problema genuíno na minha comunidade.",
      caption1: "Instalação do revestimento interior reflexivo",
      caption2: "Integração de eletrônicos e fiação",
      caption3: "Programação do microcontrolador Arduino",
    }
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Link to="/#projects">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("common.backToProjects")}
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-4">{c.badge}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              {c.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {c.subtitle}
            </p>
            <p className="text-sm text-muted-foreground mt-4">{c.period}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-accent" />
                {t("common.projectOverview")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {c.overview}
              </p>
            </div>

            {/* YouTube Video Embed */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-accent" />
                {c.demoVideo}
              </h2>
              <div className="rounded-xl shadow-lg border border-border overflow-hidden">
                <div className="relative pb-[56.25%] h-0">
                  <iframe 
                    src="https://www.youtube.com/embed/QiLc-XQkTQo"
                    title="Corona Killer UV Disinfectant Station Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Key Achievement */}
            <div className="mb-16">
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                <p className="text-5xl font-bold text-green-600 mb-2">99%</p>
                <p className="text-lg text-muted-foreground">{c.disinfectionRate}</p>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">{c.buildProcess}</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                  <img 
                    src={coronaKiller1} 
                    alt={c.caption1}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-card">
                    <p className="text-sm text-muted-foreground">{c.caption1}</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                  <img 
                    src={coronaKiller2} 
                    alt={c.caption2}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-card">
                    <p className="text-sm text-muted-foreground">{c.caption2}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={coronaKiller3} 
                  alt={c.caption3}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{c.caption3}</p>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-accent" />
                {c.technicalTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {c.technicalDesc}
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-4">{c.keyFeatures}</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.feature1Title}</p>
                  <p className="text-sm text-muted-foreground">{c.feature1Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.feature2Title}</p>
                  <p className="text-sm text-muted-foreground">{c.feature2Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.feature3Title}</p>
                  <p className="text-sm text-muted-foreground">{c.feature3Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.feature4Title}</p>
                  <p className="text-sm text-muted-foreground">{c.feature4Desc}</p>
                </div>
              </div>
            </div>

            {/* Code Section */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-accent" />
                {c.developmentTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {c.developmentDesc}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-primary mb-4">{t("common.technologiesTools")}</h3>
              <div className="flex flex-wrap gap-2">
                {["Arduino", "C++", "Embedded Systems", "UV-C Technology", "Electronics", "Hardware Prototyping", "Circuit Design", "Safety Systems"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Reflection */}
            <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-4">{t("common.reflection")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {c.reflection}
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoronaKillerProject;