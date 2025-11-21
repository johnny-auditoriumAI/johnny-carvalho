import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Interested in collaboration or have a question? Let's connect!
        </p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I'm always open to 
                discussing new opportunities, projects, or collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:johnny.campos@utoronto.ca"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">johnny.campos@utoronto.ca</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/johnnycampos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                </div>
              </a>

              <a 
                href="https://github.com/johnnycampos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">View my code and projects</p>
                </div>
              </a>
            </div>

            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-border focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="border-border focus:border-accent resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
