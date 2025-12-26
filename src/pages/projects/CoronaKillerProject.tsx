import { ArrowLeft, Zap, Code, Shield, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import coronaKiller1 from "@/assets/projects/corona-killer-1.png";
import coronaKiller2 from "@/assets/projects/corona-killer-2.png";
import coronaKiller3 from "@/assets/projects/corona-killer-3.png";

const CoronaKillerProject = () => {
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
            <Badge variant="outline" className="mb-4">Personal Project • Arduino</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              "Corona Killer" UV Disinfectant Station
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A time-based controller prototype for a UV light-emitting cabinet designed 
              for grocery disinfection during the COVID-19 pandemic.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Jun 2021 - Aug 2021</p>
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
                <Shield className="w-8 h-8 text-accent" />
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                During the height of the COVID-19 pandemic, I designed and built a UV disinfection 
                station to help sanitize groceries and household items. The project combined hardware 
                prototyping with embedded programming to create a practical solution for everyday 
                health concerns.
              </p>
            </div>

            {/* YouTube Video Embed */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-accent" />
                Demo Video
              </h2>
              <div className="rounded-xl shadow-lg border border-border overflow-hidden">
                <div className="relative pb-[56.25%] h-0">
                  <iframe 
                    src="https://www.youtube.com/embed/QiLc-XQkTQo"
                    title="Corona Killer UV Disinfectant Station Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Key Achievement */}
            <div className="mb-16">
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                <p className="text-5xl font-bold text-green-600 mb-2">99%</p>
                <p className="text-lg text-muted-foreground">Virus Disinfection Rate</p>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Build Process</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                  <img 
                    src={coronaKiller1} 
                    alt="UV Cabinet Construction - Interior lining" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-card">
                    <p className="text-sm text-muted-foreground">Reflective interior lining installation</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                  <img 
                    src={coronaKiller2} 
                    alt="UV Cabinet Construction - Electronics setup" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-card">
                    <p className="text-sm text-muted-foreground">Electronics integration and wiring</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={coronaKiller3} 
                  alt="Arduino programming" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Arduino microcontroller programming</p>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-accent" />
                Technical Implementation
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                The UV disinfection station uses ultraviolet-C (UVC) light to eliminate viruses 
                and bacteria on surfaces. I designed a time-based controller system that ensures 
                proper exposure duration for effective disinfection while maintaining user safety.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Key Features</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">Arduino-Based Controller</p>
                  <p className="text-sm text-muted-foreground">Developed C++ code to control timing sequences and safety interlocks for the UV light system.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">Reflective Interior</p>
                  <p className="text-sm text-muted-foreground">Lined the cabinet interior with reflective material to maximize UV light distribution and coverage.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">Timed Exposure System</p>
                  <p className="text-sm text-muted-foreground">Implemented precise timing controls to ensure optimal disinfection cycles for various item sizes.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">Safety Features</p>
                  <p className="text-sm text-muted-foreground">Integrated door sensors and automatic shutoff to prevent UV exposure to users.</p>
                </div>
              </div>
            </div>

            {/* Code Section */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-accent" />
                Development Process
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The embedded software was developed in C++ for the Arduino microcontroller. 
                The code manages the timing sequences, monitors the door sensor state, and 
                controls the UV lamp relay system. This project strengthened my skills in 
                embedded systems programming and hardware-software integration.
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-primary mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Arduino", "C++", "Embedded Systems", "UV-C Technology", "Electronics", "Hardware Prototyping", "Circuit Design", "Safety Systems"].map((tech) => (
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
                This project demonstrated my ability to identify real-world problems and develop 
                practical engineering solutions. Working through the pandemic, I was motivated to 
                contribute something meaningful to my family's safety. The project strengthened my 
                skills in embedded programming, electrical systems, and rapid prototyping—all while 
                solving a genuine problem in my community.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoronaKillerProject;