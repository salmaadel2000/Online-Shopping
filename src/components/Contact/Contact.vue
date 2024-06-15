<template>
  <ContactComponent/>
  <!-- <ContactInfoSection/> -->
  <MapSection/>
</template>

<script>
import ContactComponent from './ContactComponent.vue';
import ContactInfoSection from './ContactInfoSection.vue';
import MapSection from "./MapSection.vue"
export default {
components:{
    ContactComponent,
    ContactInfoSection,
    MapSection
}
}
</script>

<style>

</style>