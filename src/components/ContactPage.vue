<template>
  <main class="p-3 bg-light">
    <div class="row justify-content-center mt-3 mb-3">
      <div
        v-if="show_contact == true"
        class="col-lg-6 col-md-6 col-sm-9 col-xs-6 mb-md-0"
      >
        <h2>Any Questions?</h2>
        <p>Contact us by filling out the information below</p>

        <div v-if="contact_notice != ''" class="alert alert-danger">
          An error has occurred: {{ contact_notice }}
        </div>

        <form @submit.prevent="sendContactMessage()">
          <div class="form-group text-left">
            <input
              v-model="contact_email"
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
            <textarea
              v-model="contact_message"
              class="form-control mt-3 scroll"
              placeholder="Enter Your Message"
              rows="5"
            >
            </textarea>
          </div>
          <button
            type="submit"
            class="btn btn-light rounded-pill custom-color hvr-fade"
          >
            Send Message
          </button>
        </form>
      </div>
      <div v-else>
        <h5>🔥 Your message has been sent 🔥</h5>
        <p>
          Thank you for contacting us, we'll get back to you as soon as we can.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      show_contact: true,
      contact_email: "",
      contact_message: "",
      contact_notice: "",
    };
  },
  methods: {
    sendContactMessage() {
      if (!this.validEmail(this.contact_email)) {
        this.contact_notice = "The email address is badly formatted.";
      } else if (this.contact_message.length < 10) {
        this.contact_notice = "Your message is too short";
      } else {
        const url = `https://europe-west1-appya20.cloudfunctions.net/sendEmail?email_from=${this.contact_email}&message=${this.contact_message}`;
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch(url, requestOptions);
        this.show_contact = false;
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>


<style scoped>
textarea {
  resize: none;
}

.scroll::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* Chrome/Safari/Webkit */
}

.scroll {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
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
  color: #fff;
}

.hvr-fade:visited {
  background-color: #f85f6a;
}
</style>