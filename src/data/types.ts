import type { IconName } from '../icons/index.js';

export type Locale = 'pt' | 'en';

/** A string translated into every supported locale. */
export type Localized = Record<Locale, string>;

/** Either a locale-independent string (e.g. a product name) or a translated one. */
export type Text = string | Localized;

export type SectionId = 'about' | 'education' | 'experience' | 'projects' | 'stack' | 'contact';

export interface Section {
  id: SectionId;
  title: Localized;
  navLabel: Localized;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  availability: Localized;
  greeting: Localized;
  /** May contain inline `<span class="hl">` highlights. */
  summary: Localized;
  photo: string;
  resume: string;
  email: string;
  phone: { display: string; whatsapp: string };
  socials: SocialLink[];
}

export interface Stat {
  value: string;
  label: Localized;
}

export interface About {
  /** May contain inline `<strong>` highlights. */
  paragraphs: Localized[];
  stats: Stat[];
}

export interface Education {
  period: string;
  degree: Localized;
  school: Localized;
  icon: IconName;
  tags: Text[];
}

export interface Language {
  name: Localized;
  level: Localized;
}

export interface Showcase {
  title: Localized;
  icon: IconName;
  /** `modules` renders compact tags, `features` renders a two-column list. */
  variant: 'modules' | 'features';
  items: Text[];
}

export interface Experience {
  role: string;
  company: string;
  period: Localized;
  summary: Localized;
  highlights: Localized[];
  showcase?: Showcase;
  tags: string[];
}

export interface ProjectLinks {
  demo?: string;
  repository?: string;
}

export interface Project {
  /** Product name, translated when it has a meaning worth explaining (e.g. "Arquibancada"). */
  title: Text;
  /** Company name, or a label such as "Side project". */
  company: Text;
  icon: IconName;
  description: Localized;
  tags: string[];
  links?: ProjectLinks;
  /** Screenshot path. Featured projects span the full row and show it beside the text. */
  image?: string;
  featured?: boolean;
  /** Shows an "in progress" badge beside the title. */
  inProgress?: boolean;
}

export interface Skill {
  label: Text;
  featured?: boolean;
}

export interface SkillGroup {
  title: Text;
  icon: IconName;
  skills: Skill[];
}
