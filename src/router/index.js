import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(Vuetify, {
  theme: {
    primary: '#039BE5',
    secondary: '#3949AB',
    accent: '#FF5252',
    error: '#F44336',
    warning: '#FBC02D',
    info: '#90A4AE',
    success: '#4caf50'
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
