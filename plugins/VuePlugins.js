
import Vue from 'vue'
import VueEvents from 'vue-events'
import Vuelidate from 'vuelidate'
import vueCountryRegionSelect from 'vue-country-region-select'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vue2Editor from "vue2-editor"
import VueSocialSharing from 'vue-social-sharing'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('bootstrap');

Vue.use(VueEvents)
Vue.use(Vuelidate)
Vue.use(Vue2Editor);
Vue.use(vueCountryRegionSelect)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(require('vue-moment'))
Vue.use(VueSocialSharing)

var p_json = require('/package.json')
console.log("Version: " + p_json.version + " [Last Updated: " + p_json.last_updated + "]")
// console.log("Base API URL: " + process.env.BASE_URL)