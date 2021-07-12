import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    isCN: false,
    isEN: true,
    orderData: {
      title: {
        en: '',
      },
      message: {
        en: '',
      },
    },
    buyerInfo: {
      firstName: '',
      lastName: '',
    },
    newOrder: {
      firstName: '',
      lastName: '',
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    checkEN(context, status) {
      console.log('context', context);
      context.commit('EN', status);
    },
    checkCN(context, status) {
      context.commit('CN', status);
    },
    getBuyerInfo(context, info) {
      context.commit('GET_BUYER_INFO', info);
      console.log('buyerInfo', info);
    },
    getOrderData(context) {
      const api = 'https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f';
      context.commit('LOADING', true);
      axios.get(api).then((res) => {
        context.commit('ORDER_DATA', res.data);
        context.commit('LOADING', false);
      });
    },
    postBuyerInfo(context, info) {
      const api = 'http://localhost:3000/orders';
      axios.post(api, info).then((res) => {
        context.commit('ADD_ORDER_INFO', res.data);
      });
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    ORDER_DATA(state, payload) {
      state.orderData = payload;
      console.log('orderData', state.orderData);
    },
    EN(state, status) {
      state.isEN = status;
      state.isCN = false;
    },
    CN(state, status) {
      state.isCN = status;
      state.isEN = false;
    },
    GET_BUYER_INFO(state, info) {
      state.buyerInfo = info;
    },
    ADD_ORDER_INFO(state, neworder) {
      state.newOrder = neworder;
    },
  },
  modules: {
  },
});
