import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Activity, Box, LineChart, Glasses, Cpu } from "lucide-react";

const projects = [
  {
    icon: Cog,
    title: "Planetary Gearbox Design",
    description: "Advanced mechanical design and optimization",
    details: [
      "Designed a compact planetary gearbox system using SolidWorks",
      "Performed stress analysis and optimization for torque transmission",
      "Achieved 30% size reduction while maintaining structural integrity",
      "Created detailed technical drawings and assembly documentation"
    ],
    technologies: ["SolidWorks", "FEA", "MATLAB", "Technical Drawing"],
    impact: "Optimized design for high-torque applications"
  },
  {
    icon: Activity,
    title: "Sleep Tracking Wearable Sensors",
    description: "IoT health monitoring system development",
    details: [
      "Developed Arduino-based wearable sensor system for sleep analysis",
      "Integrated accelerometer and heart rate sensors for data collection",
      "Implemented real-time data processing algorithms",
      "Created user-friendly data visualization dashboard"
    ],
    technologies: ["Arduino", "C/C++", "Python", "Data Analysis"],
    impact: "Enabled accurate sleep pattern tracking and analysis"
  },
  {
    icon: Box,
    title: "CAD Modeling Portfolio",
    description: "Comprehensive mechanical design showcase",
    details: [
      "Created detailed 3D models of mechanical assemblies and components",
      "Developed parametric designs for manufacturing optimization",
      "Generated photorealistic renderings for presentation",
      "Collaborated with manufacturing team for design-for-manufacturing"
    ],
    technologies: ["SolidWorks", "Fusion 360", "Rendering", "GD&T"],
    impact: "Demonstrated advanced CAD proficiency and design thinking"
  },
  {
    icon: LineChart,
    title: "Python Data Analysis Suite",
    description: "Engineering data processing and visualization",
    details: [
      "Built Python tools for experimental data processing and analysis",
      "Automated data pipeline for sensor data collection",
      "Created interactive visualizations for engineering metrics",
      "Implemented statistical analysis for performance validation"
    ],
    technologies: ["Python", "NumPy", "Matplotlib", "Pandas"],
    impact: "Streamlined data analysis workflow by 60%"
  },
  {
    icon: Glasses,
    title: "AR Helmet Interface Concept",
    description: "Augmented reality user experience design",
    details: [
      "Designed user interface for AR-enhanced safety helmet",
      "Prototyped information overlay system for industrial applications",
      "Conducted user research and usability testing",
      "Created interactive mockups and demonstration materials"
    ],
    technologies: ["UI/UX Design", "Prototyping", "Research", "CAD"],
    impact: "Innovative approach to workplace safety enhancement"
  },
  {
    icon: Cpu,
    title: "MATLAB Control Systems",
    description: "Engineering simulation and control algorithms",
    details: [
      "Developed control algorithms for mechanical systems",
      "Simulated dynamic system behavior and response",
      "Optimized PID controller parameters through iteration",
      "Created comprehensive technical documentation"
    ],
    technologies: ["MATLAB", "Simulink", "Control Theory", "Analysis"],
    impact: "Improved system stability and response time"
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
                
                <div className="pt-2">
                  <p className="text-sm font-medium text-accent">
                    ✓ {project.impact}
                  </p>
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
