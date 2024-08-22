<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { ref, reactive } from "vue";
import testimonial1 from "./assets/img/testimonial-1.jpg";
import testimonial2 from "./assets/img/testimonial-2.jpg";
import testimonial3 from "./assets/img/testimonial-3.jpg";
import testimonial4 from "./assets/img/testimonial-4.jpg";
// import HelloWorld from './components/HelloWorld.vue'
// import { ref } from "vue";

const testimonial = ref([
  {
    image: testimonial1,
    name: "Client Name",
    class: "profession",
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit",
  },
  {
    image: testimonial2,
    name: "Client Name",
    class: "profession",
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit",
  },
  {
    image: testimonial3,
    name: "Client Name",
    class: "profession",
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit",
  },
  {
    image: testimonial4,
    name: "Client Name",
    class: "profession",
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit",
  },
]);
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
    <div class="container-fluid">
      <a href="#home" class="navbar-brand px-4 py-3">
        <h2 class="m-0 text-primary">
          <i class="bi bi-journals"></i> eLEARNING
        </h2>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item navigasi">
            <a class="nav-link" aria-current="page" href="#home">HOME</a>
          </li>
          <li class="nav-item navigasi">
            <a class="nav-link" href="#about">ABOUT</a>
          </li>
          <li class="nav-item navigasi">
            <a class="nav-link" href="#course">COURSE</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item navigasi">
            <a class="nav-link" href="#contact">CONTACT</a>
          </li>
          <!-- <li class="nav-item navigasi bg-primary py-4 px-lg-5 d-none d-lg-block">
            <a class="nav-link" href="#join">Join Now <i class="bi bi-arrow-right"></i></a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>

  <!--carousel  -->
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide tulisan-kiri"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="./assets/img/carousel-1.jpg"
          class="d-block w-100"
          alt="Vue logo"
        />
        <div
          class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style="background: rgba(24, 29, 56, 0.7)"
        >
          <div class="container">
            <div class="row justify-content-start text-align-right">
              <div class="col-sm-10 col-lg-8 ms-5">
                <h5 class="text-primary text-uppercase mb-3 slide-in-top">
                  Best Online Courses
                </h5>
                <h1 class="display-3 text-white slide-in-top">
                  The Best Online Learning Platform
                </h1>
                <p class="fs-5 text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  sanctus eirmod elitr.
                </p>
                <a
                  href=""
                  class="btn btn-primary py-md-3 px-md-5 me-3 slide-in-left"
                  >Read More</a
                >
                <a href="" class="btn btn-light py-md-3 px-md-5 slide-in-right"
                  >Join Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="./assets/img/carousel-2.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div
          class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style="background: rgba(24, 29, 56, 0.7)"
        >
          <div class="container">
            <div class="row justify-content-start">
              <div class="col-sm-10 col-lg-8 ms-5">
                <h5 class="text-primary text-uppercase mb-3 slide-in-top">
                  Best Online Courses
                </h5>
                <h1 class="display-3 text-white slide-in-top">
                  Get Educated Online From Your Home
                </h1>
                <p class="fs-5 text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  sanctus eirmod elitr.
                </p>

                <button
                  class="btn btn-primary py-md-3 px-md-5 me-3 slide-in-left"
                >
                  Read More
                </button>
                <a href="" class="btn btn-light py-md-3 px-md-5 slide-in-right"
                  >Join Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- service product -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="bi bi-mortarboard-fill fs-1 icon-service"></i>
              <h5 class="mb-3">Skilled Instructors</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="bi bi-globe fs-1 icon-service"></i>
              <h5 class="mb-3">Online Classes</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="bi bi-house-fill fs-1 icon-service"></i>
              <h5 class="mb-3">Home Projects</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="service-item text-center pt-3">
            <div class="p-4">
              <i class="bi bi-book-half fs-1 icon-service"></i>
              <h5 class="mb-3">Book Library</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- about -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" style="min-height: 400px">
          <div class="position-relative h-100">
            <img
              class="img-fluid position-absolute w-100 h-100"
              src="./assets/img/about.jpg"
              alt=""
              style="object-fit: cover"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <h4 class="section-title bg-white text-start text-primary pe-3">
            About Us
            <i class="bi bi-filter-left"></i>
          </h4>
          <h1 class="mb-4">Welcome to eLEARNING</h1>
          <p class="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p class="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div class="row gy-2 gx-4 mb-4">
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="bi bi-arrow-right text-primary me-2"></i>Skilled
                Instructors
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="bi bi-arrow-right text-primary me-2"></i>Online
                Classes
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="bi bi-arrow-right text-primary me-2"></i>International
                Certificate
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="bi bi-arrow-right text-primary me-2"></i>Skilled
                Instructors
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="bi bi-arrow-right text-primary me-2"></i>Online
                Classes
              </p>
            </div>
            <div class="col-sm-6">
              <p class="mb-0">
                <i class="bi bi-arrow-right text-primary me-2"></i>International
                Certificate
              </p>
            </div>
          </div>
          <a class="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
        </div>
      </div>
    </div>
  </div>
  <!-- end about  -->

  <!-- Categories Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center">
        <h4 class="section-title bg-white text-center text-primary px-3">
          <i class="bi bi-filter-right"></i> Categories
          <i class="bi bi-filter-left"></i>
        </h4>
        <h1 class="mb-5">Courses Categories</h1>
      </div>
      <div class="row g-3">
        <div class="col-lg-7 col-md-6">
          <div class="row g-3">
            <div class="col-lg-12 col-md-12">
              <a
                class="position-relative d-block overflow-hidden zoom-link"
                href=""
              >
                <img
                  class="img-fluid zoom-item"
                  src="./assets/img/cat-1.jpg"
                  alt=""
                />
                <div
                  class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style="margin: 1px"
                >
                  <h5 class="m-0">Web Design</h5>
                  <small class="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
            <div class="col-lg-6 col-md-12">
              <a
                class="position-relative d-block overflow-hidden zoom-link"
                href=""
              >
                <img
                  class="img-fluid zoom-item"
                  src="./assets/img/cat-2.jpg"
                  alt=""
                />
                <div
                  class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style="margin: 1px"
                >
                  <h5 class="m-0">Graphic Design</h5>
                  <small class="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
            <div class="col-lg-6 col-md-12">
              <a
                class="position-relative d-block overflow-hidden zoom-link"
                href=""
              >
                <img
                  class="img-fluid zoom-item"
                  src="./assets/img/cat-3.jpg"
                  alt=""
                />
                <div
                  class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style="margin: 1px"
                >
                  <h5 class="m-0">Video Editing</h5>
                  <small class="text-primary">49 Courses</small>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-6" style="min-height: 350px">
          <a
            class="position-relative d-block h-100 overflow-hidden zoom-link"
            href=""
          >
            <img
              class="img-fluid position-absolute w-100 h-100 zoom-item"
              src="./assets/img/cat-4.jpg"
              alt=""
              style="object-fit: cover"
            />
            <div
              class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
              style="margin: 1px"
            >
              <h5 class="m-0">Online Marketing</h5>
              <small class="text-primary">49 Courses</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Categories Start -->

  <!-- Courses Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center">
        <h4 class="section-title bg-white text-center text-primary px-3">
          <i class="bi bi-filter-right"></i> Courses
          <i class="bi bi-filter-left"></i>
        </h4>
        <h1 class="mb-5">Popular Courses</h1>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="course-item bg-light zoom-link">
            <div class="position-relative overflow-hidden">
              <img
                class="img-fluid zoom-item"
                src="./assets/img/course-1.jpg"
                alt=""
              />
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              >
                <a
                  href="#"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style="border-radius: 30px 0 0 30px"
                  >Read More</a
                >
                <a
                  href="#"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3"
                  style="border-radius: 0 30px 30px 0"
                  >Join Now</a
                >
              </div>
            </div>
            <div class="text-center p-4 pb-0">
              <h3 class="mb-0">$149.00</h3>
              <div class="mb-3">
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small>(123)</small>
              </div>
              <h5 class="mb-4">
                Web Design & Development Course for Beginners
              </h5>
            </div>
            <div class="d-flex border-top">
              <small class="flex-fill text-center border-end py-2"
                ><i class="fa fa-user-tie text-primary me-2"></i>John Doe</small
              >
              <small class="flex-fill text-center border-end py-2"
                ><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small
              >
              <small class="flex-fill text-center py-2"
                ><i class="fa fa-user text-primary me-2"></i>30 Students</small
              >
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="course-item bg-light zoom-link">
            <div class="position-relative overflow-hidden">
              <img
                class="img-fluid zoom-item"
                src="./assets/img/course-2.jpg"
                alt=""
              />
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              >
                <a
                  href="#"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style="border-radius: 30px 0 0 30px"
                  >Read More</a
                >
                <a
                  href="#"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3"
                  style="border-radius: 0 30px 30px 0"
                  >Join Now</a
                >
              </div>
            </div>
            <div class="text-center p-4 pb-0">
              <h3 class="mb-0">$149.00</h3>
              <div class="mb-3">
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small>(123)</small>
              </div>
              <h5 class="mb-4">
                Web Design & Development Course for Beginners
              </h5>
            </div>
            <div class="d-flex border-top">
              <small class="flex-fill text-center border-end py-2"
                ><i class="fa fa-user-tie text-primary me-2"></i>John Doe</small
              >
              <small class="flex-fill text-center border-end py-2"
                ><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small
              >
              <small class="flex-fill text-center py-2"
                ><i class="fa fa-user text-primary me-2"></i>30 Students</small
              >
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="course-item bg-light zoom-link">
            <div class="position-relative overflow-hidden">
              <img
                class="img-fluid zoom-item"
                src="./assets/img/course-3.jpg"
                alt=""
              />
              <div
                class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
              >
                <a
                  href="#"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                  style="border-radius: 30px 0 0 30px"
                  >Read More</a
                >
                <a
                  href="#"
                  class="flex-shrink-0 btn btn-sm btn-primary px-3"
                  style="border-radius: 0 30px 30px 0"
                  >Join Now</a
                >
              </div>
            </div>
            <div class="text-center p-4 pb-0">
              <h3 class="mb-0">$149.00</h3>
              <div class="mb-3">
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small class="fa fa-star text-primary"></small>
                <small>(123)</small>
              </div>
              <h5 class="mb-4">
                Web Design & Development Course for Beginners
              </h5>
            </div>
            <div class="d-flex border-top">
              <small class="flex-fill text-center border-end py-2"
                ><i class="fa fa-user-tie text-primary me-2"></i>John Doe</small
              >
              <small class="flex-fill text-center border-end py-2"
                ><i class="fa fa-clock text-primary me-2"></i>1.49 Hrs</small
              >
              <small class="flex-fill text-center py-2"
                ><i class="fa fa-user text-primary me-2"></i>30 Students</small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Courses End -->

  <!-- Team Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center">
        <h4 class="section-title bg-white text-center text-primary px-3">
          <i class="bi bi-filter-right"></i> Instructors
          <i class="bi bi-filter-left"></i>
        </h4>
        <h1 class="mb-5">Expert Instructors</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-3 col-md-6">
          <div class="team-item bg-light zoom-link">
            <div class="overflow-hidden">
              <img
                class="img-fluid zoom-item"
                src="./assets/img/team-1.jpg"
                alt=""
              />
            </div>
            <div
              class="position-relative d-flex justify-content-center"
              style="margin-top: -23px"
            >
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-facebook"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-twitter"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-instagram"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="team-item bg-light zoom-link">
            <div class="overflow-hidden">
              <img
                class="img-fluid zoom-item"
                src="./assets/img/team-2.jpg"
                alt=""
              />
            </div>
            <div
              class="position-relative d-flex justify-content-center"
              style="margin-top: -23px"
            >
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-facebook"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-twitter"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-instagram"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="team-item bg-light zoom-link">
            <div class="overflow-hidden">
              <img
                class="img-fluid zoom-item"
                src="./assets/img/team-3.jpg"
                alt=""
              />
            </div>
            <div
              class="position-relative d-flex justify-content-center"
              style="margin-top: -23px"
            >
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-facebook"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-twitter"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-instagram"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="team-item bg-light zoom-link">
            <div class="overflow-hidden">
              <img
                class="img-fluid zoom-item"
                src="./assets/img/team-4.jpg"
                alt=""
              />
            </div>
            <div
              class="position-relative d-flex justify-content-center"
              style="margin-top: -23px"
            >
              <div class="bg-light d-flex justify-content-center pt-2 px-1">
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-facebook"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-twitter"></i
                ></a>
                <a class="btn btn-sm-square btn-primary mx-1" href=""
                  ><i class="bi bi-instagram"></i
                ></a>
              </div>
            </div>
            <div class="text-center p-4">
              <h5 class="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Team End -->

  <!-- Testimonial Start -->
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center">
        <h4 class="section-title bg-white text-center text-primary px-3">
          <i class="bi bi-filter-right"></i> Testimonial
          <i class="bi bi-filter-left"></i>
        </h4>
        <h1 class="mb-5">Our Students Say!</h1>
      </div>
      <Carousel
        :items-to-show="3"
        :wrap-around="true"
        :autoplay="3000"
        :transition="2000"
      >
        <Slide v-for="(slide, index) in testimonial" :key="index">
          <div class="carousel__item">
            <img
              :src="slide.image"
              alt="Slide Image"
              class="carousel__image rounded-circle border p-2 mx-auto mb-3"
            />
            <h5 class="mb-0">{{ slide.name }}</h5>
            <p>{{ slide.class }}</p>
            <div
              class="testimonial-text bg-info bg-opacity-25 text-center mx-2"
            >
              <p class="mb-0 p-3">
                {{ slide.description }}
              </p>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
  <!-- Testimonial End -->

  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-light footer pt-5 mt-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Quick Link</h4>
          <a class="btn btn-link" href="">About Us</a>
          <a class="btn btn-link" href="">Contact Us</a>
          <a class="btn btn-link" href="">Privacy Policy</a>
          <a class="btn btn-link" href="">Terms & Condition</a>
          <a class="btn btn-link" href="">FAQs & Help</a>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Contact</h4>
          <p class="mb-2"><i class="bi bi-geo-alt-fill"></i> Jakarta</p>
          <p class="mb-2">
            <i class="bi bi-telephone-fill"></i> +62 823 7279 0729
          </p>
          <p class="mb-2">
            <i class="bi bi-envelope-fill"></i> mkurniaiqbal99@gmail.com
          </p>
          <div class="pt-2">
            <a
              class="btn btn-outline-light btn-social rounded-circle mx-1"
              href=""
              ><i class="bi bi-twitter"></i
            ></a>
            <a
              class="btn btn-outline-light btn-social rounded-circle mx-1"
              href=""
              ><i class="bi bi-facebook"></i
            ></a>
            <a
              class="btn btn-outline-light btn-social rounded-circle mx-1"
              href=""
              ><i class="bi bi-youtube"></i
            ></a>
            <a
              class="btn btn-outline-light btn-social rounded-circle mx-1"
              href=""
              ><i class="bi bi-linkedin"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Gallery</h4>
          <div class="row g-2 pt-2">
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="./assets/img/course-1.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="./assets/img/course-2.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="./assets/img/course-3.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="./assets/img/course-2.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="./assets/img/course-3.jpg"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid bg-light p-1"
                src="./assets/img/course-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div class="position-relative mx-auto" style="max-width: 400px">
            <input
              class="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="#">E-Lerning</a>, All Right
            Reserved.

            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
            Designed By
            <a class="border-bottom" href="https://htmlcodex.com"
              >HTML Codex - iqbal</a
            >
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu">
              <a href="">Home</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->
</template>

<style scoped>
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
.service-item:hover {
  background-color: aquamarine;
  color: white;
  transform: translateY(-10px);
}
.service-item {
  transition: background-color 0.3s, color 0.3s, transform 0.7s; /* Transisi untuk latar belakang, teks, dan transformasi */
}
.service-item .icon-service {
  color: aquamarine;
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
  text-align: left;
}
</style>
