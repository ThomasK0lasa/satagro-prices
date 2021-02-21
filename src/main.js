import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'
import vSelect from 'vue-select'
import Fragment from 'vue-fragment'

Vue.component('v-select', vSelect)
Vue.use(Fragment.Plugin)

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
