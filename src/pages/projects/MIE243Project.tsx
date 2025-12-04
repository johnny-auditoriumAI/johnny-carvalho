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
              
              <h3 className="text-xl font-semibold text-primary mb-4">Problem Definition & Research</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                The project addressed a gap in the cinematography industry: the lack of affordable, accessible robotic arms 
                for hobbyist filmmakers. Professional systems like track-mounted dollies and Steadicams are expensive, heavy, 
                and require skilled operators. Our goal was to create a long-reach robotic arm that offers smooth, repeatable 
                motion while remaining affordable (under $5,000 CAD) and easy to assemble.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Extensive research was conducted on existing systems including Universal Robots UR5/UR10, Franka Emika Panda, 
                and Kinova Gen3. We analyzed drive mechanisms, gear reduction systems, material selection, motor configurations, 
                camera-mounting interfaces, and safety features to establish engineering requirements.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">Ideation & Candidate Selection</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                The ideation phase produced seven candidate concepts through structured methods including Black Box modeling, 
                Blue-Sky Thinking, Morph Chart development, and SCAMPER iteration. Designs were evaluated using multi-voting, 
                pair-wise objective comparison, and a weighted decision matrix against eight key objectives: stability, reach 
                (≥1m radius), degrees of freedom, vibration control (≤3 Hz), motion speed, and assembly requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Design 6—a multi-DOF robotic arm with planetary gear transmissions—was selected for its optimal balance of 
                stability, workspace size, dynamic capability, and feasibility. Subsequent refinement led to a 5-DOF 
                configuration (eliminating redundant freedom) with a redesigned hexapod base for enhanced stability and portability.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">Kinematic & Dynamic Modeling</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                A full kinematic and dynamic model was implemented in Python using the Product of Exponentials (POE) formulation. 
                The model evaluated gravity loads and joint speed requirements across the robot's workspace to derive torque 
                specifications: J2 (Shoulder Pitch) at 271 N·m design torque, J3 (Elbow Pitch) at 104.1 N·m, and J5 (Wrist Pitch) 
                at 19.7 N·m. A 1.5× safety margin was applied to account for modeling uncertainties.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">Motor & Gearbox Selection</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Motor selection was driven by the torque analysis. NEMA 34 motors (4.5 N·m) were specified for the high-torque 
                shoulder joint with a 76:1 gear ratio. NEMA 23 motors (4.24 N·m) power the elbow with 36:1 reduction, while 
                compact NEMA 17 motors (0.6 N·m) handle the wrist pitch with 26:1 gearing. Planetary gearboxes were chosen 
                for their compact size, low backlash, and high torque density—critical for smooth cinematic motion.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">Materials & Manufacturing</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Structural components use 6061-T6 aluminum for its strength-to-weight ratio and machinability. Gear trains 
                are fabricated from 42CrMo4 steel, which exceeds bending and contact stress requirements. ABS housings provide 
                lightweight protection for internal components while reducing cost. The final cost of $3,713.52 CAD came in 
                well under the $5,000 budget, demonstrating feasibility for hobbyist cinematographers.
              </p>
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