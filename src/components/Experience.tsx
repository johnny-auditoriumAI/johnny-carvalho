import { Briefcase, GraduationCap, Award, Bot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Experience = () => {
  const { language } = useLanguage();

  const experiences = [
    {
      type: "education",
      title: language === "pt" ? "BASc, Engenharia Mecânica + PEY Co-op" : "BASc, Mechanical Engineering + PEY Co-op",
      organization: language === "pt" ? "Universidade de Toronto" : "University of Toronto",
      period: language === "pt" ? "Set. 2024 – Abr. 2029" : "Sep. 2024 – Apr. 2029",
      description: language === "pt" ? "Minors em Robótica & Mecatrônica e Negócios de Engenharia" : "Minors in Robotics & Mechatronics and Engineering Business",
      highlights: language === "pt" 
        ? [
            "Mantendo média 3.25",
            "Foco em design mecânico, robótica e desenvolvimento de produtos",
            "Participante ativo em equipes de design de engenharia e competições"
          ]
        : [
            "Maintaining 3.25 GPA",
            "Focus on mechanical design, robotics, and product development",
            "Active participant in engineering design teams and competitions"
          ]
    },
    {
      type: "work",
      title: language === "pt" ? "Líder de Operações" : "Operations Lead",
      organization: language === "pt" ? "Auditorium AI Inc., Toronto, Canadá" : "Auditorium AI Inc., Toronto, Canada",
      period: language === "pt" ? "Set. 2026 – Presente" : "Sep. 2026 – Present",
      description: language === "pt"
        ? "Operações de eventos e sistemas para uma startup de iluminação cênica automatizada"
        : "Event operations and operating systems for an automated stage lighting startup",
      highlights: language === "pt"
        ? [
            "Responsável pelo P&L dos eventos com meta de 2 eventos lucrativos por mês, acompanhando receita e despesas por evento até uma margem verificada",
            "Construí o sistema operacional: drive financeiro compartilhado, rastreador de P&L por evento, pipeline de negócios, inventário de equipamentos e relatórios semanais aos fundadores, dando aos fundadores uma visão permanente de dinheiro, negócios e equipamentos",
            "Desenhei o modelo de escalação da equipe: banco de talentos casual escalado apenas nos dias de evento, 1-2 membros por evento (até 3 para eventos maiores), com custo por evento acompanhado em relação à margem",
            "Gerencio uma líder de conteúdo com base em brief aprovado e check-ins semanais, entregando 8 peças por mês em cadência constante",
            "Configurei e gerenciei um fluxo de desenvolvimento assistido por IA para o produto web da empresa, coordenando código gerado por IA com foco em frontend por meio de revisão até uma base de código funcional"
          ]
        : [
            "Own event P&L against a target of 2 profitable events per month, tracking revenue and expenses per event to a verified margin",
            "Built the operating system, shared finance drive, per-event P&L tracker, deals pipeline, gear inventory, and weekly founder reports, giving founders a standing view of money, deals, and gear",
            "Designed the crew staffing model: casual bench scheduled only on gig days, 1-2 crew per event (up to 3 for larger events), with per-event cost tracked against margin",
            "Manage a content lead against an approved brief with weekly check-ins, shipping 8 pieces per month on a steady cadence",
            "Set up and managed an AI-assisted development workflow for the company web product, coordinating frontend-heavy AI-generated code through review into a working codebase"
          ]
    },
    {
      type: "work",
      title: language === "pt" ? "Engenheiro de Design Líder" : "Lead Design Engineer",
      organization: language === "pt" ? "Auditorium AI Inc., Toronto, Canadá" : "Auditorium AI Inc., Toronto, Canada",
      period: language === "pt" ? "Maio 2026 – Agosto 2026" : "May 2026 – August 2026",
      description: language === "pt"
        ? "Engenharia de design em hardware, software e produto para uma startup de iluminação cênica automatizada"
        : "Design engineering across hardware, software, and product for an automated stage lighting startup",
      highlights: language === "pt"
        ? [
            "Desenvolvi um recurso de calibração espacial que mapeia iluminação cênica automatizada à geometria da sala, revelando dois modos de falha silenciosos que todas as verificações existentes haviam aprovado",
            "Escrevi um currículo de treinamento de oito módulos para operadores iniciantes em mesas de iluminação",
            "Integrei hardware e software para um dispositivo de campo baseado em single-board computer, incluindo atualizações em campo, regras de driver de dispositivo e um invólucro impresso em 3D projetado no Fusion 360",
            "Conduzi pesquisa independente de mercado e concorrência que redirecionou o segmento de clientes-alvo da empresa, e produzi a estratégia de canais subsequente"
          ]
        : [
            "Engineered a spatial-calibration feature mapping automated stage lighting to room geometry, uncovering two silent failure modes that every existing check had passed",
            "Authored an eight-module training curriculum for operators new to lighting consoles",
            "Integrated hardware and software for a single-board-computer field device, including field updates, device driver rules, and a 3D-printed enclosure designed in Fusion 360",
            "Conducted independent market and competitive research that redirected the company's target customer segment, and produced the follow-up channel strategy"
          ],
      route: "/projects/auditorium-ai"
    },
    {
      type: "work",
      title: language === "pt" ? "Vice-Presidente de Divulgação" : "VP of Outreach",
      organization: "UTESCA, Toronto",
      period: language === "pt" ? "Setembro 2025 – Presente" : "September 2025 – Present",
      description: language === "pt" 
        ? "Liderando desenvolvimento de parcerias para a associação de consultoria de Engenharia da U of T"
        : "Leading partnership development for U of T Engineering's consulting association",
      highlights: language === "pt" 
        ? [
            "Construí um rastreador de divulgação automatizado no Google Sheets para identificar e gerenciar 137 potenciais parceiros em consultorias, convertendo 15% em 20+ parceiros",
            "Gerencio uma equipe de divulgação de 4 pessoas com cadência semanal de prospecção para parcerias em eventos, acompanhando cada contato do primeiro toque à reunião agendada"
          ]
        : [
            "Built an automated outreach tracker in Google Sheets to identify and manage 137 prospects at consulting firms, converting 15% into 20+ partners",
            "Manage a 4-person outreach team running a weekly prospecting cadence for event partnerships, tracking each contact from first touch to booked meeting"
          ]
    },
    {
      type: "extracurricular",
      title: language === "pt" ? "Projeto de Robótica" : "Robotics Project",
      organization: language === "pt" ? "Projeto Pessoal" : "Personal Project",
      period: language === "pt" ? "Set. 2026 – Presente" : "Sep. 2026 – Present",
      description: language === "pt"
        ? "Construção mecânica de um braço robótico baseado em SO-101"
        : "Mechanical build of an SO-101-based robotic arm",
      highlights: language === "pt"
        ? [
            "CAD, montagem e testes de validação com equipe de 3 pessoas",
            "Responsável por captação de financiamento/patrocínio e administração da equipe/GitHub"
          ]
        : [
            "CAD, assembly, and validation testing with a 3-person team",
            "Own funding/sponsorship outreach and team admin/GitHub"
          ]
    },
    {
      type: "extracurricular",
      title: "Eye-Tracker",
      organization: language === "pt" ? "Projeto Pessoal" : "Personal Project",
      period: language === "pt" ? "Ago. 2026 – Presente" : "Aug. 2026 – Present",
      description: language === "pt"
        ? "Camada de controle por rastreamento de olhar"
        : "Gaze-tracking control layer",
      highlights: language === "pt"
        ? [
            "Construí uma camada de controle por rastreamento de olhar com 10 recursos, incluindo invocação por olhar, agir por pinça, atuação por voz e rastreamento ocular por pupila/reflexo montado na cabeça, permitindo controle do computador sem as mãos, sem teclado ou mouse",
            "Desenhei o modelo de interação olhar + voz: gesto de palma aberta como push-to-talk, confirmações destrutivas apenas por voz e tutorial guiado por olhar/voz na primeira execução"
          ]
        : [
            "Built a gaze-tracking control layer with 10 features, including gaze summoning, pinch-to-act, voice actuation, and head-mounted pupil/glint eye tracking, delivering hands-free computer control with zero keyboard or mouse input",
            "Designed the gaze-plus-voice interaction model: open-palm gesture as push-to-talk, voice-only destructive confirmations, and a gaze/voice guided first-run tutorial"
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
            "Analisei dados de publicidade e conversão cobrindo 10.000+ clientes",
            "Desenvolvi ferramenta Python para automatizar organização de dados, alcançando 98% de aumento de eficiência"
          ]
        : [
            "Analyzed advertising and conversion data covering 10,000+ customers",
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
            "Projetei e programei o código de simulação em C#, ficando entre os 5 melhores nacionalmente",
            "Projetei e manufaturei o PCB personalizado, os circuitos e o módulo de visão de resgate do robô, entregando o hardware para a participação na categoria prática",
            "Construí sistemas embarcados em vários robôs de competição com Arduino, ESP32 e Raspberry Pi, entregando integração de sensores e controle de motores para robôs de competição",
            "Liderei uma equipe de 3-5 pessoas como engenheiro chefe em design, construção e competição, competindo em 5 competições durante o ensino médio"
          ]
        : [
            "Designed and programmed the C# simulation code, placing top 5 nationally",
            "Designed and manufactured the robot's custom PCB, circuitry, and rescue vision module, delivering the hardware for the team's practical-category entry",
            "Built embedded systems across multiple robotics builds on Arduino, ESP32, and Raspberry Pi, delivering sensor integration and motor control for competition robots",
            "Led a 3-5 person team as chief engineer across design, build, and competition, competing in 5 competitions over high school"
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

const TOTAL_CARDS = 10;

const ExperienceCard = ({ exp, index }: { exp: { type: string; title: string; organization: string; period: string; description: string; highlights: string[]; route?: string }; index: number }) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: '-50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stagger: top cards appear first (scroll down), bottom cards disappear first (scroll up)
  const enterDelay = index * 150;
  const exitDelay = (TOTAL_CARDS - 1 - index) * 150;
  const currentDelay = isVisible ? enterDelay : exitDelay;

  return (
    <div 
      ref={cardRef}
      className={`relative pl-0 md:pl-20 transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${currentDelay}ms` }}
    >
      {/* Timeline dot */}
      <div className={`absolute left-6 top-6 w-4 h-4 rounded-full bg-accent border-4 border-background hidden md:block transition-all duration-400 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`} style={{ transitionDelay: `${currentDelay + 100}ms` }} />
      
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

        {exp.route && (
          <div className="mt-6 ml-0 md:ml-16">
            <Link
              to={exp.route}
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
            >
              {language === "pt" ? "Ler o relato completo" : "Read the full write-up"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
