<template>
  <section class="full-height p-4 home-page">
    <div class="container pt-3">
      <div class="row pb-5">
        <div class="col-lg-6 pt-4 my-auto">
          <article class="text-center text-light mb-3 d-block d-lg-none">
            <h1 class="display-3 display outline">{{ title }}</h1>
            <h3 class="outline">Safe and Secure Cloud Storage</h3>
          </article>
          <img src="../assets/app.png" class="img-fluid iphone-img" />
        </div>
        <div class="col-lg-6 my-auto pt-4">
          <article class="text-center text-light mb-3 d-none d-lg-block">
            <h1 class="display-3 outline">{{ title }}</h1>
            <h3 class="outline">Safe and Secure Cloud Storage</h3>
          </article>

          <article class="border p-3 p-md-5 bg-white rounded shadow">
            <h2>Coming Soon!</h2>
            <form @submit.prevent="addEmail(email)">
              <div class="form-group">
                <label for="emailSignup"
                  >Register your account now in order to join our first
                  launch</label
                >
                <input
                  v-model="email"
                  type="email"
                  id="emailSignup"
                  placeholder="Email here"
                  class="form-control"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We won't share your email address</small
                >
                <button
                  type="submit"
                  class="btn hvr-fade custom-color mt-3 rounded-pill shadow"
                >
                  Join Waiting List
                </button>
                <div class="mt-4">
                  <p class="m-0">{{ message }}</p>
                </div>
              </div>
            </form>
          </article>

          <article id="available" class="p-3">
            <div class="row">
              <div class="col my-auto">
                <img
                  src="../assets/get_apple.png"
                  class="float-right img-fluid store_img"
                />
              </div>
              <div class="col my-auto">
                <img
                  src="../assets/get_google.png"
                  class="float-left img-fluid store_img"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Auth } from "../firebase/auth.js";

export default {
  data() {
    return {
      title: "AppYa",
      email: "",
      message: "",
    };
  },
  methods: {
    async addEmail(email) {
      var noticeMess = "🔥 Your account has been reserved 🔥";
      await Auth.createUserWithEmailAndPassword(
        email,
        this.randomPassword(20)
      ).catch(function (error) {
        if (error.code != "auth/email-already-in-use") {
          noticeMess = error.message;
        }
      });
      this.message = noticeMess;
      this.email = "";
    },
    randomPassword(length) {
      var chars =
        "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
      var password = "";
      for (var i = 0; i < length; i++) {
        var num = Math.floor(Math.random() * chars.length);
        password += chars.charAt(num);
      }
      return password;
    },
  },
};
</script>

<style scoped>
.home-page {
  background-color: #06496b;
  background: url("../assets/bg-img.jpg") no-repeat 50% fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.iphone-img {
  max-height: 80vh;
}

.store_img {
  max-height: 80px;
}

.outline {
  text-shadow: -0.5px -0.5px 0 rgb(47, 47, 47), 0.5px -0.5px 0 rgb(47, 47, 47),
    -0.5px 0.5px 0 rgb(47, 47, 47), 0.5px 0.5px 0 rgb(47, 47, 47);
}

.custom-color {
  background-color: #f85f6a;
  color: white;
}

.hvr-fade {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
.hvr-fade:hover,
.hvr-fade:active {
  background-color: #e74e59;
}

.hvr-fade:visited {
  background-color: #f85f6a;
}
</style>
