class Carousel {
    constructor(e) {
        this.element = e;
        this.slidesContainer = e.querySelector(".slides");
        this.prevBtn = e.querySelector(".prev-btn");
        this.nextBtn = e.querySelector(".next-btn");
        this.indicators = e.querySelectorAll(".indicator");
        this.slides = e.querySelectorAll(".slides img");
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.nextBtn.addEventListener("click", () => this.nextSlide());
        this.prevBtn.addEventListener("click", () => this.prevSlide());

        this.indicators.forEach((e, t) => {
            e.addEventListener("click", () => this.goToSlide(t));
        });

        this.element.addEventListener("keydown", e => {
            if (e.key === "ArrowLeft") this.prevSlide();
            if (e.key === "ArrowRight") this.nextSlide();
        });

        window.addEventListener("resize", () => this.updateCarrossel());
        this.updateCarrossel();
    }

    getSlidesToShow() {
        return window.innerWidth >= 1024
            ? 3
            : window.innerWidth >= 768
            ? 2
            : 1;
    }

    updateCarrossel() {
        if (this.slides.length === 0) return;

        let e = this.getSlidesToShow();
        let t = this.slides[0].offsetWidth + 16;
        let s = Math.max(0, this.slides.length - e);

        this.currentIndex = Math.min(this.currentIndex, s);

        this.slidesContainer.scrollTo({
            left: this.currentIndex * t,
            behavior: "smooth"
        });

        this.indicators.forEach((e, t) => {
            e.classList.toggle("active", t === this.currentIndex);
        });
    }

    nextSlide() {
        let e = this.getSlidesToShow();
        let t = Math.max(0, this.slides.length - e);

        if (this.currentIndex < t)
            this.currentIndex++;
        else
            this.currentIndex = 0;

        this.updateCarrossel();
    }

    prevSlide() {
        let e = this.getSlidesToShow();
        let t = Math.max(0, this.slides.length - e);

        if (this.currentIndex > 0)
            this.currentIndex--;
        else
            this.currentIndex = t;

        this.updateCarrossel();
    }

    goToSlide(e) {
        let t = this.getSlidesToShow();
        let s = Math.max(0, this.slides.length - t);

        this.currentIndex = Math.min(e, s);
        this.updateCarrossel();
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carrosel").forEach(e => {
        new Carousel(e);
    });
});

window.addEventListener("scroll", function () {
    let e = document.querySelector(".scroll-top");
    if (window.pageYOffset > 300)
        e.classList.add("show");
    else
        e.classList.remove("show");
});
