import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Halo, Saya{" "}
            <span className="text-gradient">Developer</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Passionate Full Stack Developer yang menciptakan solusi digital inovatif 
            dan pengalaman web yang luar biasa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow-primary transition-smooth group"
              onClick={() => scrollToSection('projects')}
            >
              Lihat Portfolio
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => scrollToSection('contact')}
            >
              Hubungi Saya
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-fade-in">
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Developer workspace"
              className="rounded-2xl shadow-elegant w-full h-auto transform hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-card-gradient p-4 rounded-xl border border-border shadow-elegant animate-glow">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Tersedia untuk proyek</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;