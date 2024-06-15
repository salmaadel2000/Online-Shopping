<template>
  <div id="wishlist">
    <br /><br /><br /><br />
    <div class="card shadow bg-body-tertiary rounded">
      <div class="card-header">
        <h2 class="text-center">Wishlist</h2>
      </div>
      <div class="card-body">
        <h2
          v-if="bookStore.wishlist.items.length == 0"
          class="text-danger m-4 fs-3 text-center"
        >
          No Books In Wishlist Now, You Can Added
        </h2>

        <table v-else class="table table-bordred table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">ISBN</th>
              <th scope="col">Author</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in bookStore.wishlist.items">
              <td>{{ item.book.name }}</td>
              <td>{{ item.book.ISBN }}</td>
              <td>{{ item.book.author }}</td>
              <td>
                <button
                  class="btn btn-danger p-2"
                  @click="bookStore.addOrRemoveToWishlist(item.book)"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useBookStore } from "@/stores/store";

export default {
  name: "wishlist",
  data: () => ({
    bookStore: useBookStore(),
  }),
};
</script>
<style scoped>
</style>
