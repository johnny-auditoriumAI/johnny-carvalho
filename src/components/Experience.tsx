import { Briefcase, GraduationCap, Award, Bot } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "BASc, Mechanical Engineering + PEY Co-op",
    organization: "University of Toronto",
    period: "Sep. 2024 – May 2028",
    description: "Double Minor in Business and Robotics & Mechatronics",
    highlights: [
      "Maintaining 3.48 GPA",
      "Focus on mechanical design, robotics, and product development",
      "Active participant in engineering design teams and competitions"
    ]
  },
  {
    type: "work",
    title: "Director of Outreach",
    organization: "UTESCA, Toronto",
    period: "September 2025 – Present",
    description: "Leading partnership development for U of T Engineering's consulting association",
    highlights: [
      "Researched and identified potential partners in prestigious consulting firms with 80% conversion rate",
      "Developed automation pipeline to optimize partner outreach, resulting in 20+ partners registered"
    ]
  },
  {
    type: "research",
    title: "Co-Author, Materials Science Research",
    organization: "Department of Materials Science, U of T",
    period: "May – Jul. 2025",
    description: "Published research on 4D printing and smart materials for energy storage",
    highlights: [
      "Published paper with 20+ applications of 4D printing for Li-Ion batteries and supercapacitors",
      "Conducted business strategy analysis and Life Cycle Assessment from 350+ sources",
      "Awarded People's Choice Award at U of T Undergraduate Engineering Research Day"
    ]
  },
  {
    type: "work",
    title: "Intern",
    organization: "Cacau Show, São Paulo, Brazil",
    period: "Dec. 2021 – Jan. 2022",
    description: "Data analysis and automation for Brazil's largest chocolate franchise",
    highlights: [
      "Participated in advertising and conversion data analysis, reaching 10,000+ customers",
      "Developed Python tool to automate data organization, achieving 98% efficiency increase"
    ]
  },
  {
    type: "extracurricular",
    title: "Team Leader / Chief Engineer",
    organization: "Brazilian Robotics Olympics",
    period: "2021 – 2023",
    description: "Led robotics competition team in both simulation and practical categories",
    highlights: [
      "Designed and programmed C# code for simulation category, achieving top 5 final position",
      "Manufactured custom PCB, circuitry, and victim rescue system with computer vision",
      "Responsible for obstacle detection and path-following for practical category"
    ]
  },
  {
    type: "education",
    title: "Eduexplora Summer Program",
    organization: "UC Berkeley",
    period: "Jul. 2022",
    description: "Intensive program in Python, design thinking, and applied STEM",
    highlights: [
      "Applied STEM concepts to neuroscience applications",
      "Developed leadership and design thinking skills"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Experience
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Academic journey and professional development
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-accent border-4 border-background hidden md:block" />
                  
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
