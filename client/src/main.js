import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faArchive } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faTwitter,
  faFacebook, 
  faInstagram, 
  faGithub
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
