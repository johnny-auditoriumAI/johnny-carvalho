import { ArrowLeft, Cat, Github, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import catVision1 from "@/assets/projects/catvision-detection1.png";
import catVision2 from "@/assets/projects/catvision-detection2.png";

const CatVisionProject = () => {
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
            <Badge variant="outline" className="mb-4">Personal Project</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Cat Vision
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A computer vision system for pet monitoring, showcasing user-centered product design 
              and independent problem-solving with an entrepreneurial mindset.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a 
                href="https://github.com/johnny-carp0s/Cat_Vision" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </Button>
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
                <Lightbulb className="w-8 h-8 text-accent" />
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This section highlights a personal project where I explored user-centered product 
                design and independent problem-solving. It represents my entrepreneurial mindset 
                and my interest in developing practical, creative solutions outside the classroom.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={catVision2} 
                  alt="Cat detection system in action" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Real-time cat detection with 77% confidence</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={catVision1} 
                  alt="Animal detection demonstration" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Multi-animal detection capabilities</p>
                </div>
              </div>
            </div>

            {/* Project Write-Up */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Cat className="w-8 h-8 text-accent" />
                Development Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Cat Vision began as a curiosity-driven idea and evolved into a functional product 
                that integrates hardware, software, and user-focused design. The project involved 
                identifying a specific user need, prototyping a solution, iterating based on real 
                use, and communicating the project publicly.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Working independently allowed me to build both the technical system and the 
                surrounding narrative—critical skills for entrepreneurship and product development. 
                The system uses computer vision algorithms to detect and track pets in real-time, 
                providing owners with valuable insights into their pets' behavior patterns.
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-accent" />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Real-time pet detection and tracking",
                  "Computer vision algorithm implementation",
                  "Hardware-software integration",
                  "User-centered interface design",
                  "Iterative prototyping approach",
                  "Independent project management",
                  "Public documentation and presentation",
                  "Scalable system architecture"
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
                {["Python", "Computer Vision", "OpenCV", "Machine Learning", "Hardware Integration", "UI/UX Design", "Git"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            <div className="mb-16 p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Explore the Code</h3>
                  <p className="text-muted-foreground">View the complete source code and documentation on GitHub</p>
                </div>
                <Button asChild size="lg">
                  <a 
                    href="https://github.com/johnny-carp0s/Cat_Vision" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    View Repository
                  </a>
                </Button>
              </div>
            </div>

            {/* Reflection */}
            <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-4">Reflection</h3>
              <p className="text-muted-foreground leading-relaxed">
                This project reinforced my interest in designing accessible, purposeful technologies 
                and demonstrated my ability to initiate and execute complete product ideas from 
                concept through public presentation. It showcases the entrepreneurial spirit and 
                technical capabilities that I aim to bring to future roles in product development 
                and technology startups.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CatVisionProject;
