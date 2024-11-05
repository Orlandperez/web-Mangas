document.addEventListener("DOMContentLoaded", function() {  
    const slides = document.querySelectorAll('.slide');  
    let currentIndex = 0;  

    function showNextSlide() {  
        slides[currentIndex].style.display = 'none'; // Ocultar la diapositiva actual  
        currentIndex = (currentIndex + 1) % slides.length; // Mover al siguiente índice  
        slides[currentIndex].style.display = 'block'; // Mostrar la nueva diapositiva  
    }  

    // Inicializar el slider  
    slides.forEach((slide, index) => {  
        slide.style.display = index === 0 ? 'block' : 'none'; // Mostrar solo la primera diapositiva  
    });  

    // Cambiar de diapositiva cada 3 segundos  
    setInterval(showNextSlide, 3000);  
}); 