// Componente header y footer para ser reutilizados
const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

// Cosas del header
header.innerHTML = `
    <div class="logo">
        <a href="./index.html">MANGA 100%</a>
    </div>

    <div class="nav-container" >  
        <ul>
          <li> <a href="./novedades.html">Novedades</a></li>
          <li> <a href="./nuestros-mangas.html">Nuestros Mangas</a></li>
          <li> <a href="./tutoriales.html">Tutoriales</a></li>
          <li> <a href="./locales.html">Locales</a></li>
          <li> <a href="./trabaja-con-nosotros.html">Sumate a Nuestro Equipo</a></li>
          <li> <a href="./sobre-nosotros.html">Sobre Nosotros</a></li>
          <li> <a href="./contacto.html">Contacto</a></li>
        </ul>
        <i class="bi bi-list"></i>
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
        <li><a href="./index.html">Inicio</a></li>
        <li><a href="./nuestros-mangas.html">Nuestros Mangas</a></li>
        <li><a href="./locales.html">Locales</a></li>
        <li><a href="./novedades.html">Novedades</a></li>
      </ul>
    </div>
    
    <!-- ¿Necesitas Ayuda? -->
    <div class="footer-section">
      <h3>Necesitás Ayuda</h3>
      <ul>
        <li><a href="./tutoriales.html">Tutoriales</a></li>
        <li><a href="./sobre-nosotros.html">Sobre Nosotros</a></li>
        <li><a href="./contacto.html">Contacto</a></li>
        <li><a href="./trabaja-con-nosotros.html">Sumate a nuestro Equipo</a></li>
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