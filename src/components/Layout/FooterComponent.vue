<template>
    <footer class="dark-footer bg-dark">
      <div class="footer-content">
        <div class="footer-sections">
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Connect with Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contact Info</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2024 Your Website</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'DarkFooter',
  }
  </script>
  
  <style scoped>
  .dark-footer {
    margin-top: 30px;
    color: #fff; /* Light text color */
    padding: 40px 20px; /* Increased padding for top and bottom */
    text-align: center;
    font-size: 1.2rem; /* Increased font size */
    min-height: 280px; /* Ensure a minimum height for content */
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  h3{
    color: var(--first-color);
  }
  .footer-sections {
    display: flex;
    flex-wrap: wrap; /* Allow sections to wrap on smaller screens */
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .footer-section {
    flex: 1 1 300px; /* Flex basis to control width of sections */
    margin-right: 20px; /* Add some right margin between sections */
    margin-bottom: 20px; /* Add bottom margin to each section */
  }
  
  .footer-section:last-child {
    margin-right: 0; /* Remove right margin from last section */
  }
  
  .footer-section h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 8px;
  }
  
  .copyright {
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    .footer-section {
      flex: 1 1 100%; /* Full width for smaller screens */
      margin-right: 0;
    }
  }
  </style>
  