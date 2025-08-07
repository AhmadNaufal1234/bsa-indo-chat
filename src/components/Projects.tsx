import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce modern dengan fitur lengkap, payment gateway, dan admin dashboard yang komprehensif.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan real-time collaboration, notifications, dan analytics dashboard.",
      technologies: ["Next.js", "TypeScript", "Prisma", "tRPC"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Learning Management System",
      description: "Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard cuaca real-time dengan visualisasi data, forecasting, dan notifikasi cuaca ekstrem.",
      technologies: ["React", "D3.js", "Weather API", "PWA"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Tool analytics untuk social media dengan sentiment analysis dan reporting otomatis.",
      technologies: ["Python", "FastAPI", "Machine Learning", "Chart.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio personal dengan animasi modern, dark mode, dan performance optimization.",
      technologies: ["React", "Tailwind", "Framer Motion", "Vite"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Portfolio <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beberapa proyek yang telah saya kerjakan, menampilkan keahlian dan kreativitas 
            dalam pengembangan aplikasi web modern.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Proyek Unggulan</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card-gradient border-border shadow-elegant hover:glow-primary transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Proyek Lainnya</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card-gradient border-border shadow-elegant hover:glow-accent transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                  <div className="flex space-x-2">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Tertarik Berkolaborasi?</h3>
            <p className="text-muted-foreground mb-6">
              Saya selalu terbuka untuk proyek baru dan kesempatan kolaborasi yang menarik.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 glow-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mari Berdiskusi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
