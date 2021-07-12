<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-white">
      <div class="container d-flex justify-content-end">
        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto d-flex align-items-center">
            <li class="nav-item active" v-if="isEN">
              <a class="nav-link d-flex align-items-center" href="#">
                <i class="far fa-2x fa-question-circle mr-2 text-primary"></i>
                HELP
              </a>
            </li>
            <li class="nav-item active" v-if="isCN">
              <a class="nav-link d-flex align-items-center" href="#">
                <i class="far fa-2x fa-question-circle mr-2 text-primary"></i>
                支援
              </a>
            </li>
            <li class="nav-item" v-if="isEN">
              <a class="nav-link d-flex align-items-center" href="#">
                <i class="far fa-2x fa-user-circle mr-2 text-primary"></i>
                SIGN IN
              </a>
            </li>
            <li class="nav-item" v-if="isCN">
              <a class="nav-link d-flex align-items-center" href="#">
                <i class="far fa-2x fa-user-circle mr-2 text-primary"></i>
                登入
              </a>
            </li>
            <li class="nav-item dropdown" v-if="isEN">
              <a class="nav-link dropdown-toggle d-flex align-items-center"
                href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-2x fa-globe-americas mr-2 text-primary"></i>
                LANGUAGE
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#" @click="checkEN">EN</a>
                <a class="dropdown-item" href="#" @click="checkCN">CN</a>
              </div>
            </li>
            <li class="nav-item dropdown" v-if="isCN">
              <a class="nav-link dropdown-toggle d-flex align-items-center"
                href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-2x fa-globe-americas mr-2 text-primary"></i>
                語言
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#" @click="checkEN">英文</a>
                <a class="dropdown-item" href="#" @click="checkCN">中文</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    checkEN() {
      this.$store.dispatch('checkEN', true);
    },
    checkCN() {
      this.$store.dispatch('checkCN', true);
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
