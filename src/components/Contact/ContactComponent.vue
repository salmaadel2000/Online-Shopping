<template>
  <section class="contact_us">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="contact_inner">
            <div class="row">
              <div class="col-md-10">
                <div class="contact_form_inner">
                  <div class="contact_field">
                    <h3>Contact Us</h3>
                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                    <form @submit.prevent="submitForm">
                      <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" v-model="formData.name" placeholder="Name" />
                      </div>
                      <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="formData.email" placeholder="Email" />
                      </div>
                      <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="3" v-model="formData.message" placeholder="Message"></textarea>
                      </div>
                      <button type="submit" class="contact_form_submit btn btn-primary">
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted with data:', this.formData);
      // Reset form fields after submission (optional)
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }
  }
};
</script>

<style scoped>
.contact_us {
  background-color: #f1f1f1;
  padding: 120px 0;
}

.contact_inner {
  background-color: #fff;
  position: relative;
  box-shadow: 20px 22px 44px #cccc;
  border-radius: 25px;
}

.contact_field {
  padding: 60px 30px 90px 100px;
}

.contact_field h3 {
  color: #000;
  font-size: 40px;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 10px;
}

.contact_field p {
  color: #000;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 35px;
}

.form-control {
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ccc;
}

.form-control:focus {
  box-shadow: none;
  outline: none;
  border-bottom: 2px solid var(  --first-color);
}

.contact_form_submit {
  background:var(--first-color);
  border: none;
  color: #fff;
  padding: 10px 15px;
  width: 100%;
  margin-top: 25px;
  border-radius: 35px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
}

@media (max-width: 767px) {
  .contact_field {
    padding: 40px 20px 60px 20px;
  }
}
</style>
