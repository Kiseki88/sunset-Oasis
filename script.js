document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".ho-slider ul li");
    const dots = document.querySelectorAll(".ho-pagination-dots .dot");

    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(n) {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");
        slides[n].classList.add("active");
        dots[n].classList.add("active");
        currentSlide = n;
    }

    // Function to move to the next slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        showSlide(next);
    }

    // Function to move to the previous slide
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) {
            prev = slides.length - 1;
        }
        showSlide(prev);
    }

    // Add click event listeners to the pagination dots
    dots.forEach(function(dot, index) {
        dot.addEventListener("click", function() {
            showSlide(index);
        });
    });

    // Set an interval to automatically move to the next slide
    setInterval(nextSlide,5000);
});




// Function to check if an element is in the viewport
// JavaScript to handle scroll animations
document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { root: null, rootMargin: "50px", threshold: 0.1 }
    );
  
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
  });
  
  // JavaScript to hide preloading screen when all assets are loaded
 
  
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    
    // Hide the body content initially
    document.body.style.visibility = "hidden";

    // Add a delay before hiding the loader
    setTimeout(() => {
        loader.classList.add("loader--hidden");
        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
            
            // Show the body content after the loader is hidden
            document.body.style.visibility = "visible";
        });
    }, 1000); // You can adjust the delay time as needed.
});

