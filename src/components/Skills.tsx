import { 
  Code2, 
  Database, 
  Server, 
  Shield, 
  Terminal, 
  Layout,
  Languages,
  Plug,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Languages,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React.js', 'Next.js', 'Redux', 'Ant Design', 'Material UI', 'Base Web', 'Styled Components', 'DOM/JavaScript'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Sequelize', 'Mongoose', 'Keycloak', 'Kafka', 'Redis'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'ClickHouse'],
  },
  {
    title: 'Integrations',
    icon: Plug,
    skills: ['Stripe', 'Amazon SP-API', 'Keycloak Auth', 'AWeber', 'Salesforce', 'ONDC', '3PL (Uber, Ola, Qwqer)', 'Swiggy', 'Zomato'],
  },
  {
    title: 'DevOps & Tools',
    icon: Terminal,
    skills: ['Docker', 'Git', 'Bitbucket', 'GitHub', 'Ubuntu', 'Postman', 'Jira', 'Grafana', 'Workbench', 'DBeaver', 'Vercel', 'Terminus', 'FileZilla'],
  },
  {
    title: 'AI & Editors',
    icon: Code2,
    skills: ['VS Code', 'Claude Code', 'Cursor', 'ElevenLabs AI Voices'],
  },
  {
    title: 'Practices',
    icon: Shield,
    skills: ['Microservices', 'Agile/Scrum', 'Chrome Extensions', 'Observability'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      <div className="absolute inset-0 hero-glow opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">What I work with</p>
            <h2 className="section-heading">Technical Skills</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-secondary/50 border border-border/30 text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
