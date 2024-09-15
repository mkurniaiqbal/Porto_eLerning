import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vue3-carousel/dist/carousel.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS

const app = createApp(App);


app.mount('#app');

// Initialize AOS after app has mounted
  setTimeout(() => {
    AOS.init({
      duration: 1200, // Durasi animasi dalam milidetik
    //   offset: 75, // Jarak dari bawah viewport untuk memicu animasi
      once: true, // Animasi hanya dijalankan sekali setelah scroll
    });
    // AOS.refreshHard();
  }, 1000); // Penundaan 100ms
