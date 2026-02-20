import { ArrowLeft, Lightbulb, TrendingUp, Target, Users, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

import dotSlide1 from "@/assets/projects/dot-energy-slide1.jpg";
import dotSlide2 from "@/assets/projects/dot-energy-slide2.jpg";
import dotSlide3 from "@/assets/projects/dot-energy-slide3.jpg";
import dotSlide4 from "@/assets/projects/dot-energy-slide4.jpg";
import dotSlide5 from "@/assets/projects/dot-energy-slide5.jpg";
import dotSlide6 from "@/assets/projects/dot-energy-slide6.jpg";

const DOTEnergyProject = () => {
  const { language, t } = useLanguage();

  const content = {
    en: {
      badge: "JRE410 • Markets & Competitive Strategy",
      title: "DOT Energy Industry Analysis",
      subtitle: "Co-founded an early-stage consumer product new market venture, conducting competitive analysis and customer segmentation to assess commercial viability.",
      period: "Sep. – Dec. 2025 • Founding Team",
      overview: "DOT Energy is Brazil's pioneering energy candy startup that identified a gap in the traditional energy consumables market. Each DOT candy contains 40mg of caffeine and 300mg of taurine, delivering energy through oral absorption in just 5 minutes. This project focused on developing a comprehensive marketing strategy to introduce the brand to the Canadian market.",
      keyAchievements: "Key Achievements",
      seedBudget: "Seed Budget Constraint",
      breakEven: "Break-Even Target",
      operatingProfit: "Year 3 Operating Profit",
      strategicApproach: "Strategic Approach",
      strategyDesc: "The Canadian energy consumables market presents significant opportunities, valued at $5.72 billion in 2024 and projected to reach $12.3 billion by 2035. Our team adopted a Differentiation Focus Strategy, leveraging DOT's unique product innovation to target high-value market segments: university students and young office workers.",
      myContributions: "My Contributions",
      contribution1Title: "Competitive Analysis",
      contribution1Desc: "Conducted Porter's Five Forces analysis and competitive landscape mapping to assess market attractiveness.",
      contribution2Title: "Customer Segmentation",
      contribution2Desc: "Identified and profiled target segments: 2.2M post-secondary students and 1M+ young professionals in Canada.",
      contribution3Title: "Financial Modeling",
      contribution3Desc: "Built unit economics model with pricing strategy ($19.99-$22.99 per 20-sachet pack), demonstrating path to profitability.",
      contribution4Title: "Strategic Recommendations",
      contribution4Desc: "Presented go-to-market strategy under $50,000 seed-budget constraint, simulating founder-level decision-making.",
      targetMarket: "Target Market",
      studentsTitle: "High-Performance Students",
      students: ["2.2 Million students in Canada", "Ages 17-26, on-campus", "Spend $20-25/week on caffeine", "Value affordability, portability, health"],
      professionalsTitle: "Young Professionals",
      professionals: ["1M+ Gen-Z in Canadian workforce", "Ages 22-28, high income ($85k-$150k+)", "Junior stage career", "Value discretion, professionality, health"],
      downloadTitle: "Marketing Plan Document",
      downloadDesc: "Download the complete marketing strategy presentation",
      skillsTitle: "Skills & Methods",
      reflection: "This project provided hands-on experience in founder-level decision-making within an ambiguous environment. Working under resource constraints forced creative problem-solving and prioritization—skills essential for entrepreneurship and strategic roles in technology companies.",
      slideCaption1: "Product Features & Value Proposition",
      slideCaption2: "Market Pain Points Analysis",
      slideCaption3: "Market Size & Competitive Landscape",
      slideCaption4: "SWOT Analysis",
      slideCaption5: "Market Segmentation",
    },
    pt: {
      badge: "JRE410 • Mercados & Estratégia Competitiva",
      title: "Análise de Indústria DOT Energy",
      subtitle: "Co-fundei um empreendimento de novo mercado de produto de consumo em estágio inicial, conduzindo análise competitiva e segmentação de clientes para avaliar viabilidade comercial.",
      period: "Set. – Dez. 2025 • Equipe Fundadora",
      overview: "DOT Energy é a startup pioneira de balas energéticas do Brasil que identificou uma lacuna no mercado tradicional de consumíveis energéticos. Cada bala DOT contém 40mg de cafeína e 300mg de taurina, entregando energia através de absorção oral em apenas 5 minutos. Este projeto focou no desenvolvimento de uma estratégia de marketing abrangente para introduzir a marca no mercado canadense.",
      keyAchievements: "Principais Conquistas",
      seedBudget: "Restrição de Orçamento Inicial",
      breakEven: "Meta de Ponto de Equilíbrio",
      operatingProfit: "Lucro Operacional Ano 3",
      strategicApproach: "Abordagem Estratégica",
      strategyDesc: "O mercado canadense de consumíveis energéticos apresenta oportunidades significativas, avaliado em $5,72 bilhões em 2024 e projetado para alcançar $12,3 bilhões até 2035. Nossa equipe adotou uma Estratégia de Foco em Diferenciação, aproveitando a inovação única do produto DOT para atingir segmentos de mercado de alto valor: estudantes universitários e jovens profissionais de escritório.",
      myContributions: "Minhas Contribuições",
      contribution1Title: "Análise Competitiva",
      contribution1Desc: "Conduzi análise das Cinco Forças de Porter e mapeamento do cenário competitivo para avaliar atratividade do mercado.",
      contribution2Title: "Segmentação de Clientes",
      contribution2Desc: "Identifiquei e perfilei segmentos-alvo: 2,2M de estudantes pós-secundários e 1M+ de jovens profissionais no Canadá.",
      contribution3Title: "Modelagem Financeira",
      contribution3Desc: "Construí modelo de economia unitária com estratégia de preços ($19,99-$22,99 por pacote de 20 sachês), demonstrando caminho para lucratividade.",
      contribution4Title: "Recomendações Estratégicas",
      contribution4Desc: "Apresentei estratégia de entrada no mercado sob restrição de orçamento inicial de $50.000, simulando tomada de decisão em nível de fundador.",
      targetMarket: "Mercado Alvo",
      studentsTitle: "Estudantes de Alto Desempenho",
      students: ["2,2 Milhões de estudantes no Canadá", "Idades 17-26, no campus", "Gastam $20-25/semana em cafeína", "Valorizam acessibilidade, portabilidade, saúde"],
      professionalsTitle: "Jovens Profissionais",
      professionals: ["1M+ Gen-Z na força de trabalho canadense", "Idades 22-28, alta renda ($85k-$150k+)", "Estágio inicial de carreira", "Valorizam discrição, profissionalismo, saúde"],
      downloadTitle: "Documento do Plano de Marketing",
      downloadDesc: "Baixe a apresentação completa da estratégia de marketing",
      skillsTitle: "Habilidades & Métodos",
      reflection: "Este projeto proporcionou experiência prática em tomada de decisão em nível de fundador dentro de um ambiente ambíguo. Trabalhar sob restrições de recursos forçou resolução criativa de problemas e priorização—habilidades essenciais para empreendedorismo e funções estratégicas em empresas de tecnologia.",
      slideCaption1: "Características do Produto & Proposta de Valor",
      slideCaption2: "Análise de Pontos de Dor do Mercado",
      slideCaption3: "Tamanho do Mercado & Cenário Competitivo",
      slideCaption4: "Análise SWOT",
      slideCaption5: "Segmentação de Mercado",
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
                <Target className="w-8 h-8 text-accent" />
                {t("common.projectOverview")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {c.overview}
              </p>
            </div>

            {/* Main Slide Image */}
            <div className="mb-12">
              <div className="rounded-xl shadow-lg border border-border bg-card overflow-hidden">
                <img 
                  src={dotSlide1} 
                  alt="DOT Energy Marketing Plan Cover" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-accent" />
                {c.keyAchievements}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-accent/10 border border-accent/20 text-center">
                  <p className="text-4xl font-bold text-accent mb-2">$50K</p>
                  <p className="text-sm text-muted-foreground">{c.seedBudget}</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">Year 1</p>
                  <p className="text-sm text-muted-foreground">{c.breakEven}</p>
                </div>
                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">$1.2M</p>
                  <p className="text-sm text-muted-foreground">{c.operatingProfit}</p>
                </div>
              </div>
            </div>

            {/* Product Features Slide */}
            <div className="mb-12">
              <div className="rounded-xl shadow-lg border border-border bg-card overflow-hidden">
                <img 
                  src={dotSlide2} 
                  alt={c.slideCaption1}
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium text-center">{c.slideCaption1}</p>
                </div>
              </div>
            </div>

            {/* Problem Statement Slide */}
            <div className="mb-12">
              <div className="rounded-xl shadow-lg border border-border bg-card overflow-hidden">
                <img 
                  src={dotSlide3} 
                  alt={c.slideCaption2}
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium text-center">{c.slideCaption2}</p>
                </div>
              </div>
            </div>

            {/* Market Analysis Slide */}
            <div className="mb-12">
              <div className="rounded-xl shadow-lg border border-border bg-card overflow-hidden">
                <img 
                  src={dotSlide4} 
                  alt={c.slideCaption3}
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium text-center">{c.slideCaption3}</p>
                </div>
              </div>
            </div>

            {/* SWOT & Segmentation Slides */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={dotSlide5} 
                  alt={c.slideCaption4}
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{c.slideCaption4}</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={dotSlide6} 
                  alt={c.slideCaption5}
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">{c.slideCaption5}</p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-accent" />
                {c.strategicApproach}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {c.strategyDesc}
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-4">{c.myContributions}</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.contribution1Title}</p>
                  <p className="text-sm text-muted-foreground">{c.contribution1Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.contribution2Title}</p>
                  <p className="text-sm text-muted-foreground">{c.contribution2Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.contribution3Title}</p>
                  <p className="text-sm text-muted-foreground">{c.contribution3Desc}</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">{c.contribution4Title}</p>
                  <p className="text-sm text-muted-foreground">{c.contribution4Desc}</p>
                </div>
              </div>
            </div>

            {/* Target Market */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-accent" />
                {c.targetMarket}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-3">{c.studentsTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {c.students.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-3">{c.professionalsTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {c.professionals.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
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
                <a href={`${import.meta.env.BASE_URL}Marketing_Plan_1.pdf`} download>
                  <Button className="gap-2">
                    <Download className="w-4 h-4" />
                    {t("common.downloadPdf")}
                  </Button>
                </a>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-primary mb-4">{c.skillsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {["Market Analysis", "Competitive Strategy", "Financial Modeling", "Customer Segmentation", "Pricing Strategy", "Go-to-Market", "Business Case Development", "Strategic Planning"].map((tech) => (
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

export default DOTEnergyProject;