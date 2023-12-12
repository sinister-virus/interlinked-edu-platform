 let currentIndex = 0;

        function showSlide(index) {
            const container = document.querySelector('.carousel-container');
            currentIndex = index;
            const translateValue = -index * 100 + '%';
            container.style.transform = 'translateX(' + translateValue + ')';
        }

        function nextSlide() {
            const totalSlides = document.querySelectorAll('.carousel-item').length;
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        function prevSlide() {
            const totalSlides = document.querySelectorAll('.carousel-item').length;
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        }