import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Adloggs Technologies Pvt Ltd',
    location: 'Coimbatore, TN',
    project: 'Logistics & Delivery Management Platform',
    period: 'May 2025 – April 2026',
    description: [
      'Developed and integrated backend APIs with ordering partners and 3PL providers, enabling seamless order flow across platforms.',
      'Designed scalable microservices powering ONDC Buyer and Seller journeys — catalog, order lifecycle, payment orchestration, and TSP integrations.',
      'Implemented Kafka-based distributed log processing and Grafana dashboards, reducing issue detection and troubleshooting time.',
      'Automated scheduled workflows using cron jobs, improving system efficiency and reducing manual intervention.',
      'Wrote optimized SQL queries and applied indexing strategies for high-volume MySQL tables.',
      'Built an AI voice calling system integrating ElevenLabs and Twilio for automated rider communication.',
    ],
    tech: ['Node.js', 'TypeScript', 'MySQL', 'Kafka', 'Docker', 'Grafana', 'ONDC'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Maxyfi Tech Pvt Ltd',
    location: 'Chennai, TN',
    project: 'Debt Collection CRM Platform',
    period: 'May 2024 – Feb 2025',
    description: [
      'Developed interactive and responsive web applications using React.js and Redux with cross-browser compatibility.',
      'Designed and implemented RESTful APIs and backend services using TypeScript and Node.js, focused on scalability and maintainability.',
      'Executed data migration for 200+ clients including notes, invoices, and payment plans with minimal downtime.',
      'Worked with MongoDB and PostgreSQL across CRM modules — client onboarding, invoice management, and payment scheduling.',
    ],
    tech: ['React.js', 'Redux', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Thilash Services Pvt Ltd',
    location: 'Chennai, TN',
    project: 'Amazon Seller Tools & SaaS Platform',
    period: 'Nov 2022 – May 2024',
    description: [
      'Built and maintained 4+ Chrome extensions and web dashboards for Amazon sellers — deals, restrictions, ROI calc, and workflow automation.',
      'Integrated Stripe to manage subscriptions and automate payment status updates (paid, unpaid, failed).',
      'Developed Amazon Seller Partner API integrations for real-time product data, brand/category approvals, and seller analytics.',
      'Implemented Keycloak authentication and role-based access control across a secure multi-tenant SaaS platform.',
      'Built an invoice automation tool integrating 140+ e-commerce sites with OCR, AWeber, Salesforce, and a Kanban tracking board.',
    ],
    tech: ['React.js', 'Node.js', 'Next.js', 'MongoDB', 'Keycloak', 'Stripe'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">My journey</p>
            <h2 className="section-heading">Work Experience</h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 mt-2">
                  <div className="timeline-dot" />
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8 md:pl-0`}>
                  <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    {/* Header */}
                    <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-xs text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Project */}
                    <p className={`text-sm font-medium text-foreground/80 mb-4 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                      {exp.project}
                    </p>

                    {/* Description */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? '' : 'md:text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
