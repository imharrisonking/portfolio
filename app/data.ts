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
  image: string
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
    link: 'https://github.com/propagate-digital/propagate',
    video:
      'https://res.cloudinary.com/dejm6tfy8/video/upload/f_auto:video,q_auto/propagate-demo-1080p_yzeaya',
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
    link: 'https://propagate.so',
    id: 'work1',
    image:
      'https://res.cloudinary.com/dejm6tfy8/image/upload/f_auto,q_auto/gefyp7i9xvf0ngq97e70',
  },
  {
    company: 'Low Carbon Contracts Company',
    title: 'Senior Quantitative Developer',
    start: 'Sep 2024',
    end: 'Present',
    link: 'https://www.lowcarboncontracts.uk',
    id: 'work2',
    image:
      'https://res.cloudinary.com/dejm6tfy8/image/upload/f_auto,q_auto/skwox9yvnshltqgdxmf5',
  },
  {
    company: 'Low Carbon Contracts Company',
    title: 'Quantitative Developer',
    start: 'Nov 2022',
    end: 'Sep 2024',
    link: 'https://www.lowcarboncontracts.uk',
    id: 'work3',
    image:
      'https://res.cloudinary.com/dejm6tfy8/image/upload/f_auto,q_auto/skwox9yvnshltqgdxmf5',
  },
  {
    company: 'Arup',
    title: 'Consultant',
    start: 'Sep 2021',
    end: 'Nov 2022',
    link: 'https://www.arup.com',
    id: 'work4',
    image:
      'https://media.licdn.com/dms/image/v2/D4E0BAQGJio-1N-Cssg/company-logo_200_200/company-logo_200_200/0/1686582688780/arup_logo?e=1756339200&v=beta&t=t_hN9M9H1bSQdkpEEDel0TJsaMUwFx9RmBJ7ycrKAzg',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Distributed Monte Carlo Simulations with Spark RDDs',
    description:
      'How we use PySpark to run 10,000 parallel electricity market simulations every quarter.',
    link: '/blog/monte-carlo-simulations-spark-rdd',
    uid: 'blog-1',
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
