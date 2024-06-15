<template>
    <div class="main">
      <div class="banner">
        <div class="content">
          <h1>Shopping </h1>
          <p>By using our website you can design your own website very beautifully. <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
  
      <div class="half-half-image-text">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>Our Mission</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="content">
                <p>At Fluid Automotive, our purpose is to make automotive parts easily accessible for everyone. Working with our partner brands, we aim to retail the highest quality parts, whilst maintaining a high level of customer satisfaction.</p>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="img" style="background: url('https://img.freepik.com/free-photo/high-angle-clothes-bed-fast-fashion-concept_23-2149726122.jpg?size=626&ext=jpg&ga=GA1.1.853908403.1718451408&semt=ais_user') no-repeat center; background-size: cover;"></div>
            </div>
          </div>
        </div>
      </div>
      <SliderComponentVue/>
      <AboutComponent/>
    </div>
  </template>
  
  <script>
import SliderComponentVue from './SliderComponent.vue';
import AboutComponent from './AboutComponent.vue';
  export default {
    name: 'HomePage',
    components:{
        SliderComponentVue,
        AboutComponent
    }
  };
  </script>
  
  <style scoped>
.main{
    margin-bottom: 150px;
}
  .half-half-image-text {
    margin-top: 70px ;
    padding: 70px 0;
  }

  .half-half-image-text h1 {
    color: var(--sec-color);
  }

  .half-half-image-text .content {
    display: flex;
    align-items: center;
    padding: 35px 0;
  }

  .half-half-image-text .content p {
    font-size: 22px;
  }

  .half-half-image-text .img {
    min-height: 320px;
    height: 100%;
    border-radius: 10px;
    background: url('https://images.pexels.com/photos/89784/bmw-suv-all-terrain-vehicle-fog-89784.jpeg?cs=srgb&dl=automobile-bmw-car-89784.jpg&fm=jpg') no-repeat center;
    background-size: cover;
  }

  .banner {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/premium-photo/metal-shopping-cart-filled-with-cardboard-packages-is-positioned-laptop-representing-integration-ecommerce-shopping-digital-order-fulfillment_127746-14827.jpg?size=626&ext=jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .banner .content {
    text-align: center;
  }

  .banner .content h1 {
    font-size: 40px;
    margin-top: 80px;
    text-transform: uppercase;
    color: var(--first-color);
  }

  .banner .content p {
    margin: 20px auto;
    font-weight: 100;
    line-height: 25px;
  }

  .banner button {
    width: 150px;
    height: 40px;
    padding: 15px 0;
    text-align: center;
    margin: 20px 10px;
    border-radius: 25px;
    font-weight: bold;
    border: 2px solid var(--sec-color);
    background: transparent;
    color: var(--first-color);
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .banner button span {
    background: var(--sec-color);
    height: 100%;
    width: 0;
    border-radius: 25px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.5s;
  }

  .banner button:hover span {
    width: 100%;
  }

  .banner button:hover {
    border: none;
  }
</style>
