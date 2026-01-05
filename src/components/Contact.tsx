import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'iurykeller54@gmail.com',
      href: 'mailto:iurykeller54@gmail.com',
      color: 'hover:text-red-400',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 51 99355-1901',
      href: 'https://wa.me/5551993551901',
      color: 'hover:text-green-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/iurykeller',
      href: 'https://www.linkedin.com/in/iurykeller/',
      color: 'hover:text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '/iurykeller',
      href: 'https://github.com/iurykeller',
      color: 'hover:text-purple-400',
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2">&lt;contato&gt;</p>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle mx-auto">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground text-lg mb-8"
          >
            {t('contact.desc')}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-12"
          >
            <MapPin className="h-5 w-5 text-primary" />
            <span>{t('contact.location')}</span>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-2xl bg-card border border-border/50 text-center group transition-all duration-300 card-hover ${contact.color}`}
              >
                <div className="inline-flex p-4 rounded-xl bg-secondary mb-4 group-hover:shadow-lg transition-shadow">
                  <contact.icon className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold mb-1">{contact.label}</h3>
                <p className="text-sm text-muted-foreground">{contact.value}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="mailto:iurykeller54@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-primary-foreground font-semibold text-lg shadow-glow hover:opacity-90 transition-opacity"
            >
              <Mail className="h-5 w-5" />
              iurykeller54@gmail.com
            </a>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-sm font-mono text-primary text-center mt-12"
        >
          &lt;/contato&gt;
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
