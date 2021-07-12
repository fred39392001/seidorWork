import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Payment from '../views/Payment.vue';
import Order from '../views/Order.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Payment',
    path: '/payment',
    component: Payment,
  },
  {
    name: 'Order',
    path: '/order',
    component: Order,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
