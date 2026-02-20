import { ArrowLeft, Activity, Users, Heart, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import aps112Device from "@/assets/projects/aps112-device.png";

const APS112Project = () => {
  const { language, t } = useLanguage();

  const content = {
    en: {
      badge: "APS112 Project • UHN Partnership",
      title: "Smart Sleep Monitoring Device",
      subtitle: "A multidisciplinary design project completed in partnership with the University Health Network (UHN), focusing on user needs, system requirements, and real-world healthcare constraints.",
      overview: "This section presents a multidisciplinary design project completed in partnership with the University Health Network (UHN). Working with Dr. Tatyana Mollayeva from the Kite Research Institute, our team designed a sleep tracking system for retired adults aged 65-75. This project emphasized my ability to work in a structured design environment focused on user needs, stakeholder requirements, and real-world healthcare constraints.",
      designProcess1: "In APS112, my team partnered with UHN to design a sleep monitoring system addressing a gap in the market: the lack of affordable, easy-to-use sleep trackers for retired adults. I contributed to developing functional requirements, conducting stakeholder analysis, and participating in concept generation and selection. This experience reinforced my interest in user-centered product design within healthcare contexts.",
      designProcess2: "Our final concept, the Smart-Slumber PJs, features wearable sensor boxes integrated into pajamas that measure heart rate, oxygen levels, body temperature, and movement. The design prioritized accessibility, accuracy (≥95% compared to clinical devices), and affordability (under $68 CAD) for the target demographic.",
      designOutline: "Design Outline",
      step1Title: "1. Problem Definition & Stakeholder Analysis",
      step1Desc: "Identified gaps in existing solutions and mapped key stakeholders including family members, sleep research organizations, and medical insurance companies.",
      step2Title: "2. Requirements Engineering",
      step2Desc: "Developed detailed functions, objectives, and constraints including weight limits (<2.3kg), non-invasiveness, and accessibility standards for elderly users.",
      step3Title: "3. Ideation & Selection",
      step3Desc: "Generated 119 ideas through brainstorming and morphological charts. Narrowed to 3 designs using multi-voting, graphical decision charts, and weighted decision matrix.",
      step4Title: "4. Final Design & Specification",
      step4Desc: "Selected Smart-Slumber PJs using Pugh chart analysis. Developed detailed CAD models, component specifications, and success metrics.",
      downloadTitle: "Design Specifications Document",
      downloadDesc: "Download the complete conceptual design specifications",
      contributions: [
        "Functional requirements development",
        "Environmental analysis",
        "Stakeholder needs assessment",
        "Concept generation sessions",
        "Design selection methodology",
        "User-centered design principles",
        "Healthcare compliance considerations",
        "Team collaboration and communication"
      ],
      accessibilityTitle: "Accessibility",
      accessibilityDesc: "Designed for retired adults with varying mobility and technical comfort levels",
      accuracyTitle: "Accuracy",
      accuracyDesc: "Reliable physiological measurements for meaningful sleep analysis",
      easeTitle: "Ease of Use",
      easeDesc: "Intuitive interface and minimal setup requirements",
      partnershipTitle: "University Health Network Partnership",
      partnershipSubtitle: "Real-world healthcare collaboration",
      partnershipDesc: "Working with UHN provided invaluable exposure to real healthcare stakeholders and the rigorous requirements of medical device design, including patient safety, data privacy, and clinical efficacy considerations.",
      reflection: "This project strengthened my ability to design within constraints, integrate user needs into engineering decisions, and collaborate effectively through a full conceptual design cycle. These skills directly support my long-term goals in product-driven engineering roles, particularly in healthcare and wellness technology.",
      imageCaption: "Smart-Slumber PJs concept renders showing wearable sensor boxes and charging mat",
    },
    pt: {
      badge: "Projeto APS112 • Parceria UHN",
      title: "Dispositivo Inteligente de Monitoramento de Sono",
      subtitle: "Um projeto de design multidisciplinar concluído em parceria com a University Health Network (UHN), focando em necessidades dos usuários, requisitos do sistema e restrições reais de saúde.",
      overview: "Esta seção apresenta um projeto de design multidisciplinar concluído em parceria com a University Health Network (UHN). Trabalhando com a Dra. Tatyana Mollayeva do Kite Research Institute, nossa equipe projetou um sistema de rastreamento de sono para adultos aposentados de 65-75 anos. Este projeto enfatizou minha capacidade de trabalhar em um ambiente de design estruturado focado em necessidades dos usuários, requisitos das partes interessadas e restrições reais de saúde.",
      designProcess1: "No APS112, minha equipe fez parceria com a UHN para projetar um sistema de monitoramento de sono abordando uma lacuna no mercado: a falta de rastreadores de sono acessíveis e fáceis de usar para adultos aposentados. Contribuí para desenvolver requisitos funcionais, conduzir análise de partes interessadas e participar da geração e seleção de conceitos. Esta experiência reforçou meu interesse em design de produto centrado no usuário em contextos de saúde.",
      designProcess2: "Nosso conceito final, o Smart-Slumber PJs, apresenta caixas de sensores vestíveis integradas em pijamas que medem frequência cardíaca, níveis de oxigênio, temperatura corporal e movimento. O design priorizou acessibilidade, precisão (≥95% comparado a dispositivos clínicos) e acessibilidade econômica (menos de $68 CAD) para o público-alvo.",
      designOutline: "Esboço do Design",
      step1Title: "1. Definição do Problema & Análise de Partes Interessadas",
      step1Desc: "Identifiquei lacunas em soluções existentes e mapeei principais partes interessadas incluindo membros da família, organizações de pesquisa de sono e empresas de seguro médico.",
      step2Title: "2. Engenharia de Requisitos",
      step2Desc: "Desenvolvi funções detalhadas, objetivos e restrições incluindo limites de peso (<2.3kg), não-invasividade e padrões de acessibilidade para usuários idosos.",
      step3Title: "3. Ideação & Seleção",
      step3Desc: "Gerei 119 ideias através de brainstorming e gráficos morfológicos. Reduzi para 3 designs usando votação múltipla, gráficos de decisão gráficos e matriz de decisão ponderada.",
      step4Title: "4. Design Final & Especificação",
      step4Desc: "Selecionei Smart-Slumber PJs usando análise de gráfico Pugh. Desenvolvi modelos CAD detalhados, especificações de componentes e métricas de sucesso.",
      downloadTitle: "Documento de Especificações de Design",
      downloadDesc: "Baixe as especificações de design conceitual completas",
      contributions: [
        "Desenvolvimento de requisitos funcionais",
        "Análise ambiental",
        "Avaliação de necessidades das partes interessadas",
        "Sessões de geração de conceitos",
        "Metodologia de seleção de design",
        "Princípios de design centrado no usuário",
        "Considerações de conformidade de saúde",
        "Colaboração e comunicação em equipe"
      ],
      accessibilityTitle: "Acessibilidade",
      accessibilityDesc: "Projetado para adultos aposentados com níveis variados de mobilidade e conforto técnico",
      accuracyTitle: "Precisão",
      accuracyDesc: "Medições fisiológicas confiáveis para análise significativa do sono",
      easeTitle: "Facilidade de Uso",
      easeDesc: "Interface intuitiva e requisitos mínimos de configuração",
      partnershipTitle: "Parceria com University Health Network",
      partnershipSubtitle: "Colaboração real em saúde",
      partnershipDesc: "Trabalhar com a UHN proporcionou exposição inestimável a partes interessadas reais de saúde e aos rigorosos requisitos de design de dispositivos médicos, incluindo segurança do paciente, privacidade de dados e considerações de eficácia clínica.",
      reflection: "Este projeto fortaleceu minha capacidade de projetar dentro de restrições, integrar necessidades dos usuários em decisões de engenharia e colaborar efetivamente através de um ciclo completo de design conceitual. Essas habilidades apoiam diretamente meus objetivos de longo prazo em funções de engenharia orientadas a produtos, particularmente em tecnologia de saúde e bem-estar.",
      imageCaption: "Renderizações do conceito Smart-Slumber PJs mostrando caixas de sensores vestíveis e tapete de carregamento",
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
                <Heart className="w-8 h-8 text-accent" />
                {t("common.projectOverview")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {c.overview}
              </p>
            </div>

            {/* Main Image */}
            <div className="mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={aps112Device} 
                  alt={c.imageCaption}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground text-center">{c.imageCaption}</p>
                </div>
              </div>
            </div>

            {/* Project Write-Up */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-accent" />
                {t("common.designProcess")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {c.designProcess1}
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {c.designProcess2}
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">{c.designOutline}</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.step1Title}</p>
                  <p className="text-sm text-muted-foreground">{c.step1Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.step2Title}</p>
                  <p className="text-sm text-muted-foreground">{c.step2Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.step3Title}</p>
                  <p className="text-sm text-muted-foreground">{c.step3Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.step4Title}</p>
                  <p className="text-sm text-muted-foreground">{c.step4Desc}</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mb-16 p-6 rounded-xl bg-secondary/30 border border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{c.downloadTitle}</h3>
                  <p className="text-sm text-muted-foreground">{c.downloadDesc}</p>
                </div>
                <a href={`${import.meta.env.BASE_URL}APS112-Design-Specifications.pdf`} download>
                  <Button className="gap-2">
                    <Download className="w-4 h-4" />
                    {t("common.downloadPdf")}
                  </Button>
                </a>
              </div>
            </div>

            {/* Key Contributions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-accent" />
                {t("common.keyContributions")}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {c.contributions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
                    <span className="text-accent font-bold">▸</span>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Priorities */}
            <div className="mb-16 grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">♿</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{c.accessibilityTitle}</h3>
                <p className="text-sm text-muted-foreground">{c.accessibilityDesc}</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{c.accuracyTitle}</h3>
                <p className="text-sm text-muted-foreground">{c.accuracyDesc}</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{c.easeTitle}</h3>
                <p className="text-sm text-muted-foreground">{c.easeDesc}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-primary mb-4">{t("common.technologiesTools")}</h3>
              <div className="flex flex-wrap gap-2">
                {["Arduino", "Biometric Sensors", "Data Analysis", "Healthcare Tech", "User Research", "Prototyping", "Requirements Engineering"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Partnership Info */}
            <div className="mb-16 p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">{c.partnershipTitle}</h3>
                  <p className="text-muted-foreground">{c.partnershipSubtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                {c.partnershipDesc}
              </p>
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

export default APS112Project;