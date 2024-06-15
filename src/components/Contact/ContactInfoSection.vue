<template>
    <div class="contact_info_sec">
      <h4>Contact Info</h4>
      <div class="d-flex info_single align-items-center">
        <i class="fas fa-headset"></i>
        <span>+91 8009 054294</span>
      </div>
      <div class="d-flex info_single align-items-center">
        <i class="fas fa-envelope-open-text"></i>
        <span>info@flightmantra.com</span>
      </div>
      <div class="d-flex info_single align-items-center">
        <i class="fas fa-map-marked-alt"></i>
        <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactInfoSection'
  }
  </script>
  
  <style scoped>
  .contact_info_sec {
    background-color: #2d2d2d;
    padding: 40px;
    border-radius: 25px 0 0 25px;
  }
  
  .contact_info_sec h4 {
    letter-spacing: 1px;
    padding-bottom: 15px;
  }
  
  .info_single {
    margin: 30px 0;
  }
  
  .info_single i {
    margin-right: 15px;
  }
  
  .info_single span {
    font-size: 14px;
    letter-spacing: 1px;
  }
  </style>
  