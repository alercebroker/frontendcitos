export default {
  title: 'Docs',
  description: 'The ALeRCE Typescript Library for HTTP Requests',
  themeConfig: {
    nav: [{ text: 'Guide', link: '/index' }],

    sidebar: [
      {
        text: 'Usage Guide',
        collapsible: true,
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Modules', link: '/modules' },
          { text: 'Base Client', link: '/base-client' },
          { text: 'Specialized Clients', link: '/specialized-clients' },
          { text: 'Configuration', link: '/configuration' },
        ],
      },
      {
        text: 'Base Client',
        collapsible: true,
        items: [
          { text: 'Examples', link: '/examples/HttpService' },
          { text: 'API', link: '/classes/HttpService' },
          { text: 'Error', link: '/classes/HttpError' },
        ],
      },
      {
        text: 'Alerts API Client',
        collapsible: true,
        items: [
          { text: 'Examples', link: '/examples/AlertsClient' },
          { text: 'API', link: '/classes/AlertsClient' },
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
