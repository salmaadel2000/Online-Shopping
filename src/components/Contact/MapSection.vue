<template>
    <section class="map_sec">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="map_inner">
              <h4>Find Us on Google Map</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita
                aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia
                error.
              </p>
              <div class="map_bind">
                <!-- Google Maps Embed for Cairo, Egypt -->
                <iframe
                  width="100%"
                  height="450"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.559246550771!2d31.23571131515765!3d30.04441998187988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b83fdbf8c5%3A0x3fc3d06ac5f997e8!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1623736888067!5m2!1sen!2seg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'MapSection'
  };
  </script>
  
  <style scoped>
  .map_sec {
    padding: 50px 0;
  }
  
  .map_inner h4,
  .map_inner p {
    color: #000;
    text-align: center;
  }
  
  .map_inner p {
    font-size: 13px;
  }
  
  .map_bind {
    margin-top: 50px;
    border-radius: 30px;
    overflow: hidden;
  }
  
  /* Optional: Customize iframe styling */
  .map_bind iframe {
    border-radius: 30px;
  }
  </style>
  