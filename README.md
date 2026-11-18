# gabrielguimah.com.br

Portfólio pessoal de **Gabriel Guimarães**, Front-End Engineer (Angular · React · TypeScript).

🔗 **[gabrielguimah.com.br](https://gabrielguimah.com.br)**

## Stack

- **TypeScript** com `strict` ligado
- **Web Components** nativos (Custom Elements), sem framework e sem bundler
- **CSS** organizado por componente, com design tokens em variáveis
- Internacionalização **PT / EN** com troca em tempo real
- Hospedado no **GitHub Pages** com domínio próprio

## Estrutura

```
.
├── index.html                 # shell da página: só monta os custom elements
├── assets/                    # imagens, currículo e favicon
├── styles/
│   ├── main.css               # ponto de entrada (importa o resto)
│   ├── base/                  # tokens, reset, layout e animações
│   └── components/            # um arquivo por componente
├── src/
│   ├── main.ts                # registra os custom elements
│   ├── core/
│   │   ├── Component.ts       # classe base: render, i18n e reveal on scroll
│   │   ├── I18n.ts            # idioma ativo + assinantes
│   │   ├── RevealObserver.ts  # animação de entrada com IntersectionObserver
│   │   ├── Typewriter.ts      # efeito de digitação das skills
│   │   └── template.ts        # tagged template `html`
│   ├── components/
│   │   ├── layout/            # <site-header>, <site-footer>
│   │   ├── sections/          # <hero-section>, <about-section>, ...
│   │   └── ui/                # <language-switch>, sectionHeading, tagList
│   ├── data/                  # todo o conteúdo do site, tipado
│   └── icons/                 # SVGs inline
└── dist/                      # JavaScript compilado (servido pelo GitHub Pages)
```

O conteúdo fica separado da apresentação: para atualizar experiências, projetos ou skills, basta editar os arquivos em `src/data/`.

## Rodando localmente

```bash
npm install
npm run dev     # compila e observa alterações em src/
npm run serve   # serve o site em http://localhost:3000
```

## Publicação

O GitHub Pages serve os arquivos estáticos da branch `main`. Como não há etapa de build no deploy, rode `npm run build` antes de cada commit para atualizar a pasta `dist/`.
