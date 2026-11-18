export const experience = [
    {
        role: 'Front-End Developer',
        company: 'TOTVS',
        period: { pt: 'set 2022 — atual', en: 'Sep 2022 — Present' },
        summary: {
            pt: 'Desenvolvimento web e mobile do TOTVS WMS, sistema de gestão de armazéns usado na logística de grandes empresas como Grendene e Fini.',
            en: 'Web and mobile development for TOTVS WMS, a warehouse management system used in the logistics of large companies such as Grendene and Fini.',
        },
        highlights: [
            {
                pt: 'Interfaces responsivas e performáticas com Angular, Ionic, PO UI e Kendo UI para operadores que usam o sistema durante todo o turno.',
                en: 'Responsive, high-performance interfaces with Angular, Ionic, PO UI and Kendo UI for operators who use the system throughout their shifts.',
            },
            {
                pt: 'Entrega de features e demandas de clientes nos módulos de expedição, ressuprimento e separação.',
                en: 'Delivered features and customer demands in the shipping, replenishment and picking modules.',
            },
            {
                pt: 'Testes unitários com Jest, Jasmine e Karma, usando mocks e spies para evitar regressões.',
                en: 'Unit tests with Jest, Jasmine and Karma, using mocks and spies to prevent regressions.',
            },
            {
                pt: 'Monitoramento de filas de erro em produção, investigando e corrigindo problemas que afetam a operação dos clientes.',
                en: 'Monitored production error queues, investigating and fixing issues affecting customer operations.',
            },
            {
                pt: 'Refinamento de backlog, estimativas, critérios de aceite e documentação técnica e funcional.',
                en: 'Backlog refinement, estimates, acceptance criteria and technical/functional documentation.',
            },
        ],
        showcase: {
            title: { pt: 'Módulos do WMS que desenvolvi e aprimorei', en: 'WMS modules I built and improved' },
            icon: 'warehouse',
            variant: 'modules',
            items: [
                { pt: 'Etiquetas', en: 'Labels' },
                { pt: 'Estoque', en: 'Inventory Stock' },
                { pt: 'Recebimento', en: 'Receiving' },
                { pt: 'Expedição', en: 'Shipping' },
                { pt: 'Conferência de Expedição', en: 'Shipping Check' },
                { pt: 'Separação de Estoque', en: 'Stock Picking' },
                { pt: 'Plano de Embarque', en: 'Loading Plan' },
                { pt: 'Atividade extra', en: 'Extra Activities' },
                'Picking',
                { pt: 'Reabastecimento', en: 'Replenishment' },
                { pt: 'Documentos', en: 'Documents' },
                { pt: 'Atividades', en: 'Activities' },
                { pt: 'Gestão interna', en: 'Internal Management' },
            ],
        },
        tags: ['Angular', 'TypeScript', 'RxJS', 'Ionic', 'PO UI', 'Kendo UI', 'Jest', 'Jasmine', 'Karma'],
    },
    {
        role: 'Full-Stack Developer',
        company: 'Tiflux',
        period: { pt: 'jan 2021 — set 2022', en: 'Jan 2021 — Sep 2022' },
        summary: {
            pt: 'Features de ponta a ponta para a Tiflux, plataforma SaaS de service desk, help desk e gestão de serviços de TI, atuando em todas as frentes do produto.',
            en: 'End-to-end features for Tiflux, a SaaS service desk, help desk and IT service management platform, working across every area of the product.',
        },
        highlights: [
            {
                pt: 'Front-end com React, JavaScript e TypeScript; back-end e dados com Ruby on Rails e SQL.',
                en: 'Front-end with React, JavaScript and TypeScript; back-end and data with Ruby on Rails and SQL.',
            },
            {
                pt: 'Testes automatizados com RSpec e correção de bugs via validação funcional e troubleshooting.',
                en: 'Automated tests with RSpec and bug fixing through functional validation and troubleshooting.',
            },
        ],
        showcase: {
            title: { pt: 'Funcionalidades do service desk em que atuei', en: 'Service desk features I worked on' },
            icon: 'ticket',
            variant: 'features',
            items: [
                {
                    pt: 'Gestão de tickets com SLA, prioridades e filas',
                    en: 'Ticket management with SLAs, priorities and queues',
                },
                {
                    pt: 'Portal do cliente para abrir e acompanhar chamados',
                    en: 'Customer portal to open and track requests',
                },
                {
                    pt: 'Atendimento via WhatsApp integrado aos tickets',
                    en: 'WhatsApp support integrated with tickets',
                },
                {
                    pt: 'Monitoramento de ativos com agente instalado nas máquinas',
                    en: 'Asset monitoring through an installed agent',
                },
                { pt: 'App mobile para técnicos e gestores', en: 'Mobile app for technicians and managers' },
                { pt: 'Relatórios e dashboards de atendimento', en: 'Support reports and dashboards' },
                { pt: 'Automação de fluxos de atendimento', en: 'Support workflow automation' },
                {
                    pt: 'Integrações com GitHub, Conta Azul, Asaas e outros sistemas',
                    en: 'Integrations with GitHub, Conta Azul, Asaas and other systems',
                },
            ],
        },
        tags: ['React', 'TypeScript', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'Docker', 'RSpec', 'AWS'],
    },
];
