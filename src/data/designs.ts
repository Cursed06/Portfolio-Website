import { DesignWork } from '@/types';

export const designsData: DesignWork[] = [
  {
    slug: 'recruitment-poster-PO',
    title: 'Called to Serve: Servant Recruitment Poster',
    subtitle: 'Community engagement print collateral featuring layered composition and event details',
    category: 'Posters',
    year: 2026,
    image: '/designs/recruitment-po.png',
    aspectRatio: 'portrait',
    description: 'A recruitment poster designed for Persekutuan Oikoumene (PO) to invite congregation members into active service, balancing atmospheric community photography with clear calls-to-action.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    clientOrContext: 'Persekutuan Oikoumene (PO)',
    featured: true
  },
  {
    slug: 'ascension-of-jesus-christ-poster',
    title: 'Ascension of Jesus Christ: Holiday Commemorative Poster',
    subtitle: 'Atmospheric spiritual typography and warm cinematic composition',
    category: 'Posters',
    year: 2026,
    image: '/designs/kenaikkan-po.png',
    aspectRatio: 'portrait',
    description: 'A holiday commemorative poster designed for Persekutuan Oikoumene (PO), combining ethereal serif typography with atmospheric cinematic imagery and scripture.',
    tools: ['Adobe Photoshop'],
    clientOrContext: 'Persekutuan Oikoumene (PO)',
    featured: true
  },
  {
    slug: 'unlovable-loved-event-poster',
    title: 'Unlovable Loved: Event & New Student Welcoming Poster',
    subtitle: 'Clean minimalist typography and symbolic physical object photography',
    category: 'Posters',
    year: 2025,
    image: '/designs/pmb-2025-po.png',
    aspectRatio: 'portrait',
    description: 'An event and new student welcoming poster designed for Persekutuan Oikoumene (PO) BINUS University, featuring bold contrast typography and a tactile heart sculpture aesthetic.',
    tools: ['Adobe Illustrator'],
    clientOrContext: 'Persekutuan Oikoumene (PO)',
    featured: true
  },
  {
    slug: 'indonesia-independence-day-poster',
    title: 'Dirgahayu Republik Indonesia: National Holiday Poster',
    subtitle: 'Patriotic typography, scriptural integration, and urban flag photography',
    category: 'Posters',
    year: 2025,
    image: '/designs/17an-po.png',
    aspectRatio: 'portrait',
    description: 'An Indonesian Independence Day commemorative poster designed for Persekutuan Oikoumene (PO) BINUS Malang, blending national pride with biblical reflection from Galatians 5:1 & 13.',
    tools: ['Adobe Illustrator'],
    clientOrContext: 'Persekutuan Oikoumene (PO)',
    featured: true
  }
];

export function getFeaturedDesigns(): DesignWork[] {
  return designsData.filter((d) => d.featured);
}
