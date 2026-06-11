import { Code, Database, Cog, Layers } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building responsive, performant web applications using React, Next.js, and modern UI frameworks.',
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Designing robust APIs and database architectures with Node.js, Express, and SQL/NoSQL databases.',
  },
  {
    icon: Cog,
    title: 'API Integrations',
    description: 'Connecting third-party services like Stripe, Amazon APIs, and authentication providers seamlessly.',
  },
  {
    icon: Layers,
    title: 'Full Stack Solutions',
    description: 'End-to-end development of scalable, secure, and maintainable web applications.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I offer</p>
            <h2 className="section-heading">Services</h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
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

export default Services;
