import Vue from 'vue'
import Router from 'vue-router'
import moment from 'moment'

var reg = /([^$]+)$/;
var month = window.location.href.match(reg);
var month12 = ['2019-10'];
var month1 = moment().subtract(1, 'months').format('YYYY-MM');

var Home = r => require.ensure([], () => r(require('@/components/home/Home')), 'Home', 'Home')
var App = r => require.ensure([], () => r(require('@/App')), 'App', 'App')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      // redirect: '/$'+month1,
      redirect: '/$'+month12[0],
    },
    {
      path: '/$'+month12[0],
      name: 'Home',
      component: Home
    },
    {
      path: '/$'+month1,
      name: 'Home',
      component: Home
    },
    {
      path: '/$'+month[0],
      name: 'Home',
      component: Home
    }
  ]

})
