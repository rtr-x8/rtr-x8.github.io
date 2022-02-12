module.exports = {
  port: 8888,
  lang: 'ja',
  title: 'RM',
  description: 'RMによる忘備録。学び、思考、未来について。',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'og:image', content: 'https://rtr-x8.github.io/images/hero400x400.jpg' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Twitter', link: 'https://twitter.com/rtr_x8', rel: "noopener noreferrer", target: '_blank' },
      { text: 'Github', link: 'https://github.com/rtr-x8/', rel: "noopener noreferrer", target: '_blank' },
    ],
    lastUpdated: 'Last Updated',
    sidebar: 'auto',
  },
};
