import { ArrowLeft, Camera, Cog, Target, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import mie243Hexapod from "@/assets/projects/mie243-hexapod.png";
import mie243Robot from "@/assets/projects/mie243-robot.png";
import mie243Sketch from "@/assets/projects/mie243-sketch.png";
import mie243Gearbox from "@/assets/projects/mie243-gearbox.png";
import mie243HexapodDrawing from "@/assets/projects/mie243-hexapod-drawing.png";

const MIE243Project = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Link to="/#projects">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          
          <div className="max-w-4xl">
            <Badge variant="outline" className="mb-4">MIE243 Design Project</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              High-Speed Camera Robot for Sports Filming
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A multi-axis robotic camera arm designed for dynamic sports cinematography, 
              challenging mechanical design skills and robotics-focused engineering workflows.
            </p>
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
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This section showcases my MIE243 course project, where I worked in a team to design 
                a multi-axis robotic camera arm for dynamic sports cinematography. The project 
                challenged my mechanical design skills and exposed me to robotics-focused engineering 
                workflows that closely align with the type of work I hope to pursue in the future.
              </p>
            </div>

            {/* Main Image - Hexapod Robot (Rotated 90° left) */}
            <div className="mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card">
                <div className="flex justify-center items-center bg-muted/30 p-4">
                  <img 
                    src={mie243Hexapod} 
                    alt="Final design CAD render of robot arm with hexapod base" 
                    className="w-full max-w-2xl h-auto object-contain"
                    style={{ transform: 'rotate(-90deg)' }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground font-medium">Final design CAD render</p>
                </div>
              </div>
            </div>

            {/* Secondary Images Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243Robot} 
                  alt="Candidate design CAD - Mobile platform" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Candidate design CAD</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243Sketch} 
                  alt="Design sketches and annotations" 
                  className="w-full h-auto object-contain bg-white p-4"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Initial design sketches</p>
                </div>
              </div>
            </div>

            {/* Technical Images Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243Gearbox} 
                  alt="Planetary gearbox CAD model" 
                  className="w-full h-auto object-cover bg-muted/20"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Planetary gearbox CAD</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243HexapodDrawing} 
                  alt="Hexapod base assembly technical drawing" 
                  className="w-full h-auto object-cover bg-white"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Hexapod base assembly technical drawing</p>
                </div>
              </div>
            </div>

            {/* Project Write-Up */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Camera className="w-8 h-8 text-accent" />
                Design Process
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                For this project, my team developed a long-reach robotic camera arm capable of producing smooth, 
                repeatable motion for sports-focused filming. I contributed across the mechanical design process—from 
                early research and specification development to CAD modelling and gearbox design. This experience 
                strengthened my understanding of how structured engineering workflows translate into functional 
                robotic systems, reinforcing the kind of work I hope to pursue professionally.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                My work included exploring drive mechanisms, selecting materials, performing torque and motion analysis, 
                and designing custom planetary gearboxes to meet joint-specific requirements. The final design integrated 
                multi-stage gear reduction, a stable hexapod base, and stepper-motor-driven joints tailored to 
                cinematic motion control.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">Design Outline</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">1. Research & Problem Definition</p>
                  <p className="text-sm text-muted-foreground">Analyzed existing systems (UR5, Franka Panda, Kinova Gen3) to establish engineering requirements for an affordable, hobbyist-friendly solution.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">2. Ideation & Selection</p>
                  <p className="text-sm text-muted-foreground">Generated seven candidate concepts using structured methods. Selected a 5-DOF planetary gear design through weighted decision matrix evaluation.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">3. Kinematic Modeling</p>
                  <p className="text-sm text-muted-foreground">Implemented Python-based dynamic model to derive torque specifications and validate motor/gearbox combinations with safety margins.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">4. Detailed Design & CAD</p>
                  <p className="text-sm text-muted-foreground">Developed SolidWorks assemblies for hexapod base, planetary gearboxes, and structural components using 6061 aluminum and 42CrMo4 steel.</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mb-16 p-6 rounded-xl bg-secondary/30 border border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">Design Specifications Document</h3>
                  <p className="text-sm text-muted-foreground">Download the complete design specifications and technical documentation</p>
                </div>
                <a href="/MIE243-Design-Specifications.pdf" download>
                  <Button className="gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>

            {/* Key Contributions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Cog className="w-8 h-8 text-accent" />
                Key Contributions
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Research and specification development",
                  "CAD modeling in SolidWorks",
                  "Custom planetary gearbox design",
                  "Torque and motion analysis",
                  "Material selection optimization",
                  "Multi-stage gear reduction integration",
                  "Hexapod base stability design",
                  "Stepper motor joint configuration"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
                    <span className="text-accent font-bold">▸</span>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-primary mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["SolidWorks", "Motion Control", "Mechanical Design", "Gear Systems", "Torque Analysis", "Stepper Motors", "CAD Modeling", "FEA", "Kinematics"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Reflection */}
            <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-4">Reflection</h3>
              <p className="text-muted-foreground leading-relaxed">
                This experience strengthened my skills in collaborative engineering, conceptual 
                design, and robotics systems—foundational skills that I aim to continue developing 
                in my career. The project demonstrated the importance of systematic design 
                approaches and cross-disciplinary teamwork in achieving complex engineering goals.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MIE243Project;