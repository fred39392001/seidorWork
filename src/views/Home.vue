<template>
  <div class="home">
    <div class="wrap container w-75 py-5">
      <div class="mb-3">
        <ul class="stepper mr-4">
          <li class="active text-center" v-if="isEN">Buyer Information</li>
          <li class="active text-center" v-if="isCN">購買者資訊</li>
          <li v-if="isEN">Payment</li>
          <li v-if="isCN">付款</li>
        </ul>
      </div>
      <form class="container">
        <div class="form-row justify-content-center">
          <div class="col-md-7 text-center mt-3">
            <div class="h1" v-if="isEN">Your Information</div>
            <div class="h1" v-if="isCN">購買者資訊</div>
            <p v-if="isEN">Please enter your personal data and press continue</p>
            <p v-if="isCN">請輸入購買者資訊，並點擊繼續</p>
            <div class="form-row">
              <div class="form-group col-12 d-flex flex-column align-items-start mt-3">
                <label for="firstName" v-if="isEN">Name<span class="ml-1 text-danger">*</span>
                </label>
                <label for="firstName" v-if="isCN">名字<span class="ml-1 text-danger">*</span>
                </label>
                <input type="text" class="form-control" id="firstName" v-model="buyerInfo.firstName"
                  placeholder="please enter your first name" v-if="isEN">
                <input type="text" class="form-control" id="firstName" v-model="buyerInfo.firstName"
                  placeholder="請輸入你的名字" v-if="isCN">
              </div>
              <div class="form-group col-12 d-flex flex-column align-items-start mt-3">
                <label for="lastName" v-if="isEN">Last Name<span class="ml-1 text-danger">*</span>
                </label>
                <label for="lastName" v-if="isCN">姓氏<span class="ml-1 text-danger">*</span>
                </label>
                <input type="text" class="form-control" id="lastName" v-model="buyerInfo.lastName"
                  placeholder="please enter your last name" v-if="isEN">
                <input type="text" class="form-control" id="lastName" v-model="buyerInfo.lastName"
                  placeholder="請輸入你的姓氏" v-if="isCN">
              </div>
              <div class="col-12 d-flex justify-content-end mt-3">
                <router-link class="btn btn-primary" to="/payment" @click.native="getBuyerInfo"
                v-if="isEN">
                  Continue<i class="fas fa-chevron-right pl-2"></i>
                </router-link>
                <router-link class="btn btn-primary" to="/payment" @click.native="getBuyerInfo"
                v-if="isCN">
                  繼續<i class="fas fa-chevron-right pl-2"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      buyerInfo: {
        firstName: '',
        lastName: '',
      },
    };
  },
  methods: {
    getBuyerInfo() {
      this.$store.dispatch('getBuyerInfo', this.buyerInfo);
    },
  },
  computed: {
    isEN() {
      return this.$store.state.isEN;
    },
    isCN() {
      return this.$store.state.isCN;
    },
  },
};
</script>
