class Carousel {
    constructor(element) {
        this.element = element;
        this.slidesContainer = element.querySelector('.slides');
        this.prevBtn = element.querySelector('.prev-btn');
        this.nextBtn = element.querySelector('.next-btn');
        this.indicators = element.querySelectorAll('.indicator');
        this.slides = element.querySelectorAll('.slides img');
        
        this.currentIndex = 0;
        this.init();
    }
    
    init() {
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Navegação por teclado apenas para o carrossel em foco
        this.element.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
        
        window.addEventListener('resize', () => this.updateCarrossel());
        
        this.updateCarrossel();
    }
    
    getSlidesToShow() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }
    
    updateCarrossel() {
        if (this.slides.length === 0) return;
        
        const slidesToShow = this.getSlidesToShow();
        const slideWidth = this.slides[0].offsetWidth + 16;
        const maxIndex = Math.max(0, this.slides.length - slidesToShow);
    
        this.currentIndex = Math.min(this.currentIndex, maxIndex);    
        this.slidesContainer.scrollTo({
            left: this.currentIndex * slideWidth,
            behavior: 'smooth'
        });
                
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    nextSlide() {
        const slidesToShow = this.getSlidesToShow();
        const maxIndex = Math.max(0, this.slides.length - slidesToShow);
        
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.updateCarrossel();
    }
    
    prevSlide() {
        const slidesToShow = this.getSlidesToShow();
        const maxIndex = Math.max(0, this.slides.length - slidesToShow);
        
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = maxIndex;
        }
        this.updateCarrossel();
    }
    
    goToSlide(index) {
        const slidesToShow = this.getSlidesToShow();
        const maxIndex = Math.max(0, this.slides.length - slidesToShow);
        this.currentIndex = Math.min(index, maxIndex);
        this.updateCarrossel();
    }
}

// Inicializar todos os carrosséis quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos os carrosséis
    document.querySelectorAll('.carrosel').forEach(carrosel => {
        new Carousel(carrosel);
    });
});