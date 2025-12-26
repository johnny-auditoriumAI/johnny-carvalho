import { ArrowLeft, Camera, Cog, Target, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import mie243FinalRender from "@/assets/projects/mie243-final-render.png";
import mie243Hexapod from "@/assets/projects/mie243-hexapod.png";
import mie243Robot from "@/assets/projects/mie243-robot.png";
import mie243Sketch from "@/assets/projects/mie243-sketch.png";
import mie243Gearbox from "@/assets/projects/mie243-gearbox.png";
import mie243HexapodDrawing from "@/assets/projects/mie243-hexapod-drawing.png";

const MIE243Project = () => {
  const { language, t } = useLanguage();

  const content = {
    en: {
      badge: "MIE243 Design Project",
      title: "High-Speed Camera Robot for Sports Filming",
      subtitle: "A multi-axis robotic camera arm designed for dynamic sports cinematography, challenging mechanical design skills and robotics-focused engineering workflows.",
      overview: "This section showcases my MIE243 course project, where I worked in a team to design a multi-axis robotic camera arm for dynamic sports cinematography. The project challenged my mechanical design skills and exposed me to robotics-focused engineering workflows that closely align with the type of work I hope to pursue in the future.",
      designProcess: "For this project, my team developed a long-reach robotic camera arm capable of producing smooth, repeatable motion for sports-focused filming. I contributed across the mechanical design process, from early research and specification development to CAD modelling and gearbox design. This experience strengthened my understanding of how structured engineering workflows translate into functional robotic systems, reinforcing the kind of work I hope to pursue professionally.",
      designProcess2: "My work included exploring drive mechanisms, selecting materials, performing torque and motion analysis, and designing custom planetary gearboxes to meet joint-specific requirements. The final design integrated multi-stage gear reduction, a stable hexapod base, and stepper-motor-driven joints tailored to cinematic motion control.",
      designOutline: "Design Outline",
      step1Title: "1. Research & Problem Definition",
      step1Desc: "Analyzed existing systems (UR5, Franka Panda, Kinova Gen3) to establish engineering requirements for an affordable, hobbyist-friendly solution.",
      step2Title: "2. Ideation & Selection",
      step2Desc: "Generated seven candidate concepts using structured methods. Selected a 5-DOF planetary gear design through weighted decision matrix evaluation.",
      step3Title: "3. Kinematic Modeling",
      step3Desc: "Implemented Python-based dynamic model to derive torque specifications and validate motor/gearbox combinations with safety margins.",
      step4Title: "4. Detailed Design & CAD",
      step4Desc: "Developed SolidWorks assemblies for hexapod base, planetary gearboxes, and structural components using 6061 aluminum and 42CrMo4 steel.",
      downloadTitle: "Design Specifications Document",
      downloadDesc: "Download the complete design specifications and technical documentation",
      contributions: [
        "Research and specification development",
        "CAD modeling in SolidWorks",
        "Custom planetary gearbox design",
        "Torque and motion analysis",
        "Material selection optimization",
        "Multi-stage gear reduction integration",
        "Hexapod base stability design",
        "Stepper motor joint configuration"
      ],
      reflection: "This experience strengthened my skills in collaborative engineering, conceptual design, and robotics systems, foundational skills that I aim to continue developing in my career. The project demonstrated the importance of systematic design approaches and cross-disciplinary teamwork in achieving complex engineering goals.",
      finalRenderCaption: "Final design CAD render",
      candidateCaption: "Candidate design CAD",
      sketchCaption: "Initial design sketches",
      gearboxCaption: "Planetary gearbox CAD",
      hexapodCaption: "Hexapod base assembly technical drawing",
    },
    pt: {
      badge: "Projeto de Design MIE243",
      title: "Robô de Câmera de Alta Velocidade para Filmagem Esportiva",
      subtitle: "Um braço robótico de câmera multi-eixo projetado para cinematografia esportiva dinâmica, desafiando habilidades de design mecânico e fluxos de trabalho de engenharia focados em robótica.",
      overview: "Esta seção apresenta meu projeto do curso MIE243, onde trabalhei em equipe para projetar um braço robótico de câmera multi-eixo para cinematografia esportiva dinâmica. O projeto desafiou minhas habilidades de design mecânico e me expôs a fluxos de trabalho de engenharia focados em robótica que se alinham com o tipo de trabalho que espero seguir no futuro.",
      designProcess: "Para este projeto, minha equipe desenvolveu um braço robótico de câmera de longo alcance capaz de produzir movimento suave e repetível para filmagem focada em esportes. Contribuí em todo o processo de design mecânico, desde pesquisa inicial e desenvolvimento de especificações até modelagem CAD e design de caixa de engrenagens. Esta experiência fortaleceu minha compreensão de como fluxos de trabalho de engenharia estruturados se traduzem em sistemas robóticos funcionais.",
      designProcess2: "Meu trabalho incluiu explorar mecanismos de acionamento, selecionar materiais, realizar análise de torque e movimento, e projetar caixas de engrenagens planetárias personalizadas para atender aos requisitos específicos de cada junta. O design final integrou redução de engrenagem em múltiplos estágios, uma base hexápode estável e juntas acionadas por motor de passo adaptadas ao controle de movimento cinematográfico.",
      designOutline: "Esboço do Design",
      step1Title: "1. Pesquisa & Definição do Problema",
      step1Desc: "Analisei sistemas existentes (UR5, Franka Panda, Kinova Gen3) para estabelecer requisitos de engenharia para uma solução acessível e amigável para hobbistas.",
      step2Title: "2. Ideação & Seleção",
      step2Desc: "Gerei sete conceitos candidatos usando métodos estruturados. Selecionei um design de engrenagem planetária de 5-DOF através de avaliação por matriz de decisão ponderada.",
      step3Title: "3. Modelagem Cinemática",
      step3Desc: "Implementei modelo dinâmico baseado em Python para derivar especificações de torque e validar combinações de motor/caixa de engrenagens com margens de segurança.",
      step4Title: "4. Design Detalhado & CAD",
      step4Desc: "Desenvolvi montagens no SolidWorks para base hexápode, caixas de engrenagens planetárias e componentes estruturais usando alumínio 6061 e aço 42CrMo4.",
      downloadTitle: "Documento de Especificações de Design",
      downloadDesc: "Baixe as especificações de design completas e documentação técnica",
      contributions: [
        "Pesquisa e desenvolvimento de especificações",
        "Modelagem CAD no SolidWorks",
        "Design de caixa de engrenagens planetária personalizada",
        "Análise de torque e movimento",
        "Otimização de seleção de materiais",
        "Integração de redução de engrenagem em múltiplos estágios",
        "Design de estabilidade da base hexápode",
        "Configuração de juntas com motor de passo"
      ],
      reflection: "Esta experiência fortaleceu minhas habilidades em engenharia colaborativa, design conceitual e sistemas robóticos, habilidades fundamentais que pretendo continuar desenvolvendo em minha carreira. O projeto demonstrou a importância de abordagens sistemáticas de design e trabalho em equipe interdisciplinar para alcançar objetivos complexos de engenharia.",
      finalRenderCaption: "Renderização CAD do design final",
      candidateCaption: "CAD do design candidato",
      sketchCaption: "Esboços iniciais do design",
      gearboxCaption: "CAD da caixa de engrenagens planetária",
      hexapodCaption: "Desenho técnico da montagem da base hexápode",
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
                <Target className="w-8 h-8 text-accent" />
                {t("common.projectOverview")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {c.overview}
              </p>
            </div>

            {/* Main Image - Final CAD Render */}
            <div className="mb-12">
              <div className="rounded-xl shadow-lg border border-border bg-card">
                <div className="flex justify-center items-center bg-muted/30 p-4">
                  <img 
                    src={mie243FinalRender} 
                    alt={c.finalRenderCaption}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium text-center">{c.finalRenderCaption}</p>
                </div>
              </div>
            </div>

            {/* Secondary Images Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243Robot} 
                  alt={c.candidateCaption}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{c.candidateCaption}</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243Sketch} 
                  alt={c.sketchCaption}
                  className="w-full h-auto object-contain bg-white p-4"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{c.sketchCaption}</p>
                </div>
              </div>
            </div>

            {/* Technical Images Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243Gearbox} 
                  alt={c.gearboxCaption}
                  className="w-full h-auto object-cover bg-muted/20"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{c.gearboxCaption}</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243HexapodDrawing} 
                  alt={c.hexapodCaption}
                  className="w-full h-auto object-cover bg-white"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{c.hexapodCaption}</p>
                </div>
              </div>
            </div>

            {/* Project Write-Up */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Camera className="w-8 h-8 text-accent" />
                {t("common.designProcess")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {c.designProcess}
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
                <a href="/MIE243-Design-Specifications.pdf" download>
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
                <Cog className="w-8 h-8 text-accent" />
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

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-primary mb-4">{t("common.technologiesTools")}</h3>
              <div className="flex flex-wrap gap-2">
                {["SolidWorks", "Motion Control", "Mechanical Design", "Gear Systems", "Torque Analysis", "Stepper Motors", "CAD Modeling", "FEA", "Kinematics"].map((tech) => (
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

export default MIE243Project;