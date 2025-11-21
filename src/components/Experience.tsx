import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "education",
    title: "Engineering Student",
    organization: "University of Toronto",
    period: "2021 - Present",
    description: "Pursuing engineering degree with focus on mechanical design and systems",
    highlights: [
      "Maintained strong academic performance in core engineering courses",
      "Engaged in hands-on lab work and design projects",
      "Active participant in engineering student community",
      "Developed proficiency in CAD, programming, and analysis tools"
    ]
  },
  {
    type: "work",
    title: "Design Team Member",
    organization: "UofT Engineering Design Team",
    period: "2022 - Present",
    description: "Collaborative engineering project development and competition participation",
    highlights: [
      "Contributed to mechanical subsystem design and optimization",
      "Collaborated with multidisciplinary team on complex projects",
      "Utilized CAD software for component design and assembly",
      "Participated in design reviews and iterative improvement processes"
    ]
  },
  {
    type: "work",
    title: "Research Assistant",
    organization: "Engineering Research Lab - University of Toronto",
    period: "Summer 2023",
    description: "Supported research initiatives in mechanical systems and data analysis",
    highlights: [
      "Conducted experimental testing and data collection",
      "Analyzed results using MATLAB and Python",
      "Prepared technical reports and presentations",
      "Collaborated with graduate students and faculty researchers"
    ]
  },
  {
    type: "work",
    title: "Engineering Intern",
    organization: "Technology Company",
    period: "Summer 2022",
    description: "Gained practical industry experience in engineering and design",
    highlights: [
      "Assisted with CAD modeling and technical documentation",
      "Participated in product development meetings",
      "Conducted testing and quality assurance activities",
      "Learned industry-standard tools and workflows"
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
                        exp.type === 'education' ? 'bg-accent/10' : 'bg-primary/10'
                      }`}>
                        {exp.type === 'education' ? (
                          <GraduationCap className="w-6 h-6 text-accent" />
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
