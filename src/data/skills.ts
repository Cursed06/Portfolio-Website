import { SkillGroup } from '@/types';

export const skillGroupsData: SkillGroup[] = [
  {
    category: 'Programming',
    iconName: 'Code2',
    description: 'Core languages utilized for system implementation, algorithms, and full-stack software development.',
    skills: ['Java', 'Python', 'C', 'TypeScript', 'JavaScript', 'SQL'],
    tools: ['JDK', 'Python Venv', 'Node.js']
  },
  {
    category: 'Development',
    iconName: 'Layers',
    description: 'Frameworks, backend runtimes, and engineering tooling for responsive web and cross-platform mobile apps.',
    skills: ['Flutter', 'Express.js', 'Nest.js', 'React', 'Next.js', 'Prisma', 'Tailwind CSS', 'Git'],
    tools: ['Postman', 'VS Code', 'Docker']
  },
  {
    category: 'AI & Data',
    iconName: 'Cpu',
    description: 'Machine learning architectures, computer vision pipelines, and LLM multimodal integrations.',
    skills: ['Google Gemini API', 'Computer Vision', 'TensorFlow', 'EfficientNet', 'Pandas', 'NumPy'],
    tools: ['Gemini', 'Jupyter', 'Google Colab']
  },
  {
    category: 'Design & Creative',
    iconName: 'Palette',
    description: 'Visual systems, brand identity, motion graphics, video editing, and print/editorial design.',
    skills: ['Graphic Design', 'Motion Graphics', 'Video Editing', 'Editorial & Print', 'UI/UX Design', '2D/3D Animation'],
    tools: ['Adobe', 'Affinity', 'Figma']
  }
];

