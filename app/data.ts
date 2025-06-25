type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Propagate',
    description:
      'A platform to build and deploy your own fully branded and native fitness app.',
    link: 'https://propagate.so',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'ELFO',
    description:
      'Stochastic forecasting model of the hourly GB power market using distributed computing.',
    link: 'https://www.lowcarboncontracts.uk/resources/guidance-and-publications/low-carbon-contracts-lccc-levy-forecasting-methodology/',
    video:
      'https://res.cloudinary.com/dejm6tfy8/video/upload/f_auto:video,q_auto/cik2qfu1vk50v8kfylgp',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Propagate',
    title: 'Founder',
    start: 'Sep 2024',
    end: 'Present',
    link: 'https://propagate.com',
    id: 'work1',
  },
  {
    company: 'Low Carbon Contracts Company',
    title: 'Senior Quantitative Developer',
    start: 'Sep 2024',
    end: 'Present',
    link: 'https://www.lowcarboncontracts.uk',
    id: 'work2',
  },
  {
    company: 'Low Carbon Contracts Company',
    title: 'Quantitative Developer',
    start: 'Nov 2022',
    end: 'Sep 2024',
    link: 'https://www.lowcarboncontracts.uk',
    id: 'work3',
  },
  {
    company: 'Arup',
    title: 'Consultant',
    start: 'Sep 2021',
    end: 'Nov 2022',
    link: 'https://www.arup.com',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/imharrisonking',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/imharrisonking',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/imharrisonking',
  },
]

export const EMAIL = 'hi@harrisonk.ing'
