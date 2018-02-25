import Vue from 'vue'
import VueFire from 'vuefire'
import App from './hello.vue'

Vue.use(VueFire);

new Vue({
  el: '#app',
  render: h => h(App)
})
