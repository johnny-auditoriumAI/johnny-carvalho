import { ArrowLeft, Briefcase, Layers, Lightbulb, Palette, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";
import edgeEnclosure from "@/assets/projects/auditorium-edge-enclosure.png";
import AuditoriumMark from "@/components/AuditoriumMark";

const AuditoriumAIProject = () => {
  const { language, t } = useLanguage();

  const content = {
    en: {
      badge: "Professional Experience",
      title: "Auditorium AI",
      role: "Lead Design Engineer",
      period: "May – August 2026",
      subtitle: "A summer as Lead Design Engineer at an automated stage lighting startup, working across hardware integration, interface design, and product strategy.",
      overview: "Auditorium AI builds automated stage lighting. I spent the summer of 2026 there as Lead Design Engineer, a role that sat deliberately across disciplines: some weeks went to hardware and mechanical integration, others to interface design, market research, or training material. It was the first time my work shipped to people who depended on it, and the first time I owned decisions end to end rather than contributing to someone else's specification.",
      storyTitle: "The Work",
      story1: "The most technically involved thread was a spatial-calibration feature that maps automated stage lighting to the geometry of the room it is installed in. Building it meant reasoning carefully about how the system fails rather than only how it succeeds, and that scrutiny uncovered two silent failure modes that every existing check had passed. Neither raised an error; both quietly produced wrong output. Finding them changed how I think about validation — a check that only confirms the expected path is not really a check.",
      story2: "The second thread was design. I built a unified interface design system covering typography, components, colour surfaces, and a custom icon set, which was adopted across both the operator application and the marketing site. Designing a system rather than a single screen demanded a different discipline: every decision had to hold up in contexts I would not personally be building.",
      story3: "The remaining work was broader in scope. I ran independent market and competitive research that ultimately redirected the company's target customer segment, and produced the follow-up channel strategy. I authored an eight-module training curriculum for operators new to lighting consoles. And I integrated hardware and software for a single-board-computer field device, covering field updates, device driver rules, and a 3D-printed enclosure designed in Fusion 360.",
      workstreamsTitle: "Workstreams",
      step1Title: "1. Spatial Calibration",
      step1Desc: "Engineered a feature mapping automated stage lighting to room geometry. Investigating its failure behaviour uncovered two silent failure modes that every existing check had passed.",
      step2Title: "2. Interface Design System",
      step2Desc: "Designed a unified system covering typography, components, colour surfaces, and a custom icon set, adopted across the operator application and the marketing site.",
      step3Title: "3. Market & Competitive Research",
      step3Desc: "Conducted independent research that redirected the company's target customer segment, then produced the follow-up channel strategy.",
      step4Title: "4. Operator Training Curriculum",
      step4Desc: "Authored an eight-module training curriculum for operators new to lighting consoles.",
      step5Title: "5. Field Device Integration",
      step5Desc: "Integrated hardware and software for a single-board-computer field device, including field updates, device driver rules, and a 3D-printed enclosure designed in Fusion 360. The device drives a fixture library of roughly 40 DMX profiles, spanning manufacturers including Chauvet, Martin, ADJ, Antari and Prolights.",
      enclosureCaption: "The field device: a single-board computer in a 3D-printed enclosure designed in Fusion 360, with DMX and power on the rear panel.",
      designSystemTitle: "The Design System",
      designSystemDesc: "The interface design system I built, reproduced from its shipped tokens. It runs light rather than dark: a warm paper ground with near-black ink, a single rust accent carrying emphasis and state, and Inter across the whole range with JetBrains Mono for numerics and technical labels. Motion is tokenised too, on a vocabulary borrowed from the theatre.",
      brandTitle: "Accent",
      neutralsTitle: "Paper and ink",
      typographyTitle: "Typography",
      motionTitle: "Motion",
      typeSample: "Lighting with intent",
      typeSampleBody: "One accent against a warm paper ground, so emphasis reads instantly and everything else stays quiet.",
      displayFace: "Inter — display and body",
      monoFace: "JetBrains Mono — numerics and technical labels",
      contributions: [
        "Spatial-calibration feature development",
        "Failure-mode investigation and validation",
        "Interface design system architecture",
        "Custom icon set design",
        "Market and competitive research",
        "Go-to-market channel strategy",
        "Eight-module operator training curriculum",
        "Hardware and software integration",
        "Enclosure design in Fusion 360",
        "Device driver rules and field update tooling"
      ],
      reflection: "This role was the first time my engineering decisions reached people outside a classroom or a team of peers. The lesson that stuck hardest came from the calibration work: two failure modes had been sitting inside a system that every existing check reported as healthy, which taught me that validation has to be designed as deliberately as the feature it guards. Working across hardware, interface design, research, and documentation in a single summer also confirmed the direction I want my career to take — roles broad enough to connect mechanical work to the product and to the people using it.",
    },
    pt: {
      badge: "Experiência Profissional",
      title: "Auditorium AI",
      role: "Engenheiro de Design Líder",
      period: "Maio – Agosto 2026",
      subtitle: "Um verão como Engenheiro de Design Líder em uma startup de iluminação cênica automatizada, atuando em integração de hardware, design de interface e estratégia de produto.",
      overview: "A Auditorium AI desenvolve iluminação cênica automatizada. Passei o verão de 2026 lá como Engenheiro de Design Líder, um papel deliberadamente posicionado entre disciplinas: algumas semanas foram dedicadas a hardware e integração mecânica, outras a design de interface, pesquisa de mercado ou material de treinamento. Foi a primeira vez que meu trabalho chegou a pessoas que dependiam dele, e a primeira vez que fui responsável por decisões de ponta a ponta em vez de contribuir para a especificação de outra pessoa.",
      storyTitle: "O Trabalho",
      story1: "A frente mais técnica foi um recurso de calibração espacial que mapeia a iluminação cênica automatizada à geometria da sala em que é instalada. Construí-lo exigiu raciocinar com cuidado sobre como o sistema falha, e não apenas sobre como ele funciona, e esse escrutínio revelou dois modos de falha silenciosos que todas as verificações existentes haviam aprovado. Nenhum gerava erro; ambos produziam silenciosamente resultados incorretos. Encontrá-los mudou minha forma de pensar sobre validação — uma verificação que confirma apenas o caminho esperado não é realmente uma verificação.",
      story2: "A segunda frente foi design. Construí um design system de interface unificado abrangendo tipografia, componentes, superfícies de cor e um conjunto de ícones próprio, adotado tanto no aplicativo do operador quanto no site de marketing. Projetar um sistema, e não uma única tela, exigiu outra disciplina: cada decisão precisava se sustentar em contextos que eu mesmo não construiria.",
      story3: "O restante do trabalho teve escopo mais amplo. Conduzi pesquisa independente de mercado e concorrência que acabou redirecionando o segmento de clientes-alvo da empresa, e produzi a estratégia de canais subsequente. Escrevi um currículo de treinamento de oito módulos para operadores iniciantes em mesas de iluminação. E integrei hardware e software para um dispositivo de campo baseado em single-board computer, cobrindo atualizações em campo, regras de driver de dispositivo e um invólucro impresso em 3D projetado no Fusion 360.",
      workstreamsTitle: "Frentes de Trabalho",
      step1Title: "1. Calibração Espacial",
      step1Desc: "Desenvolvi um recurso que mapeia a iluminação cênica automatizada à geometria da sala. Investigar seu comportamento em falha revelou dois modos de falha silenciosos que todas as verificações existentes haviam aprovado.",
      step2Title: "2. Design System de Interface",
      step2Desc: "Projetei um sistema unificado abrangendo tipografia, componentes, superfícies de cor e um conjunto de ícones próprio, adotado no aplicativo do operador e no site de marketing.",
      step3Title: "3. Pesquisa de Mercado & Concorrência",
      step3Desc: "Conduzi pesquisa independente que redirecionou o segmento de clientes-alvo da empresa, e então produzi a estratégia de canais subsequente.",
      step4Title: "4. Currículo de Treinamento",
      step4Desc: "Escrevi um currículo de treinamento de oito módulos para operadores iniciantes em mesas de iluminação.",
      step5Title: "5. Integração de Dispositivo de Campo",
      step5Desc: "Integrei hardware e software para um dispositivo de campo baseado em single-board computer, incluindo atualizações em campo, regras de driver de dispositivo e um invólucro impresso em 3D projetado no Fusion 360. O dispositivo controla uma biblioteca de cerca de 40 perfis DMX, abrangendo fabricantes como Chauvet, Martin, ADJ, Antari e Prolights.",
      enclosureCaption: "O dispositivo de campo: um single-board computer em um invólucro impresso em 3D projetado no Fusion 360, com DMX e alimentação no painel traseiro.",
      designSystemTitle: "O Design System",
      designSystemDesc: "O design system de interface que construí, reproduzido a partir de seus tokens em produção. Ele é claro, não escuro: um fundo de papel quente com tinta quase preta, um único acento rust carregando ênfase e estado, e Inter em toda a escala, com JetBrains Mono para números e rótulos técnicos. O movimento também é tokenizado, com um vocabulário emprestado do teatro.",
      brandTitle: "Acento",
      neutralsTitle: "Papel e tinta",
      typographyTitle: "Tipografia",
      motionTitle: "Movimento",
      typeSample: "Iluminação com intenção",
      typeSampleBody: "Um único acento sobre um fundo de papel quente, para que a ênfase seja lida instantaneamente e todo o resto permaneça discreto.",
      displayFace: "Inter — títulos e texto",
      monoFace: "JetBrains Mono — números e rótulos técnicos",
      contributions: [
        "Desenvolvimento do recurso de calibração espacial",
        "Investigação de modos de falha e validação",
        "Arquitetura do design system de interface",
        "Design de conjunto de ícones próprio",
        "Pesquisa de mercado e concorrência",
        "Estratégia de canais de entrada no mercado",
        "Currículo de treinamento de oito módulos",
        "Integração de hardware e software",
        "Design de invólucro no Fusion 360",
        "Regras de driver e ferramentas de atualização em campo"
      ],
      reflection: "Este papel foi a primeira vez que minhas decisões de engenharia alcançaram pessoas fora de uma sala de aula ou de uma equipe de colegas. A lição que mais ficou veio do trabalho de calibração: dois modos de falha estavam dentro de um sistema que todas as verificações existentes reportavam como saudável, o que me ensinou que a validação precisa ser projetada com o mesmo cuidado que o recurso que ela protege. Atuar em hardware, design de interface, pesquisa e documentação em um único verão também confirmou a direção que quero dar à minha carreira — papéis amplos o suficiente para conectar o trabalho mecânico ao produto e às pessoas que o utilizam.",
    }
  };

  const c = content[language];

  // Reproduced from the design system's shipped tokens (src/styles/app.css).
  // Source values are OKLCH; the sRGB hex beside each one is what renders here.
  const PAPER = "#F2ECE3";
  const INK = "#0A0B0D";

  // Rust is the whole accent. The greens in the token block come from the
  // device model's LED, not the brand palette, so they're left out.
  const accentRamp = [
    { name: "Rust", token: "--color-rust", hex: "#C53D23" },
    { name: "Rust deep", token: "--color-rust-deep", hex: "#9C2911" },
  ];

  const neutralRamp = [
    { name: "Paper", token: "--color-paper", hex: PAPER },
    { name: "Ash soft", token: "--color-ash-soft", hex: "#D6D7DA" },
    { name: "Ash", token: "--color-ash", hex: "#B6B7BB" },
    { name: "Ink soft", token: "--color-ink-soft", hex: "#46484A" },
    { name: "Ink", token: "--color-ink", hex: INK },
  ];

  // Easings named for stage cues rather than curves.
  const motionTokens = [
    { name: "shutter", curve: "cubic-bezier(0.16, 1, 0.3, 1)" },
    { name: "cue", curve: "cubic-bezier(0.6, 0, 0.4, 1)" },
    { name: "snap", curve: "cubic-bezier(0.2, 0.9, 0.2, 1)" },
    { name: "curtain", curve: "cubic-bezier(0.87, 0, 0.13, 1)" },
    { name: "breath", curve: "cubic-bezier(0.45, 0, 0.55, 1)" },
  ];

  const steps = [
    { title: c.step1Title, desc: c.step1Desc },
    { title: c.step2Title, desc: c.step2Desc },
    { title: c.step3Title, desc: c.step3Desc },
    { title: c.step4Title, desc: c.step4Desc },
    { title: c.step5Title, desc: c.step5Desc },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Link to="/#experience">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "pt" ? "Voltar à Experiência" : "Back to Experience"}
            </Button>
          </Link>

          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-4">{c.badge}</Badge>
            <div className="flex items-center gap-4 mb-4">
              {/* Rust is one of the three colours the brand rules permit */}
              <AuditoriumMark className="h-10 md:h-14 w-auto flex-shrink-0 text-[#C53D23]" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                {c.title}
              </h1>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-6">
              <p className="text-xl md:text-2xl font-semibold text-accent">{c.role}</p>
              <span className="text-muted-foreground">·</span>
              <p className="text-base text-muted-foreground">{c.period}</p>
            </div>
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

            {/* Overview */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-accent" />
                {t("common.projectOverview")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {c.overview}
              </p>
            </div>

            {/* Write-Up */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-accent" />
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

            {/* Workstreams */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Layers className="w-8 h-8 text-accent" />
                {c.workstreamsTitle}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-lg bg-secondary/20 border border-border ${
                      index === steps.length - 1 ? "md:col-span-2" : ""
                    }`}
                  >
                    <p className="font-medium text-foreground mb-1">{step.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Field device */}
            <figure className="mb-16">
              <div
                className="rounded-xl overflow-hidden border border-border"
                style={{ backgroundColor: PAPER }}
              >
                <img
                  src={edgeEnclosure}
                  alt={c.enclosureCaption}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-sm text-muted-foreground mt-3">
                {c.enclosureCaption}
              </figcaption>
            </figure>

            {/* Design System */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Palette className="w-8 h-8 text-accent" />
                {c.designSystemTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {c.designSystemDesc}
              </p>

              {/* Rendered on the system's own paper ground, as it appears in product */}
              <div
                className="rounded-xl border border-border overflow-hidden"
                style={{ backgroundColor: PAPER, color: INK }}
              >
                <div className="h-1.5 w-full" style={{ backgroundColor: "#C53D23" }} />

                <div className="p-6 md:p-8 space-y-8">
                  {/* Accent */}
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-4"
                      style={{ color: "#46484A", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {c.brandTitle}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {accentRamp.map((swatch) => (
                        <div key={swatch.token}>
                          <div
                            className="h-16 rounded-lg mb-2"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <p className="text-sm font-medium">{swatch.name}</p>
                          <p
                            className="text-xs"
                            style={{ color: "#46484A", fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {swatch.hex}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Paper and ink */}
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-4"
                      style={{ color: "#46484A", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {c.neutralsTitle}
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                      {neutralRamp.map((swatch) => (
                        <div key={swatch.token}>
                          <div
                            className="h-12 rounded-lg mb-2"
                            style={{
                              backgroundColor: swatch.hex,
                              border: "1px solid rgba(10, 11, 13, 0.12)",
                            }}
                          />
                          <p className="text-sm font-medium">{swatch.name}</p>
                          <p
                            className="text-xs"
                            style={{ color: "#46484A", fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {swatch.hex}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography */}
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-4"
                      style={{ color: "#46484A", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {c.typographyTitle}
                    </p>
                    <p
                      className="text-3xl md:text-4xl mb-1"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, letterSpacing: "-0.02em" }}
                    >
                      {c.typeSample}
                    </p>
                    <p className="text-xs mb-5" style={{ color: "#46484A" }}>{c.displayFace}</p>
                    <p
                      className="text-base leading-relaxed max-w-xl mb-5"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                    >
                      {c.typeSampleBody}
                    </p>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                    >
                      DMX 512 · 44.1 kHz · 0.00 → 1.00
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#46484A" }}>{c.monoFace}</p>
                  </div>

                  {/* Motion */}
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-4"
                      style={{ color: "#46484A", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {c.motionTitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {motionTokens.map((token) => (
                        <span
                          key={token.name}
                          title={token.curve}
                          className="text-xs px-3 py-1.5 rounded-md"
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            backgroundColor: "rgba(10, 11, 13, 0.06)",
                            border: "1px solid rgba(10, 11, 13, 0.12)",
                          }}
                        >
                          --ease-{token.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Contributions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-accent" />
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
                {["Fusion 360", "TypeScript", "Linux", "Figma", "Design Systems", "Single-Board Computers", "Hardware Integration", "3D Printing", "Market Research", "Technical Writing"].map((tech) => (
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

export default AuditoriumAIProject;
