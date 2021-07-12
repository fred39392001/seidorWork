<template>
  <div class="payment">
    <div class="wrap container w-75 py-5">
      <div class="text-center">
        <ul class="stepper mr-4 mb-3">
          <li class="done text-center" v-if="isEN">Buyer Information</li>
          <li class="done text-center" v-if="isCN">購買者資訊</li>
          <li class="active" v-if="isEN">Payment</li>
          <li class="active" v-if="isCN">付款</li>
        </ul>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 text-center mt-3">
            <div class="h1" v-if="isEN">Payment</div>
            <div class="h1" v-if="isCN">付款</div>
            <p v-if="isEN">
              After making the payment you will receive a confirmation email with details
              of your purchase
            </p>
            <p v-if="isCN">
              付款後，您將收到一封包含您訂單詳細信息的確認電子郵件。
            </p>
            <div class="border p-3">
              <p><i class="far fa-5x fa-credit-card text-secondary"></i></p>
              <p class="h3" v-if="isEN">Credit Card</p>
              <p class="h3" v-if="isCN">信用卡付款</p>
              <div>
                <p v-if="isEN">
                  You will be redirected to a secure payment platform. This is a
                  secure process. The validation of your payment can take up to
                  24 hours.
                </p>
                <p v-if="isCN">您將被導向到一個安全的支付平台。這是一個安全的過程。驗證您的付款最多可能需要 24 小時。</p>
                <div>
                  <img class="creditCardImg mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mastercard_logo.svg/1280px-Mastercard_logo.svg.png" alt="">
                  <img class="creditCardImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/175px-Old_Visa_Logo.svg.png" alt="">
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-between mt-3 px-0">
              <router-link class="btn btn-primary" to="/" v-if="isEN">
                <i class="fas fa-chevron-left pr-2"></i>Back
              </router-link>
              <router-link class="btn btn-primary" to="/" v-if="isCN">
                <i class="fas fa-chevron-left pr-2"></i>上一步
              </router-link>
              <router-link class="btn btn-primary" to="/order"
              @click.native="postBuyerInfo(buyerInfo)" v-if="isEN">
                Pay<i class="fas fa-chevron-right pl-2"></i>
              </router-link>
              <router-link class="btn btn-primary" to="/order"
              @click.native="postBuyerInfo(buyerInfo)" v-if="isCN">
                付款<i class="fas fa-chevron-right pl-2"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Payment',
  computed: {
    buyerInfo() {
      return this.$store.state.buyerInfo;
    },
    isEN() {
      return this.$store.state.isEN;
    },
    isCN() {
      return this.$store.state.isCN;
    },
  },
  methods: {
    postBuyerInfo(buyerInfo) {
      this.$store.dispatch('postBuyerInfo', buyerInfo);
    },
  },
};
</script>
