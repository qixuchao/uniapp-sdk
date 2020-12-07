import Vue from 'vue'
import App from './App'
// import screen from 'components/mp/screen.vue'
// import banner from 'components/mp/banner.vue'


Vue.config.productionTip = false

// Vue.component('screen', screen)
// Vue.component('banner', banner)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
