const slider = document.getElementById('slider');
        const scrollLeftBtn = document.getElementById('scrollLeft');
        const scrollRightBtn = document.getElementById('scrollRight');
        const cardWidth = document.querySelector('.slideZConsultMethod').clientWidth;
        let autoScrollInterval;
        let numOfSlides;
    
        // Function to start the autoplay
        function startAutoScroll() {
            if (window.innerWidth > 767 && canScroll()) {
                autoScrollInterval = setInterval(() => {
                    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                        slider.scrollTo({
                            left: 0,
                            behavior: 'smooth'
                        });
                    } else {
                        slider.scrollBy({
                            left: cardWidth,
                            behavior: 'smooth'
                        });
                    }
                }, 2000);
            }
        }
    
        // Function to stop the autoplay
        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }
    
        // Function to handle resize events
        function handleResize() {
            stopAutoScroll();
            startAutoScroll();
        }
    
        // Function to determine if the slider can scroll
        function canScroll() {
            return slider.scrollWidth > slider.clientWidth;
        }
    
        // Event listeners for the scroll buttons
        scrollLeftBtn.addEventListener('click', function () {
            stopAutoScroll();
            if (slider.scrollLeft === 0) {
                slider.scrollTo({
                    left: slider.scrollWidth,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollBy({
                    left: -cardWidth,
                    behavior: 'smooth'
                });
            }
        });
    
        scrollRightBtn.addEventListener('click', function () {
            stopAutoScroll();
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                slider.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                slider.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth'
                });
            }
        });
    
        // Start autoplay initially if possible
        startAutoScroll();
    
        // Pause autoplay on mouse hover
        slider.addEventListener('mouseenter', stopAutoScroll);
    
        // Resume autoplay on mouse leave
        slider.addEventListener('mouseleave', startAutoScroll);
    
        // Handle window resize to check for width changes
        window.addEventListener('resize', handleResize);
    
        // Adjust initial scroll position for seamless looping
        slider.scrollLeft = 0;