import { SiteFooter } from './components/layout/SiteFooter.js';
import { SiteHeader } from './components/layout/SiteHeader.js';
import { AboutSection } from './components/sections/AboutSection.js';
import { ContactSection } from './components/sections/ContactSection.js';
import { EducationSection } from './components/sections/EducationSection.js';
import { ExperienceSection } from './components/sections/ExperienceSection.js';
import { HeroSection } from './components/sections/HeroSection.js';
import { ProjectsSection } from './components/sections/ProjectsSection.js';
import { StackSection } from './components/sections/StackSection.js';
import { LanguageSwitch } from './components/ui/LanguageSwitch.js';

const components: Record<string, CustomElementConstructor> = {
  'language-switch': LanguageSwitch,
  'site-header': SiteHeader,
  'hero-section': HeroSection,
  'about-section': AboutSection,
  'education-section': EducationSection,
  'experience-section': ExperienceSection,
  'projects-section': ProjectsSection,
  'stack-section': StackSection,
  'contact-section': ContactSection,
  'site-footer': SiteFooter,
};

for (const [tag, constructor] of Object.entries(components)) {
  if (!customElements.get(tag)) customElements.define(tag, constructor);
}
