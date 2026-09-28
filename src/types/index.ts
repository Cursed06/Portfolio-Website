export type ProjectCategory = 'AI' | 'Web' | 'Mobile';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  year: number;
  featured?: boolean;
  role?: string;
  timeline?: string;
  technologies: string[];
  metrics?: ProjectMetric[];
  highlights?: string[];
  architectureOverview?: string;
  keyFeatures?: ProjectFeature[];
  challenges?: string[];
  image: string;
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export type DesignCategory = 'Posters' | 'Event Graphics' | 'Editorial' | 'Branding' | 'Typography' | 'Other';

export interface DesignWork {
  slug: string;
  title: string;
  subtitle?: string;
  category: DesignCategory;
  year: number;
  image: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  description?: string;
  tools?: string[];
  clientOrContext?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  type: 'Work' | 'Leadership' | 'Teaching' | 'Project' | 'Education';
  current?: boolean;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Development' | 'AI & Data' | 'Design & Creative';
  highlight?: boolean;
}

export interface SkillGroup {
  category: 'Programming' | 'Development' | 'AI & Data' | 'Design & Creative';
  iconName: string;
  description: string;
  skills: string[];
  tools?: string[];
}

export interface ProfileData {
  name: string;
  fullName?: string;
  roleTitle: string;
  tagline: string;
  availability: string;
  isAvailable: boolean;
  avatarUrl?: string;
  bio: string[];
  location: string;
  education: {
    degree: string;
    university: string;
    period: string;
    gpa?: string;
    honors?: string;
  };
  secondaryEducation?: {
    school: string;
    major: string;
    period: string;
    location?: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
    instagram?: string;
    figma?: string;
    x?: string;
  };
  resumeUrl: string;
}
