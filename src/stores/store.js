import { defineStore } from "pinia";
import books from "../books";
import Swal from "sweetalert2";
import { useAuthenticationStore } from "./auth"; 

export const useBookStore = defineStore("bookStore", {
  state: () => ({
    counter: 10,
    books: books,
    wishlist: { items: [] },
    cart: { items: [] },
  }),

  // methods
  actions: {
    addOrRemoveToWishlist(book) {
      const authStore = useAuthenticationStore();

      if (!authStore.isAuthenticated) {
        Swal.fire({
          icon: 'info',
          title: 'Please Login',
          text: 'You must login first before removing items from the cart.',
        });
        return;
      }
      else {
      let index = this.wishlist.items.findIndex((item) => item.book.id === book.id);

      if (index === -1) {
        this.wishlist.items.push({ book: book });
      } else {
        this.wishlist.items.splice(index, 1);
      }
    }
    },

    checkExistence(book) {
      return this.cart.items.some((item) => item.book.id === book.id);
    },

    async addToCart(book) {
      const authStore = useAuthenticationStore();

      if (!authStore.isAuthenticated) {
        Swal.fire({
          icon: 'info',
          title: 'Please Login',
          text: 'You must login first before adding items to the cart.',
        });
        return;
      }

      if (!this.checkExistence(book)) {
        // Product does not exist in the cart
        this.cart.items.push({
          book: book,
          quantity: 1,
        });
      } else {
        // Product already exists in the cart, increment its quantity
        const existingItem = this.cart.items.find((item) => item.book.id === book.id);
        if (existingItem) {
          existingItem.quantity++;
        }
      }

      book.quantity--;
      console.log(book.quantity);
    },

    async removeFromCart(book) {
      let index = this.cart.items.findIndex((item) => item.book.id === book.id);

      if (index !== -1) {
        this.cart.items.splice(index, 1);
      } else {
        console.error(`Book not found in the cart: ${book.id}`);
      }
    },

    formatCurrency(value) {
      return Intl.NumberFormat("en-EG", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      }).format(value);
    },

    decreaseQuantity(item) {
      item.quantity--;

      if (item.quantity === 0) {
        const index = this.cart.items.findIndex((iitem) => iitem.book.id === item.book.id);
        this.cart.items.splice(index, 1);
      }

      item.book.quantity++;
      console.log(item.quantity, item.book.quantity);
    },

    increaseQuantity(item) {
      if (item.book.quantity > 0) {
        item.quantity++;
        item.book.quantity--;
        console.log(item.quantity, item.book.quantity);
      }
    },

    getTotalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.cart.items.length; i++) {
        totalPrice += this.cart.items[i].book.price * this.cart.items[i].quantity;
      }
      return totalPrice;
    },
  },
});
