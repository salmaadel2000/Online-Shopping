<template>
  <section class="login_section">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="login_inner">
            <div class="row justify-content-center">
              <div class="col-md-10">
                <div class="login_form_inner">
                  <div class="login_field" v-if="!authenticationStore.isAuthenticated">
                    <h3 class="text-center">Login</h3>
                    <form @submit.prevent="login">
                      <div class="mb-3">
                        <label class="form-label" for="email">Email: <span class="text-danger">*</span></label>
                        <input
                          v-model="email"
                          class="form-control"
                          name="email"
                          placeholder="Enter Your Email"
                          type="email"
                        />
                        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="password">Password: <span class="text-danger">*</span></label>
                        <input
                          v-model="password"
                          class="form-control"
                          name="password"
                          placeholder="Enter Your Password"
                          type="password"
                        />
                        <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
                      </div>
                      <button id="submitBtn" class="login_form_submit btn btn-primary" type="submit">
                        Submit
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
import { useAuthenticationStore } from "@/stores/auth";

export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
      authenticationStore: useAuthenticationStore(),
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
      return re.test(String(email).toLowerCase());
    },
    validate() {
      this.errors.email = "";
      this.errors.password = "";

      if (!this.email) {
        this.errors.email = "Email is required.";
      } else if (!this.validateEmail(this.email)) {
        this.errors.email = "Invalid email format.";
      }

      if (!this.password) {
        this.errors.password = "Password is required.";
      }

      return !this.errors.email && !this.errors.password;
    },
    async login() {
      if (this.validate()) {
        try {
          await this.authenticationStore.login(this.email, this.password);
        } catch (error) {
          console.error("Login error:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
.login_section {
  background-color: #f1f1f1;
  padding: 120px 0;
}

.login_inner {
  background-color: #fff;
  position: relative;
  box-shadow: 20px 22px 44px #cccc;
  border-radius: 25px;
}

.login_field {
  padding: 60px 30px 90px 100px;
}

.login_field h3 {
  color: #000;
  font-size: 40px;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 10px;
}

.form-label {
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
  border-bottom: 2px solid var(--first-color);
}

.login_form_submit {
  background: var(--first-color);
  border: none;
  color: #fff;
  padding: 10px 15px;
  width: 25%;
  margin-top: 25px;
  border-radius: 35px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
}

.text-danger {
  color: red;
  font-size: 19px;
  margin-top: 5px;
}

@media (max-width: 767px) {
  .login_field {
    padding: 40px 20px 60px 20px;
  }
}
</style>
