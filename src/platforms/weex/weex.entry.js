// import Home from '../../pages/home/index.vue';
// import Router from '../../lib/router.js';
// const { router } = Router(Vue);

// new Vue(Vue.util.extend({
//   el:'#root',
//   router
// },Home));

import App from '../../pages/App.vue';
import Router from '../../lib/router.js';

const { router } = Router(Vue);

new Vue(Vue.util.extend({
  el: '#root',
  router
}, App));

router.push('/')