<template>
  <div id="home-page" class="full-height p-4">
    <div class="container pt-3">
      <div class="row pb-5">
        <div class="col-lg-6 pt-4 my-auto">
          <div class="text-center text-light mb-3 d-block d-lg-none">
            <h1 class="display-3 display outline">{{ title }}</h1>
            <h3 class="outline">Safe and Secure</h3>
          </div>
          <img id="iphone-img" src="../assets/app.png" class="img-fluid" />
        </div>
        <div class="col-lg-6 my-auto pt-4">
          <div class="text-center text-light mb-3 d-none d-lg-block">
            <h1 class="display-3 outline">{{ title }}</h1>
            <h3 class="outline">Safe and Secure</h3>
          </div>

          <div class="border p-3 p-md-5 bg-white rounded shadow">
            <h2>Coming Soon!</h2>
            <form>
              <div class="form-group">
                <label for="emailSignup"
                  >Register your account now in order to join our first
                  launch</label
                >
                <input
                  id="emailSignup"
                  placeholder="Email here"
                  class="form-control"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We won't share your email address</small
                >
                <button class="btn custom-color mt-3 rounded-pill">
                  Join Waiting List
                </button>
              </div>
            </form>
          </div>

          <div id="available" class="p-3">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "AppYa",
    };
  },
};
</script>

<style scoped>
#home-page {
  background-color: #06496b;
  background: url("../assets/bg-img.jpg") no-repeat center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

#iphone-img {
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
</style>
