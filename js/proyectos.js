addEventListener("DOMContentLoaded", () => {
    console.log("cambio realizado")
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
            descripcion: "Página web con: CRUD, roles, autenticación, mensajes flash y autenticación por parte de los formularios.",
            enlace: "https://carniceria-sl-final.herokuapp.com/",
            tecnologiasUsadas: "JS, Node, MongoDb, Express, Bootstrap",
            enlaceGit: "https://github.com/CesarCr300/Carniceria-SL"
        },
        apirestNotas: {
            titulo: "APIREST DE NOTAS",
            cliente: "Personal",
            descripcion: "Apirest con: CRUD y autenticación",
            enlace: "https://notes-apirest.herokuapp.com/",
            tecnologiasUsadas: "JS, Node, MongoDB, Express, Babel",
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
                <p class="descripcion-proyecto--descripcion">Tecnologías usadas: ${informacion[proyecto.id].tecnologiasUsadas}</p>
            `
            const contenedorEnlaces = document.createElement('div')
            contenedorEnlaces.classList.add('descripcion-proyecto--contenido--enlaces')
            let htmlEnlaces = ``
            if (informacion[proyecto.id].enlaceGit) {
                htmlEnlaces += `<a href="${informacion[proyecto.id].enlaceGit}" target="_blank" class="boton">Código</a>\n`
            }
            if (informacion[proyecto.id].enlace) {
                htmlEnlaces += `<a href="${informacion[proyecto.id].enlace}" target="_blank" class="boton">Producto Final</a>\n`
            }
            contenedorEnlaces.innerHTML = htmlEnlaces
            descripcionProyecto.appendChild(contenedorEnlaces)

            ventana.classList.toggle("mostrar")
        })
    }
})