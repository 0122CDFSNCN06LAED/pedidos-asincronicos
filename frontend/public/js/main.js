window.onload = () => {
    const app = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    app.appendChild(container);

    // buscar una API
    // hacer GET al URL de la API
    fetch("http://localhost:3000/api/movies")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            console.log(data);
            data.data.forEach((movie) => {
                const card = `<div class="card">
               <h1>${movie.title}</h1>
               <p>Rating:${movie.rating}</p>
               <p>Duración:${movie.length}</p>
               <p>Genero: ${movie.genre ? movie.genre.name : "sin genero"}</p>
           </div>`;
                container.innerHTML += card;
            });
        });

    // peliculas guardarlo en un array llamado "movies"
    // renderizar pagina
    // hacer un for each sobre "movies"
    // mostrar los contenedores como estaban en el ejemplo de frontend
    // mostrar en el archivo html mediante innerhtml
    //
};
