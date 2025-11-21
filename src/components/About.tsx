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
              I'm an engineering student at the <span className="font-semibold text-primary">University of Toronto</span>, 
              passionate about mechanical design, computation, and product development. My academic journey has 
              equipped me with a strong foundation in engineering principles and hands-on technical skills.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              With extensive experience in <span className="font-semibold text-primary">CAD modeling using SolidWorks</span>, 
              hands-on prototyping, and technical analysis, I bring a unique blend of theoretical knowledge 
              and practical application to every project. I thrive in collaborative environments and enjoy 
              tackling complex engineering challenges.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              My interests span from mechanical design and data-driven analysis to emerging technologies. 
              I'm particularly drawn to projects that combine <span className="font-semibold text-primary">innovation, 
              technical excellence, and real-world impact</span>. Whether it's designing planetary gearboxes, 
              developing wearable sensors, or creating AR interfaces, I approach each challenge with 
              analytical rigor and creative problem-solving.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium border border-accent/20">
                Leadership
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium border border-accent/20">
                Teamwork
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium border border-accent/20">
                Analytical Thinking
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium border border-accent/20">
                Problem Solving
              </span>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
              <img 
                src={profilePlaceholder} 
                alt="Johnny Campos" 
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto border-4 border-accent/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
