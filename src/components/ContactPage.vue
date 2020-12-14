<template>
  <div id="contact" class="p-4 bg-light">
    <div class="row justify-content-center mt-3 mb-3">
      <div class="col-lg-4">
        <h2>Any Questions?</h2>
        <p>Contact us by filling out the information below</p>
        <form>
          <div class="form-group text-left">
            <input
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
            <textarea
              class="form-control mt-3 scroll"
              placeholder="Enter Your Message"
              rows="5"
            >
            </textarea>
          </div>
          <button type="submit" class="btn btn-light rounded-pill custom-color">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


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
</style>
