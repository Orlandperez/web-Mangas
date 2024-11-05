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
                <li id=inicio-container><a class="navbar-item" data-section="Inicio-container" href="./index.html">Inicio</a></li>
                <li id=novedades-container><a class="navbar-item" data-section="Novedades-container" href="./novedades.html">Novedades</a></li>
                <li id=productos-container><a class="navbar-item" data-section="Productos-container" href="./nuestros-mangas.html">Nuestros Mangas</a></li>
                <li id=tutoriales-container><a class="navbar-item" data-section="Tutoriales-container" href="#">Tutoriales</a></li>
                <li id=locales-container><a class="navbar-item" data-section="Locales-container" href="#">Locales</a></li>
                <li id=nosotros-container><a class="navbar-item" data-section="Nosotros-container" href="./trabaja-con-nosotros.html">Sumate a Nuestro Equipo</a></li>
                <li id=nosotros-container><a class="navbar-item" data-section="Nosotros-container" href="./trabaja-con-nosotros.html">Sobre Nosotros</a></li>
                <li id=contacto-container><a class="navbar-item" data-section="Contacto-container" href="#">Contacto</a></li>
            </ul>
        </nav>
    </div>


    <div class="header-actions">
        
    </div>
`;



// cosas del footer
footer.innerHTML = `
      <footer> 
      <!-- Footer -->
<footer>
  <div class="footer-container">
    
    <!-- Contenido -->
    <div class="footer-section">
      <h3>Contenido</h3>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nuestros Mangas</a></li>
        <li><a href="#">Locales</a></li>
        <li><a href="#">Novedades</a></li>
      </ul>
    </div>
    
    <!-- ¿Necesitas Ayuda? -->
    <div class="footer-section">
      <h3>Necesitás Ayuda</h3>
      <ul>
        <li><a href="#">Tutoriales</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Sumate a nuestro Equipo</a></li>
      </ul>
    </div>
    
    <!-- Newsletter -->
    <div class="footer-section">
      <h3>Suscripción</h3>
      <p>Recibe nuestras novedades</p>
      <form action="#" method="post">
        <input type="email" name="email" placeholder="Tu email">
        <button type="submit">Suscribirse</button>
      </form>
    </div>

  </div>
</footer>


         <p>&copy; 2024 Tienda de Mangas. Todos los derechos reservados.</p>
      </footer>
`;