addEventListener("DOMContentLoaded", () => {
    const proyectos = document.querySelectorAll(".proyecto")
    const ventana = document.querySelector(".fondo-borroso")
    const cerrarVentana = document.querySelector(".descripcion-proyecto--cerrar")
    cerrarVentana.addEventListener("click", () => {
        ventana.classList.toggle("mostrar")
    })
    const informacion = {
        controlDePrecios: {
            titulo: "CONTROL DE PRECIOS",
            cliente: "Carnicería Multicarnes Santa Lucía",
            descripcion: "Esta es una página web en la cual se pueden mostrar diversos productos para el público en la página principal. A su vez, existe la opción de que se inicie sesión.",
            enlace: "https://carniceria-sl-final.herokuapp.com/",
            enlaceGit: "https://github.com/CesarCr300/Carniceria-SL"
        },
        apirestNotas: {
            titulo: "APIREST DE NOTAS",
            cliente: "Personal",
            descripcion: "",
            enlace: "https://notes-apirest.herokuapp.com/",
            enlaceGit: "https://github.com/CesarCr300/APIREST-NOTES"
        }
    }
    for (let proyecto of proyectos) {
        proyecto.addEventListener("click", () => {
            const descripcionProyecto = document.querySelector(".descripcion-proyecto--contenido")
            descripcionProyecto.innerHTML = `
            <h2>${informacion[proyecto.id].titulo}</h2>
                <p class="descripcion-proyecto--descripcion">Cliente: ${informacion[proyecto.id].cliente}</p>
                <p class="descripcion-proyecto--descripcion">${informacion[proyecto.id].descripcion} </p>
                <a href="${informacion[proyecto.id].enlaceGit}" target="_blank">Códigoaaa</a>
                <a href="${informacion[proyecto.id].enlace}" target="_blank">Producto Final</a>
            `
            ventana.classList.toggle("mostrar")
        })
    }
})