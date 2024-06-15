import { defineStore } from "pinia";
import Swal from "sweetalert2";
import router from "@/router"; 

export const useAuthenticationStore = defineStore("authenticationStore", {
  state: () => ({
    isAuthenticated: false,
    user: {},
  }),

  actions: {
    async login(email, password) {
      try {
        let response = await fetch("http://localhost:5000/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          let data = await response.json();
          this.isAuthenticated = true;
          this.user = data;
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You have logged in successfully!',
          }).then(() => {
            router.push({ name: 'Home' }); 
          });
        } else {
          this.isAuthenticated = false;
          console.error("Login failed:", response.status, response.statusText);
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Invalid email or password. Please try again.',
          });
        }
      } catch (error) {
        this.isAuthenticated = false;
        console.error("Error during login:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred during login. Please try again later.',
        });
      }
    },

    async logout() {
      try {
        let response = await fetch(`http://localhost:5000/students/${this.user.id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          this.isAuthenticated = false;
          this.user = {};
          Swal.fire({
            icon: 'success',
            title: 'Logged Out',
            text: 'You have been logged out successfully!',
          });
        } else {
          console.error("Logout failed:", response.status, response.statusText);
          Swal.fire({
            icon: 'error',
            title: 'Logout Failed',
            text: 'Could not log out. Please try again.',
          });
        }
      } catch (error) {
        console.error("Error during logout:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred during logout. Please try again later.',
        });
      }
    },
  },
});
