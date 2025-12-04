import { ArrowLeft, Camera, Cog, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import mie243Hexapod from "@/assets/projects/mie243-hexapod.png";
import mie243Robot from "@/assets/projects/mie243-robot.png";
import mie243Sketch from "@/assets/projects/mie243-sketch.png";

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

            {/* Image Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243Robot} 
                  alt="Camera robot CAD model" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Mobile platform with camera mount system</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={mie243Hexapod} 
                  alt="Hexapod base design" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Hexapod base with articulated arm design</p>
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
                For this project, my team developed a long-reach robotic camera arm capable of 
                producing smooth, repeatable motion for sports-focused filming. I contributed 
                across the mechanical design process—from early research and specification 
                development to CAD modelling and gearbox design.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                My work included exploring drive mechanisms, selecting materials, performing 
                torque and motion analysis, and designing custom planetary gearboxes to meet 
                joint-specific requirements. The final design integrated multi-stage gear 
                reduction, a stable hexapod base, and a series of stepper-motor-driven joints 
                tailored to cinematic motion control.
              </p>
            </div>

            {/* Sketch Image */}
            <div className="mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card">
                <img 
                  src={mie243Sketch} 
                  alt="Design sketches and annotations" 
                  className="w-full h-auto object-contain bg-white p-4"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Initial design sketches showing articulated arm concept with motor placement and belt drive system</p>
                </div>
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
                {["SolidWorks", "Motion Control", "Mechanical Design", "Gear Systems", "Torque Analysis", "Stepper Motors", "CAD Modeling"].map((tech) => (
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
