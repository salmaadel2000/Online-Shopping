<template>
  <div id="mainApp" class="container-fluid">
    <NavbarComponent />
    <router-view />
    <FooterComponentVue/>
  </div>
</template>

<script>
import FooterComponentVue from './components/Layout/FooterComponent.vue';
import NavbarComponent from "./components/Layout/NavbarComponent.vue";


export default {
  name: "App",
  components: {

    NavbarComponent,
   FooterComponentVue
  },
};
</script>

<style>
:root {
  --header-height: 3.5rem;
  --first-color: #DC5F00;
  --sec-color:hsl(0, 0%, 0%);
  --black-color: hsl(0, 0%, 0%);
  --white-color: hsl(0, 0%, 95%);
  --title-color: hsl(0, 0%, 0%);
  --text-color: hsl(0, 0%, 35%);
  --body-color: hsl(0, 0%, 87%);
  --container-color: hsl(0, 0%, 83%);
}
/* Base styles */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Bai Jamjuree', sans-serif;
  background-color: var(--body-color);
  color: var(--text-color);
  transition: background-color .4s;
}

h1, h2, h3, h4 {
  color: var(--title-color);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  font-size: 20px !important;
}
a:hover{
  color: var(--first-color);
}
img {
  max-width: 100%;
  height: auto;
}
#wishlist , #cart{
  height: 100vh;
}
</style>
