import { ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'AMZ Admin Dashboard',
    description: 'Admin-only system for managing Amazon deals and Stripe-based subscription auditing with comprehensive analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'AMZ Users Dashboard',
    description: 'Subscription-based access to deals with integrated ASIN Checker Chrome Extension for Amazon sellers.',
    tech: ['React', 'Next.js', 'MongoDB', 'Chrome Extension'],
  },
  {
    title: 'AMZ Infinity Chrome Extension',
    description: 'Multi-tool for Amazon sellers featuring Keepa graphs, ROI calculator, IP checks, and FBA/FBM calculator.',
    tech: ['JavaScript', 'Chrome Extension API', 'React'],
  },
  {
    title: 'TheFunnelGuru Invoice Automation',
    description: 'Integrates 140+ e-commerce platforms with OCR, Keycloak auth, AWeber, Salesforce, and Kanban workflow.',
    tech: ['React', 'Node.js', 'Keycloak', 'Salesforce'],
  },
  {
    title: 'Maxyfi Debt Collection CRM',
    description: 'Role-based CRM with automation rules, comprehensive reporting, and real-time activity tracking.',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Adloggs Dispatch Platform',
    description: 'Cost-optimized delivery management with delay prediction, 3PL switching, and intelligent routing.',
    tech: ['Node.js', 'TypeScript', 'MySQL', 'REST APIs'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 hero-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I've built</p>
            <h2 className="section-heading">Featured Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Folder className="w-6 h-6 text-primary" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
