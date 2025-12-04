import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          About Me
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a mechanical engineering student at the <span className="font-semibold text-primary">University of Toronto</span>, 
              passionate about robotics, agritech, computation, and product development. My academic journey has 
              equipped me with a strong foundation in engineering principles, hands-on prototyping, 
              <span className="font-semibold text-primary"> CAD modeling using SolidWorks</span>, and technical analysis.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              My career ambition is to work at the intersection of <span className="font-semibold text-primary">robotics, 
              product design, and technology entrepreneurship</span>. I'm motivated by building systems that blend 
              mechanical precision with thoughtful user experience—solutions that are technically strong and meaningful 
              to the people who rely on them.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              I'm drawn to roles where I can design mechanisms, integrate hardware and software, lead multidisciplinary 
              teams, and eventually build products within <span className="font-semibold text-primary">startup environments</span>. 
              This portfolio reflects the early stages of that path—projects that have shaped how I think about 
              engineering problems, collaboration, and innovation.
            </p>

          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
              <img 
                alt="Johnny Campos" 
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto border-4 border-accent/30" 
                src="/lovable-uploads/a2a8bdbb-ce2a-44fd-a186-cd0bad9f0735.jpg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;