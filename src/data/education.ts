import type { Education, Language } from './types.js';

export const education: Education[] = [
  {
    period: '2021 — 2025',
    degree: { pt: 'Bacharelado em Sistemas de Informação', en: 'B.Sc. in Information Systems' },
    school: {
      pt: 'Univille — Universidade da Região de Joinville',
      en: 'Univille — University of the Region of Joinville',
    },
    icon: 'graduation-cap',
    tags: [
      'React',
      'Angular',
      'TypeScript',
      'Java',
      'SQL',
      { pt: 'Algoritmos', en: 'Algorithms' },
      { pt: 'Estruturas de dados', en: 'Data Structures' },
      { pt: 'Engenharia de sistemas de software', en: 'Software Systems Engineering' },
    ],
  },
  {
    period: '2019 — 2020',
    degree: { pt: 'Técnico em Informática', en: 'Technical Diploma in Informatics' },
    school: {
      pt: 'SENAI/SC — Curso Técnico Integrado ao Ensino Médio',
      en: 'SENAI/SC — Technical program integrated with high school',
    },
    icon: 'diploma',
    tags: [
      { pt: 'Lógica de Programação', en: 'Programming Logic' },
      { pt: 'Programação Orientada a Objetos', en: 'Object-Oriented Programming' },
      { pt: 'Banco de Dados', en: 'Databases' },
      { pt: 'Redes de Computadores', en: 'Computer Networks' },
      { pt: 'Sistemas Operacionais', en: 'Operating Systems' },
      { pt: 'Montagem e Manutenção de Computadores', en: 'PC Assembly & Maintenance' },
    ],
  },
];

export const languages: Language[] = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'nativo', en: 'native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'fluente', en: 'fluent' } },
];
