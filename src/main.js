// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import VueTouch from 'vue-touch'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
// import echarts from 'echarts'
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css'
import 'muse-ui/dist/muse-ui.css';

Vue.use(VueAwesomeSwiper);
// Vue.use(axios);

Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'});
Vue.prototype.$echarts = echarts;
Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

