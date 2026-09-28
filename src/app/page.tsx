import { HeroSection } from '@/components/hero/HeroSection';
import { AboutSection } from '@/components/about/AboutSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { DesignSection } from '@/components/design/DesignSection';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { ResumeCTA } from '@/components/contact/ResumeCTA';
import { ContactSection } from '@/components/contact/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <DesignSection />
      <ExperienceTimeline />
      <ResumeCTA />
      <ContactSection />
    </>
  );
}
