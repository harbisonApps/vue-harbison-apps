import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({

  theme: {
    themes: {
      light: {
        primary: '#4fc08d',
        secondary: '#304455',
        accent: '#327a5a',
        error: '#ad3241',
        info: '#085969',
        success: '#54a166',
        warning: '#FFB300'
      }
    }
  }
})
