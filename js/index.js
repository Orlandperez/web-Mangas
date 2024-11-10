// Menu amburguesa
const menu = document.querySelector('i');
const links = document.querySelector('ul');

menu.addEventListener("click", () =>{
    links.classList.toggle("mobile-menu")
});






// .................
document.addEventListener("DOMContentLoaded", function() {  
    const slides = document.querySelectorAll('.slide');  
    const prevBtn = document.getElementById('prevBtn');  
    const nextBtn = document.getElementById('nextBtn');  
    let currentIndex = 0;  

    function showSlide(index) {  
        const totalSlides = slides.length;  
        currentIndex = (index + totalSlides) % totalSlides; // Asegura que el índice esté dentro del rango  
        const offset = -currentIndex * 100; // Calcular el desplazamiento  
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;  
    }  

    prevBtn.addEventListener('click', () => {  
        showSlide(currentIndex - 1);  
    });  

    nextBtn.addEventListener('click', () => {  
        showSlide(currentIndex + 1);  
    });  

    showSlide(currentIndex); // Mostrar la primera diapositiva  
});  