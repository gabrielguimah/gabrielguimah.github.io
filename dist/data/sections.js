/** Page sections in display order. The order also defines the "01." numbering. */
export const sections = [
    { id: 'about', title: { pt: 'Sobre mim', en: 'About me' }, navLabel: { pt: 'Sobre', en: 'About' } },
    { id: 'education', title: { pt: 'Formação', en: 'Education' }, navLabel: { pt: 'Formação', en: 'Education' } },
    { id: 'experience', title: { pt: 'Experiência', en: 'Experience' }, navLabel: { pt: 'Experiência', en: 'Experience' } },
    { id: 'projects', title: { pt: 'Projetos', en: 'Projects' }, navLabel: { pt: 'Projetos', en: 'Projects' } },
    { id: 'stack', title: { pt: 'Tecnologias', en: 'Tech stack' }, navLabel: { pt: 'Tecnologias', en: 'Tech stack' } },
    { id: 'contact', title: { pt: 'E agora?', en: "What's next?" }, navLabel: { pt: 'Contato', en: 'Contact' } },
];
export function getSection(id) {
    const index = sections.findIndex((section) => section.id === id);
    if (index === -1)
        throw new Error(`Unknown section: ${id}`);
    return { section: sections[index], number: String(index + 1).padStart(2, '0') };
}
