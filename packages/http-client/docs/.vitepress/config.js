export default {
  title: 'Docs',
  description: 'The ALeRCE Typescript Library for HTTP Requests',
  themeConfig: {
    nav: [{ text: 'Guide', link: '/guide' }],

    sidebar: [
      {
        text: 'Usage Guide',
        collapsible: true,
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Base Client', link: '/getting-started' },
          { text: 'Specialized Clients', link: '/getting-started' },
          { text: 'Configuration', link: '/getting-started' },
        ],
      },
      {
        text: 'Base Client',
        collapsible: true,
        items: [
          { text: 'Examples', link: '/getting-started' },
          { text: 'API', link: '/getting-started' },
        ],
      },
      {
        text: 'Alerts API Client',
        collapsible: true,
        items: [
          { text: 'Examples', link: '/getting-started' },
          { text: 'API', link: '/getting-started' },
        ],
      },
      {
        text: 'AVRO & Stamps API Client',
        collapsible: true,
        items: [
          { text: 'Examples', link: '/getting-started' },
          { text: 'API', link: '/getting-started' },
        ],
      },
    ],
  },
}
