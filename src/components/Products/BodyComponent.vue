<template>
  <div id="Books" class="mt-5 section">
    <div class="container">
      <h2 class="section__title-1">
        <span>Our Products</span>
      </h2>

      <div class="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 m-2">
        <div v-for="book in bookStore.books" :key="book.id" class="col-12 col-sm-6 col-lg-4">
          <div class="card m-2 shadow">
            <img :src="book.image" :alt="book.name" class="border rounded" />
            <h2 class="card-title text-center m-2">{{ book.name }}</h2>
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <div class="row">
                    <div class="col-12 my-2">
                      <i class="fa-solid fa-check me-3"></i>{{ book.category }}
                    </div>
                    <div class="col-12 my-2">
                      <i class="fa-solid fa-check me-3"></i>
                      <span :class="[book.pagesNo >= 100 ? 'text-success' : 'text-danger']">{{ book.pagesNo }}</span>
                    </div>
                    <div class="col-12 my-2">
                      <i class="fa-solid fa-check me-3"></i>{{ book.ISBN }}
                    </div>
                  </div>

                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-12 my-2">
                      <i class="fa-solid fa-check me-3"></i>{{ book.author }}
                    </div>
                    <div class="col-12 my-2">
                      <i class="fa-solid fa-check me-3"></i>{{ bookStore.formatCurrency(book.price) }}
                    </div>
                    
                  </div>
                </div>
                <div class="col-12 my-2 added">
                      <div class="row justify-content-around align-items-center">
                        <button :class="[
                          'btn fs-5 wishlist',
                          bookStore.wishlist.items.find(item => item.book.id === book.id) ? 'added-to-wishlist' : '',
                        ]"
                        @click="bookStore.addOrRemoveToWishlist(book)">
                          <i class="fa-solid fa-heart"></i> Wishlist
                        </button>
                        <button :class="[
                          'btn fs-5 cart',
                          bookStore.cart.items.find(item => item.book.id === book.id) ? 'added-to-cart' : '',
                        ]"
                        @click="addToCart(book)">
                          <i class="fa-solid fa-cart-shopping"></i> Cart
                        </button>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useBookStore } from "@/stores/store";

export default {
  name: "Books",
  data: () => ({
    bookStore: useBookStore(),
  }),
  methods: {
    addToCart(book) {
        this.bookStore.addToCart(book);
    },
  },
};
</script>

<style scoped>
.wishlist{
  background: var(--black-color);
  color: var(--white-color);
  margin-bottom: 10px;
}
.section {
  padding: 4rem 2rem;
}

.section__title-1 {
  font-size: 1.75rem;
  margin: 0.75rem auto 2rem;
  position: relative;
  width: max-content;
}

.section__title-1::after {
  content: "";
  width: 40px;
  height: 28px;
  background-color: hsla(14, 98%, 50%, 0.2);
  position: absolute;
  top: -4px;
  right: -8px;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.container {
  max-width: 1120px;
  margin: auto;
}

/* Book Card styles */
.card {
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.card img {
  width: 100%;
  height: 40vh; /* Adjust height as needed */
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  margin: 1rem 0;
}

.card-body {
  padding: 1rem;
}

.card-body .row {
  font-size: 0.875rem;
}

.card-body .row i {
  font-size: 1rem;
  margin-right: 0.5rem;
}

.btn {
  background-color: ;
  text-align: center;
  padding: 10px;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn i {
  margin-right: 0.5rem;
}

.btn.added-to-wishlist {
  color: var(--white-color);
  background: var(--first-color);
}

.btn.added-to-wishlist:hover {
  background-color: hsl(0, 0%, 20%);
}

.btn.added-to-cart {
  background: var(--first-color);
  color: var(--white-color);
}

.btn.added-to-cart:hover {
  background-color: var(--first-color);
}
</style>
