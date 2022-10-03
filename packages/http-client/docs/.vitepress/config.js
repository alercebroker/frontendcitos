import Mermaid from 'vitepress-plugin-mermaid'

export default {
  title: 'Docs',
  description: 'The ALeRCE Typescript Library for HTTP Requests',
  markdown: {
    config: Mermaid,
  },
  themeConfig: {
    nav: [{ text: 'Guide', link: '/index' }],
    sidebar: [
      {
        text: 'Usage Guide',
        collapsible: true,
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Modules', link: '/typedoc/modules' },
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
          { text: 'API', link: '/typedoc/classes/index.HttpService' },
          { text: 'Error', link: '/typedoc/classes/index.HttpError' },
        ],
      },
      {
        text: 'Alerts API Client',
        collapsible: true,
        items: [
          { text: 'Examples', link: '/examples/AlertsClient' },
          { text: 'API', link: '/typedoc/classes/index.AlertsClient' },
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
      {
        text: 'Auth API Client',
        collapsible: true,
        items: [
          {
            text: 'Credentials and OAuth2 explanation',
            link: '/authentication',
          },
          { text: 'Examples', link: '/examples/AuthClient' },
          { text: 'API', link: '/typedoc/classes/index.AuthClient' },
        ],
      },
    ],
  },
}
