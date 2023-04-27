const imagenes = document.querySelectorAll('.jpg');

let contador = 0;
for (let i = 0; i < imagenes.length; i++) {
  if (listaDeImagenes.includes(imagenes[i].src)) {
    contador++;
  }
}


    function loadApp() {
        // Obtener la cantidad de imágenes en la carpeta "files/pages/"
        let numImages = 0;
        {% for file in files %}
            numImages++;
        {% endfor %}

        // Crear los divs de forma dinámica
        for (var i = 1; i <= numImages; i++) {
            var div = document.createElement("div");
            div.style.backgroundImage = "url(files/pages/" + i + ".jpg)";
            document.querySelector(".flipbook").appendChild(div);
        }
    

        // Inicializar el flipbook
        $('.flipbook').turn({
            // Width
            width: 922,

            // Height
            height: 600,

            // Elevation
            elevation: 50,

            // Enable gradients
            gradients: true,

            // Auto center this flipbook
            autoCenter: true
        });
    

    // Load the HTML4 version if there's not CSS transform
    yepnope({
        test : Modernizr.csstransforms,
        yep: ['files/lib/turn.js'],
        nope: ['files/lib/turn.html4.min.js'],
        both: ['files/css/basic.css'],
        complete: loadApp
    });

    fetch('/files/pages')
    .then(response => response.json())
    .then(data => {
        const flipbook = document.getElementById('flipbook');
        data.forEach(image => {
            const div = document.createElement('div');
            div.style.backgroundImage = `url(${image})`;
            flipbook.appendChild(div);
        });
    });
    }
