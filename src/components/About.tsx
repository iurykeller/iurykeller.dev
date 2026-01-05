import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, BookOpen, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      icon: GraduationCap,
      title: t('about.edu.cs'),
      status: t('about.edu.cs.status'),
      color: 'text-primary',
    },
    {
      icon: Award,
      title: t('about.edu.auto'),
      status: t('about.edu.auto.status'),
      color: 'text-accent',
    },
    {
      icon: Code2,
      title: t('about.edu.fullstack'),
      status: t('about.edu.fullstack.status'),
      color: 'text-primary',
    },
    {
      icon: BookOpen,
      title: t('about.edu.crescer'),
      status: t('about.edu.crescer.status'),
      color: 'text-accent',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <p className="text-sm font-mono text-primary mb-2">&lt;sobre&gt;</p>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle mb-8">{t('about.subtitle')}</p>

            <div className="space-y-6 text-muted-foreground">
              <motion.p variants={itemVariants} className="leading-relaxed">
                {t('about.p1')}
              </motion.p>
              <motion.p variants={itemVariants} className="leading-relaxed">
                {t('about.p2')}
              </motion.p>
            </div>

            <motion.p variants={itemVariants} className="text-sm font-mono text-primary mt-8">
              &lt;/sobre&gt;
            </motion.p>
          </motion.div>

          {/* Education Cards */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              {t('about.education')}
            </h3>

            <div className="grid gap-4">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="p-5 rounded-xl bg-card border border-border/50 card-hover group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-secondary ${item.color}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{item.status}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
