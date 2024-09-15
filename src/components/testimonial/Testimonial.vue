<template>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center" data-aos="fade-up">
                <h4 class="section-title bg-white text-center text-utama px-3">
                    <i class="bi bi-filter-right"></i> Testimonial
                    <i class="bi bi-filter-left"></i>
                </h4>
                <h1 class="mb-5">Our Students Say!</h1>
            </div>
            <Carousel :breakpoints="breakpoints" :wrap-around="true" :autoplay="3000" :transition="2000">
                <Slide v-for="(slide, index) in testimonial" :key="index">
                    <div class="carousel__item" data-aos="fade-up">
                        <img :src="slide.image" alt="Slide Image"
                            class="carousel__image rounded-circle border p-2 mx-auto mb-3" />
                        <h5 class="mb-0">{{ slide.name }}</h5>
                        <p>{{ slide.class }}</p>
                        <div class="testimonial-text bg-utama text-white bg-opacity-25 text-center mx-2">
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
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { ref } from "vue";
import testimonial1 from "../../assets/img/testimonial-1.jpg";
import testimonial2 from "../../assets/img/testimonial-2.jpg";
import testimonial3 from "../../assets/img/testimonial-3.jpg";
import testimonial4 from "../../assets/img/testimonial-4.jpg";

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

const breakpoints = ref({
    768: {
        itemsToShow: 1
    },
    1024: {
        itemsToShow: 3
    }
});
</script>