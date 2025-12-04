import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Cat, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Camera,
    title: "High-Speed Camera Robot",
    course: "MIE243 Design Project",
    description: "Autonomous filming robot for sports applications",
    details: [
      "Designed a robotic system capable of tracking fast-moving subjects",
      "Integrated high-speed camera with precision motor control",
      "Developed motion prediction algorithms for smooth tracking",
      "Collaborated with multidisciplinary team on mechanical and electrical design"
    ],
    technologies: ["SolidWorks", "Arduino", "Motion Control", "Mechanical Design"],
    impact: "Innovative approach to automated sports filming"
  },
  {
    icon: Cat,
    title: "Cat Vision",
    course: "Personal Project",
    description: "Computer vision system for pet monitoring",
    details: [
      "Built a vision-based system for monitoring pet behavior",
      "Implemented image processing and detection algorithms",
      "Integrated hardware and software for real-time analysis",
      "Focused on user-centered design for pet owners"
    ],
    technologies: ["Python", "Computer Vision", "Hardware Integration", "UI/UX"],
    impact: "User-friendly pet monitoring solution",
    link: "https://www.linkedin.com/in/joao-de-campos-carvalho-32a269334/details/projects/"
  },
  {
    icon: Activity,
    title: "Smart Sleep Monitoring Device",
    course: "APS112 Project • UHN Partnership",
    description: "IoT health monitoring system for sleep analysis",
    details: [
      "Developed wearable sensor system in partnership with University Health Network",
      "Integrated accelerometer and biometric sensors for data collection",
      "Implemented real-time data processing for sleep pattern analysis",
      "Designed user-friendly interface for healthcare applications"
    ],
    technologies: ["Arduino", "Sensors", "Data Analysis", "Healthcare Tech"],
    impact: "Enabled accurate sleep pattern tracking for clinical use"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A selection of engineering projects showcasing design, analysis, and innovation
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <project.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs mb-2">{project.course}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2 mt-1">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-primary mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 flex items-center justify-between">
                  <p className="text-sm font-medium text-accent">
                    ✓ {project.impact}
                  </p>
                  {project.link && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View →
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
