import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navbar
  'nav.about': { pt: 'Sobre', en: 'About' },
  'nav.experience': { pt: 'Experiência', en: 'Experience' },
  'nav.projects': { pt: 'Projetos', en: 'Projects' },
  'nav.skills': { pt: 'Habilidades', en: 'Skills' },
  'nav.contact': { pt: 'Contato', en: 'Contact' },
  
  // Hero
  'hero.greeting': { pt: 'Olá, eu sou', en: "Hi, I'm" },
  'hero.role': { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
  'hero.description': { 
    pt: 'Transformando ideias em soluções digitais de alta performance. Foco em código limpo, experiência do usuário e resultados reais.', 
    en: 'Transforming ideas into high-performance digital solutions. Focus on clean code, user experience, and real results.' 
  },
  'hero.cta.projects': { pt: 'Ver Projetos', en: 'View Projects' },
  'hero.cta.contact': { pt: 'Fale Comigo', en: 'Contact Me' },
  
  // About
  'about.title': { pt: 'Sobre Mim', en: 'About Me' },
  'about.subtitle': { pt: 'Conheça minha jornada', en: 'Get to know my journey' },
  'about.p1': { 
    pt: 'Desenvolvedor apaixonado por tecnologia com formação em Ciência da Computação e Técnico em Automação Industrial. Minha jornada combina a precisão técnica da automação com a criatividade do desenvolvimento de software.', 
    en: 'Developer passionate about technology with a background in Computer Science and Industrial Automation Technician. My journey combines the technical precision of automation with the creativity of software development.' 
  },
  'about.p2': { 
    pt: 'Atualmente cursando Full Stack Developer na OneBitCode e graduando em Ciência da Computação pela Estácio, busco constantemente aprimorar minhas habilidades e entregar soluções que fazem a diferença.', 
    en: 'Currently pursuing Full Stack Developer at OneBitCode and graduating in Computer Science at Estácio, I constantly seek to improve my skills and deliver solutions that make a difference.' 
  },
  'about.education': { pt: 'Formação', en: 'Education' },
  'about.edu.cs': { pt: 'Ciência da Computação', en: 'Computer Science' },
  'about.edu.cs.status': { pt: 'Cursando - Estácio', en: 'In Progress - Estácio' },
  'about.edu.auto': { pt: 'Técnico em Automação Industrial', en: 'Industrial Automation Technician' },
  'about.edu.auto.status': { pt: 'Concluído - SENAI RS', en: 'Completed - SENAI RS' },
  'about.edu.fullstack': { pt: 'Full Stack Developer', en: 'Full Stack Developer' },
  'about.edu.fullstack.status': { pt: 'Cursando - OneBitCode', en: 'In Progress - OneBitCode' },
  'about.edu.crescer': { pt: 'Programa Crescer', en: 'Crescer Program' },
  'about.edu.crescer.status': { pt: 'Concluído - CWI Software', en: 'Completed - CWI Software' },
  
  // Experience
  'experience.title': { pt: 'Experiência', en: 'Experience' },
  'experience.subtitle': { pt: 'Minha trajetória profissional', en: 'My professional journey' },
  'experience.tdk.title': { pt: 'Ajustador Mecânico', en: 'Mechanical Adjuster' },
  'experience.tdk.company': { pt: 'TDK Electronics do Brasil LTDA', en: 'TDK Electronics Brazil LTDA' },
  'experience.tdk.period': { pt: 'Jan 2020 - Presente', en: 'Jan 2020 - Present' },
  'experience.tdk.desc': { 
    pt: 'Atuação no diagnóstico e resolução de falhas técnicas, seguindo procedimentos padronizados. Registro e controle de ocorrências, organização de rotinas e comunicação técnica com diferentes áreas para garantir a continuidade das operações.', 
    en: 'Acting in diagnosis and resolution of technical failures, following standardized procedures. Recording and controlling occurrences, organizing routines, and technical communication with different areas to ensure operational continuity.' 
  },
  
  // Projects
  'projects.title': { pt: 'Projetos', en: 'Projects' },
  'projects.subtitle': { pt: 'Trabalhos que entregam resultados', en: 'Work that delivers results' },
  'projects.law.title': { pt: 'Site Institucional - Advocacia', en: 'Institutional Website - Law Firm' },
  'projects.law.desc': { 
    pt: 'Site profissional desenvolvido para um advogado divulgar seus serviços. Projeto completo do levantamento de requisitos à entrega, com foco em experiência do usuário e conversão de clientes.', 
    en: 'Professional website developed for a lawyer to promote their services. Complete project from requirements gathering to delivery, focusing on user experience and client conversion.' 
  },
  'projects.music.title': { pt: 'Aplicativo de Música', en: 'Music Application' },
  'projects.music.desc': { 
    pt: 'Sistema em desenvolvimento com foco em estruturação, lógica e evolução contínua. Aplicativo moderno para streaming e organização de músicas.', 
    en: 'System under development focused on structuring, logic, and continuous evolution. Modern app for streaming and music organization.' 
  },
  'projects.status.completed': { pt: 'Concluído', en: 'Completed' },
  'projects.status.development': { pt: 'Em Desenvolvimento', en: 'In Development' },
  'projects.view': { pt: 'Ver Projeto', en: 'View Project' },
  
  // Skills
  'skills.title': { pt: 'Habilidades', en: 'Skills' },
  'skills.subtitle': { pt: 'Tecnologias e competências', en: 'Technologies and competencies' },
  'skills.hard': { pt: 'Hard Skills', en: 'Hard Skills' },
  'skills.soft': { pt: 'Soft Skills', en: 'Soft Skills' },
  'skills.languages': { pt: 'Idiomas', en: 'Languages' },
  
  // Soft Skills
  'soft.problemSolving': { pt: 'Resolução de Problemas', en: 'Problem Solving' },
  'soft.communication': { pt: 'Comunicação Técnica', en: 'Technical Communication' },
  'soft.organization': { pt: 'Organização', en: 'Organization' },
  'soft.teamwork': { pt: 'Trabalho em Equipe', en: 'Teamwork' },
  'soft.proactive': { pt: 'Proatividade', en: 'Proactivity' },
  'soft.adaptability': { pt: 'Adaptabilidade', en: 'Adaptability' },
  
  // Languages
  'lang.portuguese': { pt: 'Português', en: 'Portuguese' },
  'lang.portuguese.level': { pt: 'Nativo', en: 'Native' },
  'lang.english': { pt: 'Inglês', en: 'English' },
  'lang.english.level': { pt: 'Intermediário', en: 'Intermediate' },
  'lang.french': { pt: 'Francês', en: 'French' },
  'lang.french.level': { pt: 'Básico', en: 'Basic' },
  
  // Contact
  'contact.title': { pt: 'Contato', en: 'Contact' },
  'contact.subtitle': { pt: 'Vamos trabalhar juntos', en: "Let's work together" },
  'contact.desc': { 
    pt: 'Estou aberto a novas oportunidades e projetos. Entre em contato através dos canais abaixo.', 
    en: "I'm open to new opportunities and projects. Get in touch through the channels below." 
  },
  'contact.location': { pt: 'Gravataí, RS - Brasil', en: 'Gravataí, RS - Brazil' },
  
  // Footer
  'footer.rights': { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
  'footer.built': { pt: 'Desenvolvido com', en: 'Built with' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
