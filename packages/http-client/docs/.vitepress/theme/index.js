import DefaultTheme from 'vitepress/theme'
import Mermaid from 'vitepress-plugin-mermaid/Mermaid.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Mermaid', Mermaid)
  },
}
