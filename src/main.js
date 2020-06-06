import Vue from 'vue'
import App from './App.vue'
// import dropdown from "./lib/dropdown";
// import dropdownMenu from "./lib/dropdownMenu";
// import dropdownMenuItem from "./lib/dropdownMenuItem";
//
// Vue.use(dropdown)
// Vue.use(dropdownMenu)
// Vue.use(dropdownMenuItem)

Vue.config.productionTip = false;
Vue.prototype.bus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
