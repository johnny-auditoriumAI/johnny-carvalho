import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Cat, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: Camera,
    title: "High-Speed Camera Robot",
    course: "MIE243 Design Project",
    description: "Multi-axis robotic camera arm for dynamic sports cinematography",
    details: [
      "Designed long-reach robotic arm for smooth, repeatable motion",
      "Custom planetary gearbox design for joint-specific requirements",
      "Torque and motion analysis for optimal performance",
      "Hexapod base integration with stepper-motor-driven joints"
    ],
    technologies: ["SolidWorks", "Motion Control", "Gear Systems", "Mechanical Design"],
    impact: "Robotics-focused engineering workflow",
    route: "/projects/mie243",
    bgColor: "bg-primary/5",
    accentColor: "bg-primary/10",
    hoverAccent: "bg-primary/20"
  },
  {
    icon: Cat,
    title: "Cat Vision",
    course: "Personal Project",
    description: "Computer vision system for pet monitoring and behavior tracking",
    details: [
      "Real-time pet detection using computer vision algorithms",
      "Hardware-software integration for practical deployment",
      "User-centered design approach for pet owners",
      "Independent project from concept to public presentation"
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "Computer Vision"],
    impact: "Entrepreneurial product development",
    route: "/projects/cat-vision",
    bgColor: "bg-accent/5",
    accentColor: "bg-accent/10",
    hoverAccent: "bg-accent/20"
  },
  {
    icon: Activity,
    title: "Smart Sleep Monitoring Device",
    course: "APS112 Project • UHN Partnership",
    description: "Healthcare sleep monitoring system for retired adults",
    details: [
      "Partnership with University Health Network (UHN)",
      "Functional requirements and stakeholder analysis",
      "Wearable and mat-integrated monitoring concept",
      "User-centered design for accessibility and ease of use"
    ],
    technologies: ["Arduino", "Sensors", "Data Analysis", "Healthcare Tech"],
    impact: "Real-world healthcare design experience",
    route: "/projects/aps112",
    bgColor: "bg-secondary",
    accentColor: "bg-muted",
    hoverAccent: "bg-muted-foreground/10"
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
              className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border group ${project.bgColor}`}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${project.accentColor} flex items-center justify-center mb-4 group-hover:${project.hoverAccent} transition-colors`}>
                  <project.icon className="w-6 h-6 text-primary" />
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
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={project.route} className="inline-flex items-center gap-1">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
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
