import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Folder, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: t('projects.law.title'),
      description: t('projects.law.desc'),
      status: 'completed',
      statusLabel: t('projects.status.completed'),
      tags: ['React', 'Tailwind CSS', 'Responsivo', 'SEO'],
      gradient: 'from-primary/20 to-accent/20',
      icon: '⚖️',
    },
    {
      title: t('projects.music.title'),
      description: t('projects.music.desc'),
      status: 'development',
      statusLabel: t('projects.status.development'),
      tags: ['React', 'Node.js', 'API', 'Streaming'],
      gradient: 'from-accent/20 to-primary/20',
      icon: '🎵',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2">&lt;projetos&gt;</p>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle mx-auto">{t('projects.subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 card-hover overflow-hidden">
                {/* Project Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-xl bg-secondary text-3xl">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.status === 'completed' ? (
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    ) : (
                      <Clock className="h-5 w-5 text-primary" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        project.status === 'completed' ? 'text-accent' : 'text-primary'
                      }`}
                    >
                      {project.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-sm font-mono text-primary text-center mt-12"
        >
          &lt;/projetos&gt;
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
