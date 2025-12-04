import { ArrowLeft, Activity, Users, Heart, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aps112Device from "@/assets/projects/aps112-device.png";

const APS112Project = () => {
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
            <Badge variant="outline" className="mb-4">APS112 Project • UHN Partnership</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Smart Sleep Monitoring Device
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A multidisciplinary design project completed in partnership with the University Health 
              Network (UHN), focusing on user needs, system requirements, and real-world healthcare constraints.
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
                <Heart className="w-8 h-8 text-accent" />
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This section presents a multidisciplinary design project completed in partnership 
                with the University Health Network (UHN). Working with Dr. Tatyana Mollayeva from the 
                Kite Research Institute, our team designed a sleep tracking system for retired adults 
                aged 65-75. This project emphasized my ability to work in a structured design environment 
                focused on user needs, stakeholder requirements, and real-world healthcare constraints.
              </p>
            </div>

            {/* Main Image */}
            <div className="mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={aps112Device} 
                  alt="Sleep monitoring device CAD renders" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground text-center">Smart-Slumber PJs concept renders showing wearable sensor boxes and charging mat</p>
                </div>
              </div>
            </div>

            {/* Project Write-Up */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Activity className="w-8 h-8 text-accent" />
                Design Process
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                In APS112, my team partnered with UHN to design a sleep monitoring system addressing 
                a gap in the market: the lack of affordable, easy-to-use sleep trackers for retired adults. 
                I contributed to developing functional requirements, conducting stakeholder analysis, and 
                participating in concept generation and selection. This experience reinforced my interest 
                in user-centered product design within healthcare contexts.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Our final concept—the Smart-Slumber PJs—features wearable sensor boxes integrated into 
                pajamas that measure heart rate, oxygen levels, body temperature, and movement. The design 
                prioritized accessibility, accuracy (≥95% compared to clinical devices), and affordability 
                (under $68 CAD) for the target demographic.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">Design Outline</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">1. Problem Definition & Stakeholder Analysis</p>
                  <p className="text-sm text-muted-foreground">Identified gaps in existing solutions and mapped key stakeholders including family members, sleep research organizations, and medical insurance companies.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">2. Requirements Engineering</p>
                  <p className="text-sm text-muted-foreground">Developed detailed functions, objectives, and constraints including weight limits (&lt;2.3kg), non-invasiveness, and accessibility standards for elderly users.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">3. Ideation & Selection</p>
                  <p className="text-sm text-muted-foreground">Generated 119 ideas through brainstorming and morphological charts. Narrowed to 3 designs using multi-voting, graphical decision charts, and weighted decision matrix.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">4. Final Design & Specification</p>
                  <p className="text-sm text-muted-foreground">Selected Smart-Slumber PJs using Pugh chart analysis. Developed detailed CAD models, component specifications, and success metrics.</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mb-16 p-6 rounded-xl bg-secondary/30 border border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">Design Specifications Document</h3>
                  <p className="text-sm text-muted-foreground">Download the complete conceptual design specifications</p>
                </div>
                <a href="/APS112-Design-Specifications.pdf" download>
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
                <Users className="w-8 h-8 text-accent" />
                Key Contributions
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Functional requirements development",
                  "Environmental analysis",
                  "Stakeholder needs assessment",
                  "Concept generation sessions",
                  "Design selection methodology",
                  "User-centered design principles",
                  "Healthcare compliance considerations",
                  "Team collaboration and communication"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
                    <span className="text-accent font-bold">▸</span>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Priorities */}
            <div className="mb-16 grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">♿</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">Designed for retired adults with varying mobility and technical comfort levels</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Accuracy</h3>
                <p className="text-sm text-muted-foreground">Reliable physiological measurements for meaningful sleep analysis</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Ease of Use</h3>
                <p className="text-sm text-muted-foreground">Intuitive interface and minimal setup requirements</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-primary mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Arduino", "Biometric Sensors", "Data Analysis", "Healthcare Tech", "User Research", "Prototyping", "Requirements Engineering"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Partnership Info */}
            <div className="mb-16 p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">University Health Network Partnership</h3>
                  <p className="text-muted-foreground">Real-world healthcare collaboration</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Working with UHN provided invaluable exposure to real healthcare stakeholders 
                and the rigorous requirements of medical device design, including patient safety, 
                data privacy, and clinical efficacy considerations.
              </p>
            </div>

            {/* Reflection */}
            <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-4">Reflection</h3>
              <p className="text-muted-foreground leading-relaxed">
                This project strengthened my ability to design within constraints, integrate user 
                needs into engineering decisions, and collaborate effectively through a full 
                conceptual design cycle. These skills directly support my long-term goals in 
                product-driven engineering roles, particularly in healthcare and wellness technology.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APS112Project;
