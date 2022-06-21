window.onload = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const movieId = urlParams.get("movieId");

    const form = document.querySelector(".formulario");

    const editButton = document.querySelector(".botonModificar");
    const deleteButton = document.querySelector(".botonBorrar");
    const createButton = document.querySelector(".botonAgregar");

    if (movieId) {
        createButton.style.display = "none";

        //Estamos editando
        const response = await fetch(
            "http://localhost:3000/api/movies/" + movieId
        );

        const data = await response.json();
        const movie = data.data;

        Object.keys(movie).forEach((key) => {
            if (form[key]) {
                if (key == "release_date") {
                    // Arreglar lo de la fecha
                } else {
                    form[key].value = movie[key];
                }
            }
        });
    } else {
        //Estamos creando

        deleteButton.style.display = "none";
        editButton.style.display = "none";
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const values = {
            title: form["title"].value,
            rating: form["rating"].value,
            awards: form["awards"].value,
            release_date: form["release_date"].value,
            length: form["length"].value,
        };

        let url;
        if (movieId) {
            url = "http://localhost:3000/api/movies/update/" + movieId;
            method = "PUT";
        } else {
            url = "http://localhost:3000/api/movies/create";
            method = "POST";
        }

        const response = await fetch(url, {
            method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(values),
        });
        console.log(response);
    });
};
