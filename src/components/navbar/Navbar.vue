<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div class="container-fluid">
            <a href="#home" class="navbar-brand px-4 py-3">
                <h2 class="m-0 text-utama">
                    <i class="bi bi-journals"></i> eLEARNING
                </h2>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto fs-6 fw-bold">
                    <li class="nav-item navigasi">
                        <a class="nav-link text-utama" aria-current="page" href="#home">HOME</a>
                    </li>
                    <li class="nav-item navigasi">
                        <a class="nav-link text-utama" href="#about">ABOUT</a>
                    </li>
                    <li class="nav-item navigasi">
                        <a class="nav-link text-utama" href="#course">COURSE</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-utama dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            PAGES
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item text-utama" href="#team">Our Team</a></li>
                            <li><a class="dropdown-item text-utama" href="#testimonial">Testimonial</a></li>
                        </ul>
                    </li>
                    <li class="nav-item navigasi">
                        <a class="nav-link text-utama" href="#contact">CONTACT</a>
                    </li>
                    <!-- <li class="nav-item navigasi bg-utama py-4 px-lg-5 d-none d-lg-block">
            <a class="nav-link text-utama" href="#join">Join Now <i class="bi bi-arrow-right"></i></a>
          </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.text-utama:hover {
    color: #06BBCC;
}
</style>