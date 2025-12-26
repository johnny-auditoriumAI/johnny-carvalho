import { ArrowLeft, Lightbulb, TrendingUp, Target, Users, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import dotSlide1 from "@/assets/projects/dot-energy-slide1.jpg";
import dotSlide2 from "@/assets/projects/dot-energy-slide2.jpg";
import dotSlide3 from "@/assets/projects/dot-energy-slide3.jpg";
import dotSlide4 from "@/assets/projects/dot-energy-slide4.jpg";
import dotSlide5 from "@/assets/projects/dot-energy-slide5.jpg";
import dotSlide6 from "@/assets/projects/dot-energy-slide6.jpg";

const DOTEnergyProject = () => {
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
            <Badge variant="outline" className="mb-4">JRE410 • Markets & Competitive Strategy</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              DOT Energy Industry Analysis
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Co-founded an early-stage consumer product new market venture, conducting competitive 
              analysis and customer segmentation to assess commercial viability.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Sep. – Dec. 2025 • Founding Team</p>
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
                DOT Energy is Brazil's pioneering energy candy startup that identified a gap in the 
                traditional energy consumables market. Each DOT candy contains 40mg of caffeine and 
                300mg of taurine, delivering energy through oral absorption in just 5 minutes. This 
                project focused on developing a comprehensive marketing strategy to introduce the 
                brand to the Canadian market.
              </p>
            </div>

            {/* Main Slide Image */}
            <div className="mb-12">
              <div className="rounded-xl shadow-lg border border-border bg-card overflow-hidden">
                <img 
                  src={dotSlide1} 
                  alt="DOT Energy Marketing Plan Cover" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-accent" />
                Key Achievements
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-accent/10 border border-accent/20 text-center">
                  <p className="text-4xl font-bold text-accent mb-2">$50K</p>
                  <p className="text-sm text-muted-foreground">Seed Budget Constraint</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">Year 1</p>
                  <p className="text-sm text-muted-foreground">Break-Even Target</p>
                </div>
                <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">$1.2M</p>
                  <p className="text-sm text-muted-foreground">Year 3 Operating Profit</p>
                </div>
              </div>
            </div>

            {/* Product Features Slide */}
            <div className="mb-12">
              <div className="rounded-xl shadow-lg border border-border bg-card overflow-hidden">
                <img 
                  src={dotSlide2} 
                  alt="DOT Energy Product Features" 
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium text-center">Product Features & Value Proposition</p>
                </div>
              </div>
            </div>

            {/* Problem Statement Slide */}
            <div className="mb-12">
              <div className="rounded-xl shadow-lg border border-border bg-card overflow-hidden">
                <img 
                  src={dotSlide3} 
                  alt="The Problem - Pain Points" 
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium text-center">Market Pain Points Analysis</p>
                </div>
              </div>
            </div>

            {/* Market Analysis Slide */}
            <div className="mb-12">
              <div className="rounded-xl shadow-lg border border-border bg-card overflow-hidden">
                <img 
                  src={dotSlide4} 
                  alt="Market Analysis" 
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium text-center">Market Size & Competitive Landscape</p>
                </div>
              </div>
            </div>

            {/* SWOT & Segmentation Slides */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={dotSlide5} 
                  alt="SWOT Analysis" 
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">SWOT Analysis</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                <img 
                  src={dotSlide6} 
                  alt="Market Segmentation" 
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground">Market Segmentation</p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-accent" />
                Strategic Approach
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                The Canadian energy consumables market presents significant opportunities, valued at 
                $5.72 billion in 2024 and projected to reach $12.3 billion by 2035. Our team adopted 
                a Differentiation Focus Strategy, leveraging DOT's unique product innovation to target 
                high-value market segments: university students and young office workers.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-4">My Contributions</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">Competitive Analysis</p>
                  <p className="text-sm text-muted-foreground">Conducted Porter's Five Forces analysis and competitive landscape mapping to assess market attractiveness.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">Customer Segmentation</p>
                  <p className="text-sm text-muted-foreground">Identified and profiled target segments: 2.2M post-secondary students and 1M+ young professionals in Canada.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">Financial Modeling</p>
                  <p className="text-sm text-muted-foreground">Built unit economics model with pricing strategy ($19.99-$22.99 per 20-sachet pack), demonstrating path to profitability.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/20 border border-border">
                  <p className="font-medium text-foreground mb-1">Strategic Recommendations</p>
                  <p className="text-sm text-muted-foreground">Presented go-to-market strategy under $50,000 seed-budget constraint, simulating founder-level decision-making.</p>
                </div>
              </div>
            </div>

            {/* Target Market */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-accent" />
                Target Market
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-3">High-Performance Students</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 2.2 Million students in Canada</li>
                    <li>• Ages 17-26, on-campus</li>
                    <li>• Spend $20-25/week on caffeine</li>
                    <li>• Value affordability, portability, health</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                  <h3 className="text-lg font-semibold text-primary mb-3">Young Professionals</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 1M+ Gen-Z in Canadian workforce</li>
                    <li>• Ages 22-28, high income ($85k-$150k+)</li>
                    <li>• Junior stage career</li>
                    <li>• Value discretion, professionality, health</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mb-16 p-6 rounded-xl bg-secondary/30 border border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">Marketing Plan Document</h3>
                  <p className="text-sm text-muted-foreground">Download the complete marketing strategy presentation</p>
                </div>
                <a href="/Marketing_Plan_1.pdf" download>
                  <Button className="gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-primary mb-4">Skills & Methods</h3>
              <div className="flex flex-wrap gap-2">
                {["Market Analysis", "Competitive Strategy", "Financial Modeling", "Customer Segmentation", "Pricing Strategy", "Go-to-Market", "Business Case Development", "Strategic Planning"].map((tech) => (
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
                This project provided hands-on experience in founder-level decision-making within 
                an ambiguous environment. Working under resource constraints forced creative 
                problem-solving and prioritization—skills essential for entrepreneurship and 
                strategic roles in technology companies.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DOTEnergyProject;