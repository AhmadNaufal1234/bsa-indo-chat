import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Menulis kode yang bersih, terstruktur, dan mudah dipelihara"
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Menciptakan antarmuka yang indah dan pengalaman pengguna yang intuitif"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Mengoptimalkan aplikasi untuk kecepatan dan efisiensi maksimal"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Bekerja sama dengan tim untuk mencapai hasil terbaik"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tentang <span className="text-gradient">Saya</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Saya adalah developer yang passionate dengan teknologi modern dan selalu 
            eager untuk belajar hal-hal baru dalam dunia programming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Pengalaman & Keahlian</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Dengan pengalaman lebih dari 3 tahun dalam pengembangan web, saya telah 
              mengerjakan berbagai proyek mulai dari aplikasi web sederhana hingga 
              sistem enterprise yang kompleks.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Saya memiliki passion yang besar dalam menciptakan solusi digital yang 
              tidak hanya fungsional, tetapi juga memberikan pengalaman yang luar biasa 
              bagi pengguna akhir.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Frontend: React, TypeScript, Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Backend: Node.js, Python, PostgreSQL</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Tools: Git, Docker, AWS, Figma</span>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card-gradient border-border hover:glow-primary transition-smooth group cursor-pointer"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;