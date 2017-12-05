import VueRouter from 'vue-router';
// import dingtalk from 'weex-dingtalk';
// import journey from 'weex-dingtalk-journey';
// import { toast, setLeft } from './util.js';
import HomePage from '../pages/home/index.vue';
import DealerView from '../pages/dealer/index.vue';
import SearchDealerView from '../pages/search/dealer.vue';
import SearchShopView from '../pages/search/shop.vue';
import visibleView from '../pages/visible/index.vue';
import locationView from '../pages/visible/location.vue';
import typeView from '../pages/visible/type.vue';
import timeView from '../pages/visible/time.vue';
import levelView from '../pages/visible/level.vue';
// import registerView from '../pages/register/index.vue';

const routes = [{
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/dealer',
    name: 'dealer',
    component: DealerView
  },
  {
    path: '/SearchDealer',
    name: 'SearchDealer',
    component: SearchDealerView
  },
  {
    path: '/SearchShop',
    name: 'SearchShop',
    component: SearchShopView
  },
  {
    path: '/visible',
    name: 'visible',
    component: visibleView
  },
  {
    path: '/locationView',
    name: 'locationView',
    component: locationView
  },
  {
    path: '/typeView',
    name: 'typeView',
    component: typeView
  },
  {
    path: '/timeView',
    name: 'timeView',
    component: timeView
  },
  {
    path: '/levelView',
    name: 'levelView',
    component: levelView
  },
  // {
  //   path: '/registerView',
  //   name: 'registerView',
  //   component: registerView
  // }
];

// const { env } = journey;

export default function Router(Vue) {
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: routes
  });

  //   const left = {
  //     show: true,
  //     control: true,
  //     text: '返回'
  //   }
  //   const backHandler = function(e) {
  //     if (env.isWeb) {
  //       e.preventDefault();
  //     }
  //     router.go(-1);
  //   }
  //   setLeft(left, backHandler);

  return {
    router
  }
}