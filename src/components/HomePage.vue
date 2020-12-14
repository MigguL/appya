<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height p-4">
      <div class="container pt-3">
        <div class="row pb-5">
          <div class="col-lg-6 pt-4 my-auto">
            <div class="text-center text-light mb-3 d-block d-lg-none">
              <h1 class="display-3 display">{{ title }}</h1>
              <h3>Safe and Secure</h3>
            </div>
            <img id="iphone-img" src="../assets/app.png" class="img-fluid" />
          </div>
          <div class="col-lg-6 my-auto pt-4">
            <div class="text-center text-light mb-3 d-none d-lg-block">
              <h1 class="display-3">{{ title }}</h1>
              <h3>Safe and Secure</h3>
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
                  <buttton class="btn btn-success mt-3"
                    >Join Waiting List</buttton
                  >
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
    <div id="about" class="bg-light p-3 p-md-5">
      <div class="row">
        <div class="col-lg">
          <!--Icon made by Freepik perfect from www.flaticon.com-->
          <img src="../assets/icons/001-shield.svg" height="120" class="m-4" />
          <h5 class="ml-md-4 mr-md-4">
            Security is our main goal, and we do our <br />
            best to provide first-class safety measures.
          </h5>
        </div>
        <div class="col-lg">
          <!--Icon made by Freepik perfect from www.flaticon.com-->
          <img src="../assets/icons/002-rocket.svg" height="120" class="m-4" />
          <h5 class="ml-md-4 mr-md-4">
            We value your time, by providing access <br />
            to the nearest server in your location.
          </h5>
        </div>
        <div class="col-lg">
          <!--Icon made by Freepik perfect from www.flaticon.com-->
          <img
            src="../assets/icons/003-lifetime.svg"
            height="120"
            class="m-4"
          />
          <h5 class="ml-md-4 mr-md-4">
            Pay once and enjoy your space. <br />
            No fees or other hidden charges!
          </h5>
        </div>
      </div>
    </div>
    <div id="contact" class="bg-info p-4"></div>
    <div id="footer" class="bg-primary p-4"></div>
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

#about {
  min-height: 40vh;
}
</style>
