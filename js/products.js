const productos = [
    {
        "id": 1,
        "nombre": "Clannad",
        "genero": "Drama, Comedia cinematográfica, Fantasía",
        "precio": 7.99,
        "imagen": "https://www.justwatch.com/images/poster/247920672/s332/temporada-2"
      },
      {
        "id": 2,
        "nombre": "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
        "genero": "drama, escolar, psicológico, comedia, romance, sobrenatural",
        "precio": 8.99,
        "imagen": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/cceea00bfe0ffc70daaca113c9521597.jpe"
      },
      {
        "id": 3,
        "nombre": "Kami nomi zo Shiru Sekai",
        "genero": "Fantasía, comedia romántica",
        "precio": 9.99,
        "imagen": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/4462386a1d99869f81bcc2cf3effc767.jpe"
      },
      {
        "id": 4,
        "nombre": "Yahari Ore no Seishun Love Come wa Machigatteiru",
        "genero": "Comedia romántica, Drama, Recuentos de la vida",
        "precio": 7.49,
        "imagen": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/175ec0cc47134cdbd9e5e6a7f4e7e54f.jpe"
      },
      {
        "id": 5,
        "nombre": "Kage no Jitsuryokusha ni Naritakute!",
        "genero": " Isekai, harem, fantasía, steampunk",
        "precio": 8.49,
        "imagen": "https://m.media-amazon.com/images/M/MV5BMDFmMWJlMWYtMDFkNi00OWViLTkzOGEtNDI0YWNmM2M5MzI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      },
      {
        "id": 6,
        "nombre": "To Love-Ru",
        "genero": "Ciencia ficción, comedia, harem, ecchi, escolar",
        "precio": 9.49,
        "imagen": "https://m.media-amazon.com/images/M/MV5BNWQ1NTkwZWQtYWFjZC00MWY4LThlZGItYTYwZDlmZjIwNmYyXkEyXkFqcGc@._V1_.jpg"
      },
      {
        "id": 7,
        "nombre": "Go-tōbun no hanayome",
        "genero": "Comedia romántica, harem, recuentos de la vida",
        "precio": 8.99,
        "imagen": "https://www.anmosugoi.com/wp-content/uploads/2024/09/Go-Toubun-no-Hanayome-Special-2-visual-scaled.webp"
      },
      {
        "id": 8,
        "nombre": "Boku no kokoro no yabai yatsu",
        "genero": "Comedia romántica, recuentos de la vida",
        "precio": 8.99,
        "imagen": "https://ramenparados.com/wp-content/uploads/2023/02/The-Danger-in-my-heart-key-300x424.jpg"
      },
      {
        "id": 9,
        "nombre": "Chūnibyō Demo Koi ga Shitai!",
        "genero": "Romance, Comedia romántica, Película biográfica, Drama.",
        "precio": 10.49,
        "imagen": "https://www.justwatch.com/images/poster/301093666/s718/chuunibyou-demo-koi-ga-shitai.jpg"
      },
      {
        "id": 10,
        "nombre": "Domestic na kanojo",
        "genero": "romántica, drama, recuentos de la vida, ero",
        "precio": 10.99,
        "imagen": "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/540bda1e6b0665998a0c2b23efe627ba.jpe"
      }
];

// Función para mostrar los productos en el HTML
function mostrarProductos(productos) {
    const menuContainer = document.getElementById('producto-lista');
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>Genero: ${producto.genero}</p>
            <span>Precio: $${producto.precio}</span>
            
        `;

        menuContainer.appendChild(productoDiv);
    });
}

// Llamada a la función con los productos
mostrarProductos(productos);