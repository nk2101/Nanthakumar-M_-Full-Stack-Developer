import { ArrowDown, Github, Linkedin, Mail, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const coreStack = [
  { label: 'React', color: 'text-sky-300 border-sky-400/30 bg-sky-400/10' },
  { label: 'TypeScript', color: 'text-blue-300 border-blue-400/30 bg-blue-400/10' },
  { label: 'Node.js', color: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10' },
  { label: 'MongoDB', color: 'text-green-300 border-green-400/30 bg-green-400/10' },
  { label: 'Kafka', color: 'text-amber-300 border-amber-400/30 bg-amber-400/10' },
  { label: 'SQL', color: 'text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-400/10' },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-20 w-[24rem] h-[24rem] bg-accent/15 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          {/* Left: Intro */}
          <div className="animate-fade-in-up">
            <p className="text-primary/80 font-medium tracking-[0.3em] text-sm mb-6 uppercase">
              Hello, I'm
            </p>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-medium mb-4 leading-[1.05]">
              <span className="text-foreground">Nanthakumar </span>
              <span className="text-gradient italic">M</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
              Full Stack Software Developer
            </h2>

            <p className="text-base md:text-lg text-muted-foreground/90 max-w-xl mb-10 leading-relaxed">
              3.5+ years building scalable web apps and backend systems.
              Passionate about clean architecture, TypeScript, and developer tooling.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-lg shadow-primary/30">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border/60 bg-secondary/40 backdrop-blur hover:bg-secondary/70 px-8">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/nanthakumar-m-63029a167/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-card hover:border-primary/60 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-muted-foreground" />
              </a>
              <a
                href="mailto:nanthaakumar36@gmail.com"
                className="p-3 rounded-lg glass-card hover:border-primary/60 transition-all"
                aria-label="Email"
              >
                <Mail size={18} className="text-muted-foreground" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg glass-card hover:border-primary/60 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} className="text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Stats */}
            <div className="glass-card rounded-2xl p-6 grid grid-cols-3 gap-4">
              {[
                { value: '3.5+', label: 'Years exp.' },
                { value: '12+', label: 'Projects' },
                { value: '3', label: 'Companies' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-semibold text-foreground">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Core stack */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Core stack
              </p>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((tech) => (
                  <span
                    key={tech.label}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${tech.color}`}
                  >
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">Open to opportunities</p>
                <p className="text-xs text-muted-foreground">Coimbatore · Bengaluru · Chennai · Hyderabad · Kochi · Remote OK</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={22} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
