import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Users, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const hardSkills = [
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git/GitHub', level: 75 },
    { name: 'Linux', level: 70 },
    { name: 'SQL', level: 65 },
    { name: 'Python', level: 60 },
  ];

  const softSkills = [
    t('soft.problemSolving'),
    t('soft.communication'),
    t('soft.organization'),
    t('soft.teamwork'),
    t('soft.proactive'),
    t('soft.adaptability'),
  ];

  const languages = [
    { name: t('lang.portuguese'), level: t('lang.portuguese.level'), percentage: 100 },
    { name: t('lang.english'), level: t('lang.english.level'), percentage: 65 },
    { name: t('lang.french'), level: t('lang.french.level'), percentage: 30 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 relative bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2">&lt;skills&gt;</p>
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle mx-auto">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Hard Skills */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">{t('skills.hard')}</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="p-4 rounded-xl bg-card border border-border/50"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full gradient-bg rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills & Languages */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Soft Skills */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Users className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold">{t('skills.soft')}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">{t('skills.languages')}</h3>
              </div>

              <div className="space-y-4">
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    variants={itemVariants}
                    className="p-4 rounded-xl bg-card border border-border/50"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 1 }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-sm font-mono text-primary text-center mt-12"
        >
          &lt;/skills&gt;
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
