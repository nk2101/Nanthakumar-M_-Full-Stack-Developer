import { GraduationCap, Lightbulb, Users, Target } from 'lucide-react';

const qualities = [
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Strong analytical mindset with a passion for finding elegant solutions to complex challenges.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Excellent collaboration skills with a focus on clear communication and shared success.',
  },
  {
    icon: Target,
    title: 'Result Oriented',
    description: 'Determined and reliable, always committed to delivering high-quality, maintainable code.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Get to know me</p>
            <h2 className="section-heading">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Full Stack Software Developer with over 3.5 years of experience in building
                scalable web applications and robust backend systems. My expertise spans across
                modern JavaScript frameworks and databases.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm naturally curious and always eager to expand my knowledge. I believe in
                continuous learning and staying updated with the latest technologies and best
                practices in software development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond technical skills, I value integrity, reliability, and teamwork. I thrive
                in collaborative environments where ideas are shared freely and everyone works
                towards a common goal.
              </p>

              {/* Education */}
              <div className="mt-8 p-6 glass-card rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Education</h3>
                    <p className="text-foreground font-medium">Bachelor of Engineering</p>
                    <p className="text-muted-foreground">Karpagam Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">Graduated 2019</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Qualities */}
            <div className="space-y-6">
              {qualities.map((quality, index) => (
                <div
                  key={quality.title}
                  className="p-6 glass-card rounded-xl hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <quality.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{quality.title}</h3>
                      <p className="text-muted-foreground">{quality.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
