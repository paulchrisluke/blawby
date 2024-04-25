import { ArrowTrendingUpIcon, CalendarIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/vue/24/outline'

export default defineAppConfig({
  title: 'Blawby',
  description: 'Beautifully designed, fully featured, and ready to go lead generation for legal websites.',
  features: [
    {
      name: 'Scheduling',
      description:
        'Fully integrated with Calendly. Schedule consultations, automatically handle rescheduling, integrate with Google calendar.',
      icon: CalendarIcon,
    },
    {
      name: 'Media Kits',
      description:
        'Beautifully designed brand support. Logo, business cards, letterhead, and social media assets designed for you in editable Google docs/drive.',
      icon: BriefcaseIcon,
    },
    {
      name: 'Ad Management',
      description:
        'Google & Meta ad management. Get brand exposure across media channels in your state. Special $10,000/mo FREE Google Search ad credit available for nonprofits.',
      icon: ArrowTrendingUpIcon,
    },
    {
      name: '24/7 Support',
      description:
        'Always maintained, always best-in-class. No need to worry about domain, hosting, or platform management.',
      icon: PhoneIcon,
    },
  ],
  feature: {
    title: 'Get More Leads',
    subtitle: 'Everything you need to get more scheduled consultations',
    description: 'Includes everything you need to build your legal practice online, including scheduling, media kits, ad support and more.',
    image: 'https://res.cloudinary.com/image-gallery-pcl/image/upload/v1714012904/Blawby/dark-project-app-screenshot.webp',
  },
  announcement: {
    enabled: true,
    message: 'SEO ready video & blogs have been released!',
    url: '/docs/getting-started/installation',
  },
  cta: {
    title: 'Boost your legal practice',
    description: 'Start building your online pressence with Blawby today.',
    links: [
      {
        title: 'Get Started',
        url: '/docs/getting-started/installation',
        type: 'primary',
      },
      {
        title: 'Learn More',
        url: '/docs/getting-started/installation',
        type: 'alt',
        arrow: true,
      },
    ],
    image: 'https://res.cloudinary.com/image-gallery-pcl/image/upload/v1714013454/Blawby/dark-project-analytics-screenshot.webp',
  },
})
