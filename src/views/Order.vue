<template>
  <div class="order mb-5">
    <div class="wrap container w-75 py-5">
      <div class="text-center">
        <ul class="stepper mr-4">
          <li class="done text-center" v-if="isEN">Buyer Information</li>
          <li class="done text-center" v-if="isCN">購買者資訊</li>
          <li class="done" v-if="isEN">Payment</li>
          <li class="done" v-if="isCN">付款</li>
        </ul>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 text-center mt-3">
            <div class="h1" v-if="isEN">{{ orderdata.title.en }}</div>
            <div class="h1" v-if="isCN">{{ orderdata.title.zh_CN }}</div>
            <p v-if="isEN">
              Hi! <span class="font-weight-bold">{{ newOrder.firstName}}</span>,
              Your order number is <span class="font-weight-bold">{{ newOrder.id }}</span>.
            </p>
            <p v-if="isCN">
              <span class="font-weight-bold">{{ newOrder.firstName}}</span> 你好,
              你的訂單編號是 <span class="font-weight-bold">{{ newOrder.id }}</span>
            </p>
            <p><i class="fas fa-5x fa-clipboard-check text-secondary"></i></p>
            <p v-if="isEN">{{ orderdata.message.en }}</p>
            <p v-if="isCN">{{ orderdata.message.zh_CN }}</p>
          </div>
          <div class="col-12 d-flex justify-content-center mt-3 px-0">
              <router-link class="btn btn-outline-primary" to="/" v-if="isEN">
                Continue Shopping<i class="fas fa-chevron-right pl-2"></i>
              </router-link>
              <router-link class="btn btn-outline-primary" to="/" v-if="isCN">
                繼續購物<i class="fas fa-chevron-right pl-2"></i>
              </router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
    };
  },
  name: 'Order',
  methods: {
  },
  created() {
    this.$store.dispatch('getOrderData');
  },
  computed: {
    isEN() {
      return this.$store.state.isEN;
    },
    isCN() {
      return this.$store.state.isCN;
    },
    orderdata() {
      return this.$store.state.orderData;
    },
    newOrder() {
      return this.$store.state.newOrder;
    },
  },
};
</script>
