const searchItem = {
  href: '/search',
  label: 'Search',
  icon: 'search',
  modifiers: ['search-icon'],
};

const userTools = [
  { href: '/page/privacy-policy', label: 'Privacy Policy' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions' },
];

const topics = [
  { href: '/hypertension/2020-program', label: '2020 Schedule' },
  { href: '/exhibitors', label: 'Exhibits' },
  { href: 'https://professional.heart.org/en/meetings/hypertension/science-news-from-hypertension-2020', label: 'Science News', target: '_blank' },
  { href: 'https://www.ahajournals.org/hypertension-sessions', label: 'Journals', target: '_blank' },
  { href: '/hypertension/membership', label: 'Membership' },
  { href: 'https://learn.heart.org', label: 'Claim CME', target: '_blank' },
];

const secondary = [
  { href: 'https://professional.heart.org/en/meetings/hypertension', label: 'Virtual Sessions Access', target: '_blank' },
  { href: 'https://htn.apprisor.org', label: 'ePosters Access', target: '_blank' },
];

module.exports = {

  primary: {
    items: [...topics],
  },
  secondary: {
    items: [...secondary],
  },
  tertiary: {
    items: [searchItem],
  },
  menu: [
    {
      label: 'Topics',
      items: [...topics],
    },
    {
      label: 'Resources',
      items: [...secondary],
    },
    {
      label: 'User Tools',
      items: [...userTools],
    },
  ],
};
