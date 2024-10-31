// Componente header y footer para ser reutilizados
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

// Cosas del header
header.innerHTML = `
    <div class="logo">
        <a href="#">MANGA 100%</a>
    </div>

    <div class="navbar-container" >
        <nav class="navbar">
            <ul>
                <li><a class="navbar-item" data-section="Inicio-container" href="#">Inicio</a></li>
                <li><a class="navbar-item" data-section="Productos-container" href="#">Productos</a></li>
                <li><a class="navbar-item" data-section="Tutoriales-container" href="#">Tutoriales</a></li>
                <li><a class="navbar-item" data-section="Locales-container" href="#">Locales</a></li>
                <li><a class="navbar-item" data-section="Nosotros-container" href="#">Nosotros</a></li>
                <li><a class="navbar-item" data-section="Contacto-container" href="#">Contacto</a></li>
            </ul>
        </nav>
    </div>


    <div class="header-actions">
        <a href="#" class="btn-login">Iniciar Sesión</a>
    </div>
`;



// cosas del footer
footer.innerHTML = ` `;