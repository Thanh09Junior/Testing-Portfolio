
document.addEventListener("DOMContentLoaded", function () {
    const aboutMeSection = document.querySelector(".About_Me");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const aboutMePosition = aboutMeSection.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight > aboutMePosition) {
            aboutMeSection.classList.add("service-me-show");
        } else {
            aboutMeSection.classList.remove("service-me-show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceSection = document.querySelector(".Service");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const servicePosition = serviceSection.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight > servicePosition) {
            serviceSection.classList.add("service-show");
        } else {
            serviceSection.classList.remove("service-show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectSection = document.querySelector(".Project");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const projectPosition = projectSection.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight > projectPosition) {
            projectSection.classList.add("project-show");
        } else {
            projectSection.classList.remove("project-show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fullLienHeSection = document.querySelector(".FullLienHe");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const fullLienHePosition = fullLienHeSection.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition + windowHeight > fullLienHePosition) {
            fullLienHeSection.classList.add("full-lienhe-show");
        } else {
            fullLienHeSection.classList.remove("full-lienhe-show");
        }
    });
});