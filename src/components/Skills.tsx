import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 70 }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Keahlian <span className="text-gradient">Teknis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital yang inovatif
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-card-gradient p-8 rounded-2xl border border-border shadow-elegant hover:glow-primary transition-smooth animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card-gradient p-8 rounded-2xl border border-border shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Selalu Belajar & Berkembang</h3>
            <p className="text-muted-foreground mb-6">
              Dunia teknologi terus berkembang, dan saya selalu antusias untuk mempelajari 
              teknologi baru dan meningkatkan keahlian yang sudah ada.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Machine Learning", "DevOps", "GraphQL", "React Native", 
                "Kubernetes", "Microservices", "CI/CD", "Web3"
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-smooth"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;