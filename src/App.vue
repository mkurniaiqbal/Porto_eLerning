<script setup>

import Navbar from "./components/navbar/Navbar.vue";
import OverviewHeader from "./components/overview-header/OverviewHeader.vue";
import About from "./components/about/About.vue";
import ServiceProduct from "./components/service-product/ServiceProduct.vue";
import CategoryCourse from "./components/catergory-course/CategoryCourse.vue";
import PopulerCouses from "./components/populer-courses/PopulerCouses.vue";
import TeamInstructors from "./components/team-instructors/TeamInstructors.vue";
import Testimonial from "./components/testimonial/Testimonial.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template>
  <Navbar />

  <!--carousel  -->
  <OverviewHeader />

  <!-- service product -->
  <ServiceProduct />


  <!-- about -->
  <span id="about"></span>
  <About />
  <!-- end about  -->

  <!-- Categories Start -->
  <span id="course"></span>
  <CategoryCourse />
  <!-- Categories Start -->

  <!-- Courses Populer Start -->
  <PopulerCouses />
  <!-- Courses Populer End -->

  <!-- Team Start -->
  <span id="team"></span>
  <TeamInstructors />
  <!-- Team End -->

  <!-- Testimonial Start -->
  <span id="testimonial"></span>
  <Testimonial />
  <!-- Testimonial End -->

  <!-- Footer Start -->
  <span id="contact"></span>
  <Footer />
  <!-- Footer End -->
</template>

<style>
@media (min-width: 576px) {
  .ptm {
    font-size: 1.25rem !important;
  }
}

@media (min-width: 576px) and (max-width: 990px) {
  .mt-about {
    margin-top: 15px;
  }
}


@media (max-width: 576px) {
  .mobile {
    height: 400px !important;
    /* Height for mobile screens */
  }

  .pm {
    padding-right: 70px !important;
  }

  .htm {
    font-size: 30px !important;
  }

  .ptm {
    font-size: 15px !important;

  }

  .mt-about {
    margin-top: 10px;
  }
}

@media (max-width: 355px) {
  .mobile {
    height: 450px !important;
    /* Height for mobile screens */
  }
}

@media (max-width: 308px) {
  .mobile {
    height: 550px !important;
    /* Height for mobile screens */
  }
}

/* button read more */
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-left {
  animation: slideInLeft 1s ease-out;
}

/* end button read more */

/* button join now*/

@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-right {
  animation: slideInRight 1s ease-out;
}

/* end button join now*/

/* title carousel*/

@keyframes slideInTopNegatif {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-top {
  animation: slideInTopNegatif 1s ease-out;
}

/* title carousel*/

/* service product */
@keyframes slideInTopPositif {
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-top-positif {
  animation: slideInTopPositif 1s ease-out;
}

.text-utama {
  color: #06BBCC;
}

.bg-utama {
  background-color: #06BBCC !important;
}

.bg-utama:hover {
  background-color: #17d5e7 !important;
}

.service-item:hover {
  background-color: #06BBCC;
  color: white;
  transform: translateY(-10px);
}

.service-item {
  transition: background-color 0.3s, color 0.3s, transform 0.7s;
  /* Transisi untuk latar belakang, teks, dan transformasi */
}

.service-item .icon-service {
  color: #06BBCC;
}

.service-item:hover .icon-service {
  color: white;
}

/* end service product */

/* category */
.zoom-item {
  transition: transform 1s;
}

.zoom-link:hover .zoom-item {
  transform: scale(1.1);
}

/* end category */

.tulisan-kiri {
  text-align: left !important;
}
</style>
