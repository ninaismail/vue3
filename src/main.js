import './assets/css/main.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import VueSocialSharing from 'vue-social-sharing'

import App from './App.vue'
import router from './router'
import { VueRecaptchaPlugin } from 'vue-recaptcha'

const app = createApp(App)

app.use(VueRecaptchaPlugin, {
  v2SiteKey: '6LeoRigqAAAAALoCDM3YKRQoSuwfASRZ6xcuDWfg'
  // v2SiteKey:'6LcX3AsqAAAAAKG0sYoZ3G3oQxqvLE8VeXHfnN_P',
})

const head = createHead()

app.use(VueSocialSharing);
app.use(head)
app.use(router)

app.mount('#app')
