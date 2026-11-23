import type { Project } from './types.js';

export const projects: Project[] = [
  {
    title: 'Arquibancada',
    company: { pt: 'Projeto pessoal', en: 'Side project' },
    icon: 'stadium',
    description: {
      pt: 'Placares ao vivo do Brasileirão com classificação, rodadas, estatísticas de times e jogadores, lance a lance e mapa do campo. Feito em Angular com RxJS e Angular Material, usando um Cloudflare Worker como camada de API.',
      en: 'Live Brazilian league scores with standings, rounds, team and player stats, play-by-play and a pitch map. Built with Angular, RxJS and Angular Material, using a Cloudflare Worker as the API layer.',
    },
    tags: ['Angular', 'RxJS', 'Angular Material', 'Cloudflare Workers', 'Vitest'],
    links: {
      demo: 'https://gabrielguimah.com.br/arquibancada',
      repository: 'https://github.com/gabrielguimah/arquibancada',
    },
    image: 'assets/images/projects/arquibancada.jpg',
    featured: true,
  },
  {
    title: 'TOTVS WMS',
    company: 'TOTVS',
    icon: 'warehouse',
    description: {
      pt: 'Sistema de gestão de armazéns web e mobile usado na operação logística de marcas como Grendene e Fini. Desenvolvi e aprimorei todos os módulos: recebimento, estoque, expedição, picking, reabastecimento, etiquetas, documentos e mais.',
      en: 'Web and mobile warehouse management system running the logistics of brands like Grendene and Fini. I built and improved every module: receiving, stock, shipping, picking, replenishment, labels, documents and more.',
    },
    tags: ['Angular', 'Ionic', 'PO UI', 'RxJS'],
  },
  {
    title: 'Tiflux Service Desk',
    company: 'Tiflux',
    icon: 'ticket',
    description: {
      pt: 'Plataforma SaaS de service desk e ITSM: tickets com SLA, portal do cliente, atendimento via WhatsApp, monitoramento de ativos, app mobile, dashboards e integrações com GitHub, Conta Azul e Asaas. Atuei de ponta a ponta, do React ao Rails.',
      en: 'SaaS service desk and ITSM platform: tickets with SLAs, customer portal, WhatsApp support, asset monitoring, mobile app, dashboards and integrations with GitHub, Conta Azul and Asaas. I worked end to end, from React to Rails.',
    },
    tags: ['React', 'React Native', 'Ruby on Rails', 'PostgreSQL'],
  },
];
