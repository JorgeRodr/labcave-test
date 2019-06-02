import Vue from 'vue';
import VueApollo from 'vue-apollo';
import Vuetify from 'vuetify';
import App from './App.vue';
import { apolloProvider } from './graphql/apollo';
import store from './store';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(Vuetify);

new Vue({
  apolloProvider,
  store,
  render: h => h(App),
}).$mount('#app');
