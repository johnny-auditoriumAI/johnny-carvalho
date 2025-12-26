import { ArrowLeft, Cat, Github, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import catVision1 from "@/assets/projects/catvision-detection1.png";
import catVision2 from "@/assets/projects/catvision-detection2.png";

const CatVisionProject = () => {
  const { language, t } = useLanguage();

  const content = {
    en: {
      badge: "Personal Project",
      title: "Cat Vision",
      subtitle: "A computer vision system for pet monitoring, showcasing user-centered product design and independent problem-solving with an entrepreneurial mindset.",
      overview: "This section highlights a personal project where I explored user-centered product design and independent problem-solving. It represents my entrepreneurial mindset and my interest in developing practical, creative solutions outside the classroom.",
      storyTitle: "The Story",
      story1: "Cat Vision was born from a real problem at home. My family had been dealing with stray cats invading our lawn and destroying outdoor furniture, a frustrating issue with no clear solution. My dad tasked me with finding a way to address it, and I saw it as an opportunity to apply my technical skills to a meaningful, personal challenge.",
      story2: "I built Cat Vision to analyze cat appearances by employing a computer vision model using PyTorch and OpenCV, integrated with our home security camera feed. The system detects and tracks cats in real-time, allowing me to compile detection data and identify patterns in when the strays would appear. With this predictive insight, we could take appropriate measures, adjusting schedules, deploying deterrents, to effectively solve the problem.",
      story3: "Working independently on this project allowed me to build both the technical system and the surrounding narrative, critical skills for entrepreneurship and product development. What started as a family challenge evolved into a functional product that integrates hardware, software, and user-focused design.",
      featuresTitle: "Key Features",
      features: [
        "Real-time pet detection and tracking",
        "Computer vision algorithm implementation",
        "Hardware-software integration",
        "User-centered interface design",
        "Iterative prototyping approach",
        "Independent project management",
        "Public documentation and presentation",
        "Scalable system architecture"
      ],
      exploreTitle: "Explore the Code",
      exploreDesc: "View the complete source code and documentation on GitHub",
      reflection: "This project reinforced my interest in designing accessible, purposeful technologies and demonstrated my ability to initiate and execute complete product ideas from concept through public presentation. It showcases the entrepreneurial spirit and technical capabilities that I aim to bring to future roles in product development and technology startups.",
      caption1: "Real-time cat detection with 77% confidence",
      caption2: "Multi-animal detection capabilities",
    },
    pt: {
      badge: "Projeto Pessoal",
      title: "Cat Vision",
      subtitle: "Um sistema de visão computacional para monitoramento de animais, demonstrando design de produto centrado no usuário e resolução de problemas independente com mentalidade empreendedora.",
      overview: "Esta seção destaca um projeto pessoal onde explorei design de produto centrado no usuário e resolução de problemas independente. Representa minha mentalidade empreendedora e meu interesse em desenvolver soluções práticas e criativas fora da sala de aula.",
      storyTitle: "A História",
      story1: "Cat Vision nasceu de um problema real em casa. Minha família estava lidando com gatos de rua invadindo nosso jardim e destruindo móveis externos, um problema frustrante sem solução clara. Meu pai me encarregou de encontrar uma maneira de resolver isso, e vi como uma oportunidade de aplicar minhas habilidades técnicas a um desafio pessoal significativo.",
      story2: "Construí o Cat Vision para analisar aparições de gatos empregando um modelo de visão computacional usando PyTorch e OpenCV, integrado com o feed da câmera de segurança de nossa casa. O sistema detecta e rastreia gatos em tempo real, permitindo compilar dados de detecção e identificar padrões de quando os gatos de rua apareciam. Com essa percepção preditiva, pudemos tomar medidas apropriadas, ajustando horários, implantando elementos dissuasores, para resolver efetivamente o problema.",
      story3: "Trabalhar independentemente neste projeto me permitiu construir tanto o sistema técnico quanto a narrativa ao redor, habilidades críticas para empreendedorismo e desenvolvimento de produtos. O que começou como um desafio familiar evoluiu para um produto funcional que integra hardware, software e design focado no usuário.",
      featuresTitle: "Principais Funcionalidades",
      features: [
        "Detecção e rastreamento de animais em tempo real",
        "Implementação de algoritmo de visão computacional",
        "Integração hardware-software",
        "Design de interface centrado no usuário",
        "Abordagem de prototipagem iterativa",
        "Gerenciamento de projeto independente",
        "Documentação e apresentação pública",
        "Arquitetura de sistema escalável"
      ],
      exploreTitle: "Explorar o Código",
      exploreDesc: "Veja o código-fonte completo e documentação no GitHub",
      reflection: "Este projeto reforçou meu interesse em projetar tecnologias acessíveis e com propósito e demonstrou minha capacidade de iniciar e executar ideias de produtos completas do conceito à apresentação pública. Demonstra o espírito empreendedor e as capacidades técnicas que pretendo trazer para futuros papéis em desenvolvimento de produtos e startups de tecnologia.",
      caption1: "Detecção de gato em tempo real com 77% de confiança",
      caption2: "Capacidades de detecção de múltiplos animais",
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
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {c.subtitle}
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a 
                href="https://github.com/johnny-carp0s/Cat_Vision" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                {t("common.viewOnGithub")}
              </a>
            </Button>
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
                <Lightbulb className="w-8 h-8 text-accent" />
                {t("common.projectOverview")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {c.overview}
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={catVision2} 
                  alt={c.caption1}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{c.caption1}</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={catVision1} 
                  alt={c.caption2}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{c.caption2}</p>
                </div>
              </div>
            </div>

            {/* Project Write-Up */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Cat className="w-8 h-8 text-accent" />
                {c.storyTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {c.story1}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {c.story2}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {c.story3}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-accent" />
                {c.featuresTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {c.features.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
                    <span className="text-accent font-bold">▸</span>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-primary mb-4">{t("common.technologiesTools")}</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "OpenCV", "Computer Vision", "Machine Learning", "Data Analysis", "Hardware Integration", "Git"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            <div className="mb-16 p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{c.exploreTitle}</h3>
                  <p className="text-muted-foreground">{c.exploreDesc}</p>
                </div>
                <Button asChild size="lg">
                  <a 
                    href="https://github.com/johnny-carp0s/Cat_Vision" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    {t("common.viewRepository")}
                  </a>
                </Button>
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

export default CatVisionProject;