import { useLanguage } from "@/components/LanguageProvider";

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          {t("about.title")}
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            {language === "pt" ? (
              <>
                <p className="text-lg text-foreground leading-relaxed">
                  Sou estudante de engenharia mecânica na <span className="font-semibold text-primary">Universidade de Toronto</span>, 
                  apaixonado por robótica, agritech, computação e desenvolvimento de produtos. Minha jornada acadêmica me 
                  proporcionou uma base sólida em princípios de engenharia, prototipagem prática, 
                  <span className="font-semibold text-primary"> modelagem CAD usando SolidWorks</span> e análise técnica.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Minha ambição de carreira é trabalhar na interseção de <span className="font-semibold text-primary">robótica, 
                  design de produtos e empreendedorismo tecnológico</span>. Sou motivado por construir sistemas que combinam 
                  precisão mecânica com experiência de usuário cuidadosa, soluções que são tecnicamente fortes e significativas 
                  para as pessoas que dependem delas.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  Sou atraído por funções onde posso projetar mecanismos, integrar hardware e software, liderar
                  equipes multidisciplinares e construir produtos em <span className="font-semibold text-primary">ambientes de startup</span>.
                  Foi exatamente isso que fiz como <span className="font-semibold text-primary">Engenheiro de Design Líder na Auditorium AI</span>,
                  onde trabalhei em um dispositivo de campo baseado em single-board computer e seu invólucro impresso em 3D, em um recurso de
                  calibração espacial para iluminação cênica automatizada, e em um design system unificado adotado no aplicativo do operador
                  e no site de marketing.
                </p>

                <p className="text-lg text-foreground leading-relaxed">
                  Os projetos reunidos aqui são onde esses instintos se formaram: um <span className="font-semibold text-primary">robô de câmera de alta velocidade</span> que
                  aprofundou minha expertise em sistemas mecânicos e de controle, o <span className="font-semibold text-primary">Cat Vision</span> como projeto pessoal
                  combinando hardware, software e design centrado no usuário, e um <span className="font-semibold text-primary">dispositivo inteligente de monitoramento de sono</span> com
                  restrições reais de saúde. Cada um moldou como abordo problemas de engenharia e inovação.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg text-foreground leading-relaxed">
                  I'm a mechanical engineering student at the <span className="font-semibold text-primary">University of Toronto</span>, 
                  passionate about robotics, agritech, computation, and product development. My academic journey has 
                  equipped me with a strong foundation in engineering principles, hands-on prototyping, 
                  <span className="font-semibold text-primary"> CAD modeling using SolidWorks</span>, and technical analysis.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  My career ambition is to work at the intersection of <span className="font-semibold text-primary">robotics, 
                  product design, and technology entrepreneurship</span>. I'm motivated by building systems that blend 
                  mechanical precision with thoughtful user experience, solutions that are technically strong and meaningful 
                  to the people who rely on them.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed">
                  I'm drawn to roles where I can design mechanisms, integrate hardware and software, lead multidisciplinary
                  teams, and build products within <span className="font-semibold text-primary">startup environments</span>.
                  Most recently I did exactly that as <span className="font-semibold text-primary">Lead Design Engineer at Auditorium AI</span>,
                  working across a single-board-computer field device and its 3D-printed enclosure, a spatial-calibration feature for
                  automated stage lighting, and a unified design system adopted across the operator application and marketing site.
                </p>

                <p className="text-lg text-foreground leading-relaxed">
                  The projects gathered here are where those instincts were formed: a <span className="font-semibold text-primary">high-speed camera robot</span> that
                  deepened my mechanical and control systems expertise, <span className="font-semibold text-primary">Cat Vision</span> as a personal venture
                  blending hardware, software, and user-centered design, and a <span className="font-semibold text-primary">smart sleep monitoring device</span> built
                  against real-world healthcare constraints. Each one shaped how I approach engineering problems and innovation.
                </p>
              </>
            )}
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
              <img 
                alt={language === "pt" ? "João Campos" : "Johnny Campos"}
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto border-4 border-accent/30" 
                src={`${import.meta.env.BASE_URL}lovable-uploads/a2a8bdbb-ce2a-44fd-a186-cd0bad9f0735.jpg`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;