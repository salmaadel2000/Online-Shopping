<template>
    <div class="slider" style="height: 400px;">
      <div class="slides">
        <div v-for="(slide, index) in slides" :key="index" class="slide-item" :style="{ display: index === currentIndex ? 'block' : 'none' }">
          <img :src="slide.image" :alt="slide.alt" class="slide-image">
          <div class="overlay">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        slides: [
          { id: 1, image: "https://img.freepik.com/free-photo/medium-shot-smiley-woman-with-clothes_23-2149726076.jpg?t=st=1718455855~exp=1718459455~hmac=c85472ddeb687d8bd8a03245530a039aaafdd16f439c3de4156e65f0e5190d54&w=996", alt: "Slide 1", title: "Fashion Trends", description: "Discover the latest fashion trends." },
          { id: 2, image: "https://img.freepik.com/free-photo/full-shot-woman-sitting-bed_23-2149726112.jpg?t=st=1718455878~exp=1718459478~hmac=013c30547b0873e33e35e3d4bf2daa7c4de9f516b80562d52ce2a3d7ea401b1e&w=996", alt: "Slide 2", title: "Home Comfort", description: "Relax in style with our home decor." },
          { id: 3, image: "https://img.freepik.com/free-photo/medium-shot-woman-holding-clothes_23-2149726097.jpg?t=st=1718455907~exp=1718459507~hmac=536d7f2681db7ddec838bd3320707491a667cffa44869a941bbc2ade51a9e343&w=996", alt: "Slide 3", title: "Fashion Choices", description: "Explore a variety of clothing options." },
          // Add more slides as needed
        ],
        intervalId: null // To hold the interval ID for stopping later
      };
    },
    mounted() {
      // Start automatic slideshow when component is mounted
      this.startSlideshow();
    },
    methods: {
      startSlideshow() {
        this.intervalId = setInterval(() => {
          this.nextSlide();
        }, 2000); // Change slide every 2 seconds (2000 milliseconds)
      },
      stopSlideshow() {
        clearInterval(this.intervalId); // Stop slideshow
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length; // Loop back to beginning
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length; // Loop back to end
      }
    },
    beforeDestroy() {
      // Clean up interval when component is destroyed to prevent memory leaks
      clearInterval(this.intervalId);
    }
  };
  </script>
  
  <style scoped>
  .slider {
    margin-top: 70px ;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease;
    height: 100%;
  }
  
  .slide-item {
    position: relative;
    flex: 0 0 100%;
    height: 100%;
  }
  
  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .content {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--first-color);
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    max-width: 80%;
  }
  </style>
  