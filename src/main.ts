import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import vuetify from './plugins/vuetify';
import MESO from './config';
import axios from 'axios';

// ---------------------------------------------------------
// AXIOS: API CONFIGURATION
// ---------------------------------------------------------

// axios.defaults.baseURL = MESO.url;
axios.defaults.headers = { 'Content-Type': 'application/json' };
// import Vuetify from 'vuetify';
// import 'vuetify/dist/vuetify.min.css';
// Vue.use(Vuetify);

Vue.config.productionTip = false;

// Ignores Vuetify/Vue warning that isn't our problem
const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = ( msg: string | null, vm: Vue | null, trace: string | null ) => {
  // `trace` is the component hierarchy trace
  if ( msg === ignoreWarnMessage ) {
    msg = null;
    vm = null;
    trace = null;
  }
};

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
