
// Obtener los modales  
var modal = document.getElementById("myModal");  
var thankYouModal = document.getElementById("thankYouModal");  

// Mostrar el modal al cargar la página si no ha sido mostrado antes  
window.onload = function() {  
    if (!localStorage.getItem("modalShown")) {  
        modal.style.display = "block";  
    }  
}  

// Obtener los elementos <span> que cierran los modales  
var span = document.getElementsByClassName("close")[0];  
var closeThankYou = document.getElementsByClassName("close-thank-you")[0];   

// Cuando el usuario hace clic en <span> (x), cerrar el modal  
span.onclick = function() {  
    modal.style.display = "none";  
    localStorage.setItem("modalShown", "true"); // Marcar el modal como mostrado  
}  

// Cuando el usuario hace clic en cualquier parte fuera del modal, cerrarlo  
window.onclick = function(event) {  
    if (event.target == modal) {  
        modal.style.display = "none";  
        localStorage.setItem("modalShown", "true"); // Marcar el modal como mostrado  
    }   
    if (event.target == thankYouModal) {  
        thankYouModal.style.display = "none";  
    }  
}  

// Función para manejar la suscripción  
document.getElementById("subscribeBtn").onclick = function() {  
    var email = document.getElementById("email").value;  
    if (email) {   
        modal.style.display = "none"; // Cerrar el modal  
        thankYouModal.style.display = "block"; // Mostrar el modal de agradecimiento    
        localStorage.setItem("modalShown", "true"); // Marcar el modal como mostrado  
    } else {  
        alert("Por favor, ingresa un correo electrónico válido.");  
    }  
}


